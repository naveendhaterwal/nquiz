import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { jeeMockTests } from '../../data/jeeMockData';
import styles from '../../styles/JeeMock.module.css';

const OPTION_KEYS = ['A', 'B', 'C', 'D'];

function formatRemainingTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');
}

function parseNumericLike(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;

  if (raw.includes('/')) {
    const parts = raw.split('/').map((part) => part.trim());
    if (parts.length !== 2) return null;
    const num = Number(parts[0]);
    const den = Number(parts[1]);
    if (Number.isNaN(num) || Number.isNaN(den) || den === 0) return null;
    return num / den;
  }

  const parsed = Number(raw);
  if (Number.isNaN(parsed)) return null;
  return parsed;
}

function isIntegerAnswerCorrect(expected, given) {
  const expectedText = String(expected || '').trim().toLowerCase();
  const givenText = String(given || '').trim().toLowerCase();
  if (!givenText) return false;

  if (expectedText === givenText) return true;

  const expectedNumeric = parseNumericLike(expectedText);
  const givenNumeric = parseNumericLike(givenText);
  if (expectedNumeric === null || givenNumeric === null) return false;
  return Math.abs(expectedNumeric - givenNumeric) < 1e-9;
}

function getQuestionStatus(question, selectedAnswer) {
  const answerText = String(selectedAnswer || '').trim();
  if (!answerText) return 'unattempted';

  if (question.type === 'integer') {
    return isIntegerAnswerCorrect(question.correctAnswer, selectedAnswer)
      ? 'correct'
      : 'wrong';
  }

  if (selectedAnswer === question.correctAnswer) return 'correct';
  return 'wrong';
}

