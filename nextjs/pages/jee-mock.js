import Head from 'next/head';
import Link from 'next/link';
import { jeeMockTests } from '../data/jeeMockData';
import styles from '../styles/JeeMock.module.css';

export default function JeeMockHomePage() {
  return (
    <div className={styles.page}>
      <Head>
        <title>JEE Mock Tests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>

        <h1 className={styles.title}>JEE Mock Test Home</h1>
        <p className={styles.instructions}>Choose a test to start. All tests use final-answer reveal after submission.</p>

        <section className={styles.testList}>
          {jeeMockTests.map((test) => (
            <article key={test.id} className={styles.testCard}>
              <div className={styles.testMetaRow}>
                <span className={styles.typeBadge}>TEST</span>
                <span className={styles.topicText}>{test.durationMinutes} min</span>
              </div>
              <h2 className={styles.testTitle}>{test.title}</h2>
              <p className={styles.testDesc}>{test.instructions}</p>
              <p className={styles.testStats}>Questions: {test.questions.length}</p>
              <Link href={`/jee-mock/${test.id}`} className={styles.launchLink}>
                Start Test →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