function ReviewQuestionCard({ question, index, selectedAnswer }) {
  const status = getQuestionStatus(question, selectedAnswer);
  const metaClass =
    status === 'correct'
      ? `${styles.reviewMeta} ${styles.metaCorrect}`
      : status === 'wrong'
      ? `${styles.reviewMeta} ${styles.metaWrong}`
      : `${styles.reviewMeta} ${styles.metaUnattempted}`;

  const shownWrongReasons = Object.entries(question.whyOtherOptionsWrong || {});

  return (
    <article className={styles.reviewCard}>
      <span className={metaClass}>
        Q{index + 1} • {status.toUpperCase()}
      </span>
      <div className={styles.reviewTopicLine}>
        <span className={styles.typeBadge}>{question.type === 'integer' ? 'INTEGER' : 'MCQ'}</span>
        <span className={styles.topicText}>{question.topic || 'General'}</span>
      </div>
      <p className={styles.reviewQuestion}>{question.fullQuestion}</p>
      <p className={styles.kv}>
        <strong>Your answer:</strong> {selectedAnswer || 'Not attempted'}
      </p>
      <p className={styles.kv}>
        <strong>Correct answer:</strong> {question.correctAnswer}
      </p>
      <p className={styles.kv}>
        <strong>Why correct:</strong> {question.whyCorrect}
      </p>

      {question.type === 'mcq' && (
        <div className={styles.wrongReasons}>
          <p className={styles.kv}>
            <strong>Why the other 3 options are wrong:</strong>
          </p>
          {shownWrongReasons.map(([optionKey, reason]) => (
            <p key={optionKey} className={styles.wrongReasonItem}>
              {optionKey}: {reason}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}

export default function JeeMockTestPage() {
  const router = useRouter();
  const { testId } = router.query;

  const test = useMemo(
    () => jeeMockTests.find((item) => item.id === testId),
    [testId]
  );

  const totalQuestions = test?.questions?.length || 0;
  const initialSeconds = (test?.durationMinutes || 180) * 60;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!test) return;
    setCurrentIndex(0);
    setAnswers(new Array(test.questions.length).fill(''));
    setRemainingSeconds((test.durationMinutes || 180) * 60);
    setSubmitted(false);
  }, [test]);

  useEffect(() => {
    if (!test || submitted) return undefined;

    const tick = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(tick);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [submitted, test]);

  if (!router.isReady) {
    return null;
  }

  if (!test) {
    return (
      <div className={styles.page}>
        <main className={styles.container}>
          <div className={styles.header}>
            <Link href="/jee-mock" className={styles.backLink}>
              ← Back to JEE Home
            </Link>
          </div>
          <h1 className={styles.title}>Test Not Found</h1>
          <p className={styles.instructions}>This test id does not exist in the catalog.</p>
        </main>
      </div>
    );
  }

  if (!totalQuestions) {
    return (
      <div className={styles.page}>
        <main className={styles.container}>
          <div className={styles.header}>
            <Link href="/jee-mock" className={styles.backLink}>
              ← Back to JEE Home
            </Link>
          </div>
          <p>No questions found for this test.</p>
        </main>
      </div>
    );
  }

  const currentQuestion = test.questions[currentIndex];

  const results = (() => {
    const grouped = {
      correct: [],
      wrong: [],
      unattempted: [],
    };

    test.questions.forEach((question, idx) => {
      const selectedAnswer = answers[idx];
      const status = getQuestionStatus(question, selectedAnswer);
      grouped[status].push({
        question,
        index: idx,
        selectedAnswer,
      });
    });

    return grouped;
  })();

  const selectAnswer = (optionKey) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionKey;
      return next;
    });
  };

  const setIntegerAnswer = (text) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = text;
      return next;
    });
  };

  const goTo = (index) => {
    if (index < 0 || index >= totalQuestions) return;
    setCurrentIndex(index);
  };

  const submitTest = () => setSubmitted(true);

  return (
    <div className={styles.page}>
      <Head>
        <title>{test.title} - JEE Route</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <div className={styles.header}>
          <Link href="/jee-mock" className={styles.backLink}>
            ← Back to JEE Home
          </Link>
          {!submitted && <div className={styles.timer}>Time Left: {formatRemainingTime(remainingSeconds)}</div>}
        </div>

        <h1 className={styles.title}>{test.title}</h1>
        <p className={styles.instructions}>{test.instructions}</p>

        {!submitted ? (
          <section className={styles.card}>
            <div className={styles.topBar}>
              <span className={styles.counter}>
                Question {currentIndex + 1} / {totalQuestions}
              </span>
              <button type="button" className={styles.submitBtn} onClick={submitTest}>
                Submit Test
              </button>
            </div>

            <p className={styles.question}>{currentQuestion.fullQuestion}</p>

            {currentQuestion.type === 'integer' ? (
              <div className={styles.integerWrap}>
                <label htmlFor="integer-answer" className={styles.integerLabel}>
                  Enter integer answer
                </label>
                <input
                  id="integer-answer"
                  type="text"
                  className={styles.integerInput}
                  value={answers[currentIndex] || ''}
                  onChange={(e) => setIntegerAnswer(e.target.value)}
                  placeholder="Type answer (example: 5 or 1/2)"
                />
              </div>
            ) : (
              currentQuestion.options.map((optionText, optionIndex) => {
                const optionKey = OPTION_KEYS[optionIndex];
                const selected = answers[currentIndex] === optionKey;
                const className = selected
                  ? `${styles.optionBtn} ${styles.selected}`
                  : styles.optionBtn;

                return (
                  <button
                    key={optionKey}
                    type="button"
                    className={className}
                    onClick={() => selectAnswer(optionKey)}
                  >
                    <span className={styles.optionLabel}>{optionKey}.</span>
                    <span>{optionText}</span>
                  </button>
                );
              })
            )}

            <div className={styles.nav}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => goTo(currentIndex - 1)}
                disabled={currentIndex === 0}
              >
                ← Prev
              </button>

              {currentIndex === totalQuestions - 1 ? (
                <button type="button" className={styles.submitBtn} onClick={submitTest}>
                  Finish Test
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.primaryBtn}
                  onClick={() => goTo(currentIndex + 1)}
                >
                  Next →
                </button>
              )}
            </div>

            <div className={styles.palette}>
              {test.questions.map((question, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = String(answers[idx] || '').trim() !== '';
                const pillClass = isCurrent
                  ? `${styles.pill} ${styles.current}`
                  : isAnswered
                  ? `${styles.pill} ${styles.answered}`
                  : styles.pill;

                return (
                  <button
                    key={question.id || idx}
                    type="button"
                    className={pillClass}
                    onClick={() => goTo(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          <section>
            <div className={styles.resultGrid}>
              <div className={styles.resultBox}>
                <div className={styles.resultLabel}>Correct</div>
                <div className={styles.resultValue}>{results.correct.length}</div>
              </div>
              <div className={styles.resultBox}>
                <div className={styles.resultLabel}>Wrong</div>
                <div className={styles.resultValue}>{results.wrong.length}</div>
              </div>
              <div className={styles.resultBox}>
                <div className={styles.resultLabel}>Unattempted</div>
                <div className={styles.resultValue}>{results.unattempted.length}</div>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Wrong Questions</h2>
            {results.wrong.length === 0 ? (
              <p className={styles.instructions}>No wrong questions.</p>
            ) : (
              results.wrong.map((item) => (
                <ReviewQuestionCard
                  key={item.index}
                  question={item.question}
                  index={item.index}
                  selectedAnswer={item.selectedAnswer}
                />
              ))
            )}

            <h2 className={styles.sectionTitle}>Unattempted Questions</h2>
            {results.unattempted.length === 0 ? (
              <p className={styles.instructions}>No unattempted questions.</p>
            ) : (
              results.unattempted.map((item) => (
                <ReviewQuestionCard
                  key={item.index}
                  question={item.question}
                  index={item.index}
                  selectedAnswer={item.selectedAnswer}
                />
              ))
            )}

            <h2 className={styles.sectionTitle}>Correct Questions</h2>
            {results.correct.length === 0 ? (
              <p className={styles.instructions}>No correct questions yet.</p>
            ) : (
              results.correct.map((item) => (
                <ReviewQuestionCard
                  key={item.index}
                  question={item.question}
                  index={item.index}
                  selectedAnswer={item.selectedAnswer}
                />
              ))
            )}
          </section>
        )}
      </main>
    </div>
  );
}
