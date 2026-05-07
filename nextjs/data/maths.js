// Complete DPP data extracted from index.html
const maths = [
  {
    id: 1,
    title: "DPP 1: Logic, Satisfiability & Quantifiers",
    type: "mcq",
    description: "Satisfiability, Sudoku Modeling, Rules of Inference, and Quantifier logic (20 Qs)",
    questions: [
      { q: "A compound proposition is 'Unsatisfiable' if:", a: ["It is true for at least one assignment of truth values.", "It is true for all assignments of truth values.", "It is false for all assignments of truth values.", "Its negation is a contradiction."], correct: 2, expl: "Unsatisfiable means there is no scenario (no truth assignment) where the statement evaluates to True." },
      { q: "Evaluate the satisfiability of: $(p \\leftrightarrow q) \\land (\\neg p \\leftrightarrow q)$", a: ["Tautology", "Satisfiable but not a tautology", "Unsatisfiable", "Valid"], correct: 2, expl: "The first clause requires p and q to have the same truth value. The second requires $\\neg p$ and q to have the same truth value. Both cannot be true simultaneously." },
      { q: "Evaluate the satisfiability of: $(p \\to q) \\land (p \\to \\neg q) \\land (\\neg p \\to q) \\land (\\neg p \\to \\neg q)$", a: ["Tautology", "Satisfiable", "Unsatisfiable", "Contingency"], correct: 2, expl: "If p is True, it implies both q and $\\neg q$ (a contradiction). If p is False, $\\neg p$ is True, which also implies both q and $\\neg q$ (contradiction)." },
      { q: "If a SAT solver determines that the negation of your proposition ($\\neg P$) is UNSAT, what does that logically mean for the original proposition $P$?", a: ["$P$ is a contradiction.", "$P$ is a tautology (valid).", "$P$ is satisfiable but not valid.", "$P$ cannot be evaluated."], correct: 1, expl: "If it is impossible for $\\neg P$ to be true, then P must be true under all possible assignments." },
      { q: "Which of these is a 'Vacuously True' statement?", a: ["All even prime numbers greater than 2 are divisible by 5.", "There exists a number that is not equal to itself.", "1 + 1 = 2.", "If 1 + 1 = 3, then I am a robot."], correct: 3, expl: "An implication $P \\to Q$ is automatically (vacuously) true if the premise P is false. '1+1=3' is false, making the whole statement true." },
      { q: "Query A is \"java AND program AND NOT computer\". Query B is \"(computer OR algorithm) AND java\". What kind of web page would be returned by Query A but NOT by Query B?", a: ["A page containing only \"java\" and \"computer\".", "A page containing \"java\", \"program\", but lacking \"computer\" and \"algorithm\".", "A page containing \"java\", \"program\", and \"algorithm\".", "A page containing \"program\" and \"computer\"."], correct: 1, expl: "Query A requires \"java\", \"program\", and NO \"computer\". To fail Query B, the page must also NOT contain \"algorithm\" (since it already contains \"java\")." },
      { q: "Query C is \"java AND NOT (computer OR algorithm OR program)\". Applying DeMorgan's Law, a page returned by this query MUST:", a: ["Contain \"java\" and at least one of the other three words.", "Contain \"java\" and exactly one of the other three words.", "Contain \"java\", but NOT contain \"computer\", NOT contain \"algorithm\", and NOT contain \"program\".", "Not contain \"java\"."], correct: 2, expl: "NOT (A OR B OR C) is logically equivalent to NOT A AND NOT B AND NOT C." },
      { q: "Consider the query: \"python AND (list OR NOT tuple)\". Which of the following pages will NOT be returned?", a: ["A page with \"python\" and \"list\" and \"tuple\".", "A page with \"python\" and \"tuple\" but no \"list\".", "A page with \"python\" and no \"list\" and no \"tuple\".", "A page with \"python\" and \"list\" but no \"tuple\"."], correct: 1, expl: "The page has \"python\" (True). It has \"tuple\" (NOT tuple is False) and no \"list\" (False). So (list OR NOT tuple) evaluates to False OR False = False." }
    ]
  },
  {
    id: 2,
    title: "DPP 2: Boolean Logic & Predicates",
    type: "mcq",
    description: "Boolean Simplification, K-maps, Logic Gates, CNF/DNF, and Predicate Modeling (25 Qs)",
    questions: [
      { q: "Simplify the Boolean function $F(x,y) = \\overline{\\overline{x}} + y$.", a: ["$x + y$", "$\\overline{x} + y$", "$xy$", "1"], correct: 0, expl: "By the double negation law, $\\overline{\\overline{x}} = x$. Thus the expression simplifies directly to $x + y$." },
      { q: "What is the canonical Sum-of-Products (minterm) expansion of $F(x,y) = x$ over variables $x$ and $y$?", a: ["$x$", "$xy + x\\overline{y}$", "$x + y$", "$xy$"], correct: 1, expl: "To include the missing variable $y$, we multiply by $(y + \\overline{y}) = 1$. So, $x(y + \\overline{y}) = xy + x\\overline{y}$." },
      { q: "What is the canonical Sum-of-Products expansion of $F(x,y) = 1$ over variables $x$ and $y$?", a: ["$xy$", "$x + y$", "$xy + x\\overline{y} + \\overline{x}y + \\overline{x}\\overline{y}$", "$0$"], correct: 2, expl: "A function that is always 1 includes every possible minterm for the given variables to cover all truth table rows." },
      { q: "A Boolean function represented as a Boolean product of maxterms is called:", a: ["Disjunctive Normal Form (DNF)", "Conjunctive Normal Form (CNF)", "Sum of Products (SOP)", "K-map"], correct: 1, expl: "Product-of-sums (POS) or a product of maxterms is also formally known as Conjunctive Normal Form (CNF)." },
      { q: "In a 3-variable Karnaugh Map (K-map), how many cells are present?", a: ["4", "6", "8", "16"], correct: 2, expl: "A K-map for $n$ variables has $2^n$ cells. For 3 variables ($x, y, z$), $2^3 = 8$." }
    ]
  },
  {
    id: 3,
    title: "DPP 3: Logical Arguments & Inference",
    type: "mcq", 
    description: "Multi-Premise Arguments, Rules of Inference, Modus Ponens & Modus Tollens (10 Qs)",
    questions: [
      { q: "Given the following premises:<br>P1: The research will not be completed on time.<br>P2: If the project is funded, then we will buy new equipment.<br>P3: If we buy new equipment, then the research will be completed on time.<br>P4: The grant is not renewed or the project is funded.<br><br>What valid conclusion can be drawn?", a: ["We will buy new equipment.", "The project is funded.", "The grant is not renewed.", "The grant is renewed."], correct: 2, expl: "Let C = completed, F = funded, E = equipment, G = grant renewed. P1: $\\neg C$. P3: $E \\to C$, so by Modus Tollens, $\\neg E$. P2: $F \\to E$, so by Modus Tollens, $\\neg F$. P4: $\\neg G \\lor F$, and since $\\neg F$, by Disjunctive Syllogism, $\\neg G$ (grant is not renewed)." }
    ]
  },
  {
    id: 4,
    title: "DPP 4: Set Theory & Venn Diagrams",
    type: "mcq",
    description: "Max-Min intersections, extreme constraints, and exact group limits (10 Qs)",
    questions: [
      { q: "In a class of 100 students:<br>70 study Mathematics<br>75 study Physics<br>80 study Chemistry<br><br>Find the minimum possible number of students who study all three subjects.", a: ["15", "20", "25", "30"], correct: 2, expl: "Using the formula for the minimum intersection of three sets: $\\max(0, n(A) + n(B) + n(C) - 2N)$. Here, it is $70 + 75 + 80 - 2(100) = 225 - 200 = 25$." }
    ]
  },
  {
    id: 5,
    title: "DPP 5: Advanced Set Theory & Cardinality", 
    type: "mcq",
    description: "Basic Set Logic, Inclusion-Exclusion, Countability, and Infinite Intersections (50 Qs)",
    questions: [
      { q: "Let $\\emptyset$ denote the empty set. Consider the following statements about $\\emptyset$ and the set $\\{\\emptyset\\}$. Which of the following is TRUE?", a: ["$\\emptyset \\in \\emptyset$", "$\\emptyset \\subseteq \\emptyset$", "$\\emptyset \\subset \\emptyset$", "$\\{\\emptyset\\} \\subset \\emptyset$"], correct: 1, expl: "The empty set is a subset of every set, including itself, making $\\emptyset \\subseteq \\emptyset$ true." }
    ]
  },
  {
    id: 6,
    title: "DPP 6: Proofs & Translations",
    type: "subjective", 
    description: "Subjective step-by-step proofs, logic translations, and binary arithmetic propositions (20 Qs)",
    questions: [
      { q: "Consider a number $x \\in \\{0, \\dots, 15\\}$ represented as a 4-bit binary number with bits $x_3, x_2, x_1, x_0$ where $x_0$ is the least-significant bit. Give a proposition over these variables that expresses:<br><br><b>(a) $x \\ge 8$</b><br><b>(b) $x$ is evenly divisible by 4</b><br><b>(c) $x$ is evenly divisible by 5</b>", expl: `<b>(a) $x \\ge 8$</b><br>Concept: In 4-bit binary, numbers $\\ge 8$ have MSB = 1. Examples: 8 (1000), 9 (1001), 15 (1111).<br>Proposition: $x_3$<br><br><b>(b) $x$ is divisible by 4</b><br>Concept: Multiples of 4 are 0 (0000), 4 (0100), 8 (1000), 12 (1100). The last two bits must be 0.<br>Proposition: $\\neg x_1 \\land \\neg x_0$<br><br><b>(c) $x$ is divisible by 5</b><br>Multiples of 5 in range 0–15: 0 (0000), 5 (0101), 10 (1010), 15 (1111).<br>Proposition (OR of all cases):<br>$(\\neg x_3 \\land \\neg x_2 \\land \\neg x_1 \\land \\neg x_0) \\lor$<br>$(\\neg x_3 \\land x_2 \\land \\neg x_1 \\land x_0) \\lor$<br>$(x_3 \\land \\neg x_2 \\land x_1 \\land \\neg x_0) \\lor$<br>$(x_3 \\land x_2 \\land x_1 \\land x_0)$` }
    ]
  },
  {
    id: 7,
    title: "DPP 7: Mixed Logic & Proofs",
    type: "subjective",
    description: "Mixed subjective practice on K-maps, Sudoku SAT, quantifiers, and mathematical proofs (12 Qs)", 
    questions: [
      { q: "Let the domain be the set of all integers. Express the following statements symbolically:<br><br><b>(a)</b> Every integer has an additive inverse.<br><b>(b)</b> There exists an integer that is divisible by every integer.<br><b>(c)</b> Not every integer is positive.", expl: `<b>(a) Every integer has an additive inverse</b><br>For every integer $x$, there exists an integer $y$ such that their sum is zero.<br>$\\forall x \\, \\exists y \\, (x + y = 0)$<br><br><b>(b) There exists an integer divisible by every integer</b><br>$\\exists x \\, \\forall y \\, (y \\mid x)$<br>Meaning: there exists an integer $x$ such that every integer $y$ divides $x$.<br><br><b>(c) Not every integer is positive</b><br>$\\neg \\forall x (x > 0)$<br>Equivalent form: $\\exists x (x \\le 0)$` }
    ]
  },
  {
    id: 8,
    title: "DPP 8: Countability & Functions",
    type: "subjective",
    description: "Hilbert's Hotel, countable vs uncountable sets, bijections, and the Mapping Rule (9 Qs)",
    questions: [
      { q: "Determine whether each of these sets is finite or countably infinite. For those that are countably infinite, exhibit a one-to-one correspondence between the set of positive integers and that set.<br><br><b>(a)</b> the negative integers<br><b>(b)</b> the even integers<br><b>(c)</b> the integers less than 100<br><b>(d)</b> the positive integers less than 1,000,000,000<br><b>(e)</b> the integers that are multiples of 7", expl: `<b>(a) The negative integers</b><br>Set: $\\{-1,-2,-3,-4,\\dots\\}$. This set never ends $\\rightarrow$ infinite.<br>Define mapping: $f(n) = -n$<br>This mapping pairs every positive integer with one negative integer. Conclusion: Countably infinite.<br><br><b>(b) The even integers</b><br>Set: $\\{2,4,6,8,\\dots\\}$.<br>Define mapping: $f(n) = 2n$<br>Each positive integer maps to exactly one even integer. Conclusion: Countably infinite.<br><br><b>(c) Integers less than 100</b><br>Set: $\\{\\dots, -2,-1,0,1,2,\\dots,99\\}$. This set is infinite in the negative direction.<br>We can map: $1 \\rightarrow 99, 2 \\rightarrow 98, 3 \\rightarrow 97$, i.e., $f(n) = 100 - n$.<br>Conclusion: Countably infinite.<br><br><b>(d) Positive integers less than 1,000,000,000</b><br>Set: $\\{1,2,3,\\dots,999999999\\}$. This set has a largest element.<br>Number of elements: 999,999,999.<br>Conclusion: Finite.<br><br><b>(e) Integers that are multiples of 7</b><br>Set: $\\{7,14,21,28,\\dots\\}$.<br>Define mapping: $f(n) = 7n$<br>Conclusion: Countably infinite.` }
    ]
  },
  {
    id: 9,
    title: "DPP 9: Math Last Contest DPP",
    type: "mcq",
    description: "Group Theory, Rings, Fields, and Matrix Groups over Finite Fields",
    questions: [
      {
        q: "Which of the following statements about $M_2(\\mathbb{Z})$ is TRUE?",
        a: ["$(M_2(\\mathbb{Z}),+,\\times)$ is a ring", "Multiplication is commutative", "Every nonzero matrix has multiplicative inverse", "$(M_2(\\mathbb{Z}),+)$ is not an abelian group"],
        correct: 0,
        expl: "<b>Short Trick:</b> For matrices: addition $\\to$ always abelian, multiplication $\\to$ usually NOT commutative, inverse exists only for special matrices.<br><b>Trap:</b> Students confuse \"not commutative multiplication\" with \"not a ring\". A ring does NOT require commutative multiplication."
      },
      {
        q: "In $Z_6$, which element has a multiplicative inverse?",
        a: ["3", "2", "5", "4"],
        correct: 2,
        expl: "<b>Short Trick:</b> In $Z_n$: $a^{-1}$ exists iff $\\gcd(a,n)=1$. $\\gcd(5,6)=1$.<br><b>Trap:</b> Students check multiplication randomly instead of gcd."
      },
      {
        q: "Why is $Z_6$ NOT a field?",
        a: ["Multiplication is not associative", "Zero has no inverse", "Addition is not closed", "Some nonzero elements lack inverses"],
        correct: 3,
        expl: "<b>Short Trick:</b> Field test: EVERY nonzero element must have inverse.<br>Check: $2 \\in Z_6$. No inverse exists. Done."
      },
      {
        q: "Which of the following is a field?",
        a: ["$\\mathbb{Z}[\\sqrt{3}]$", "$\\mathbb{Q}(\\sqrt{2})$", "$\\mathbb{Z}_{18}$", "$7\\mathbb{Z}$"],
        correct: 1,
        expl: "<b>Short Trick:</b> Field usually requires division possible, rational coefficients help. $\\mathbb{Q}(\\sqrt{2})$ behaves like real-number extension $\\to$ field.<br><b>Trap:</b> Students think every \"special set\" is field. Integers-like structures usually fail inverses."
      },
      {
        q: "Which of the following rings has EVERY nonzero element as a unit?",
        a: ["$\\mathbb{Z}_7$", "$M_2(\\mathbb{Z})$", "$\\mathbb{Z}_{10}$", "$\\mathbb{Z}_{12}$"],
        correct: 0,
        expl: "<b>Short Trick:</b> $\\mathbb{Z}_p$ with prime $p \\Rightarrow$ field. Every nonzero element invertible."
      },
      {
        q: "Which of the following is a unit in $\\mathbb{Z}_{10}$?",
        a: ["4", "7", "5", "2"],
        correct: 1,
        expl: "<b>Short Trick:</b> Unit iff: $\\gcd(a,10)=1$. Only: $\\gcd(7,10)=1$."
      },
      {
        q: "Why is $\\mathbb{R}[x]$ NOT a field?",
        a: ["Zero polynomial has no inverse", "Addition not commutative", "Nonconstant polynomials lack inverses", "Multiplication not associative"],
        correct: 2,
        expl: "<b>Short Trick:</b> Ask: Can $x^{-1}$ exist as polynomial? No. So not a field."
      },
      {
        q: "Which statement is TRUE for $\\mathbb{Z}[i]$?",
        a: ["Every nonzero element has inverse in $\\mathbb{Z}[i]$", "It is a field", "Multiplication is undefined", "It is a ring but not field"],
        correct: 3,
        expl: "<b>Short Trick:</b> Example: $1/2 \\notin \\mathbb{Z}[i]$. So inverses fail."
      },
      {
        q: "In $\\mathbb{Z}_4[x]$, why is $1+2x$ a unit?",
        a: ["Because $(1+2x)^2=1$", "Because $2x=0$", "Because degree is 1", "Because every polynomial is invertible"],
        correct: 0,
        expl: "<b>Short Trick:</b> Square it: $(1+2x)^2=1+4x+4x^2 \\equiv 1 \\pmod 4$. So inverse = itself.<br><b>Trap:</b> Students forget: $4x \\equiv 0 \\pmod 4$."
      },
      {
        q: "Let $GL_2(\\mathbb{F}_3)$ be the group of all invertible $2 \\times 2$ matrices over $\\mathbb{F}_3$. Number of elements equals:",
        a: ["24", "72", "36", "48"],
        correct: 3,
        expl: "<b>Short Trick:</b> Formula: $|GL_2(\\mathbb{F}_q)| = (q^2-1)(q^2-q)$. Here: $q=3$. $(9-1)(9-3) = 8 \\cdot 6 = 48$."
      },
      {
        q: "What is the order of the multiplicative group $\\mathbb Z_{13}^*$?",
        a: ["13", "11", "14", "12"],
        correct: 3,
        expl: "<b>Short Trick:</b> For prime $p$:<br>$|\\mathbb Z_p^*| = p-1$<br>So: $13-1=12$<br><br><b>Trap:</b> Students mistakenly include 0."
      },
      {
        q: "An element $g$ is primitive in $\\mathbb Z_{13}^*$ iff:",
        a: ["ord(g) = 12", "$g^{12}\\not\\equiv1 \\pmod{13}$", "g is prime", "ord(g) = 6"],
        correct: 0,
        expl: "<b>Short Trick:</b> Primitive element = generator.<br>Generator order must equal group order."
      },
      {
        q: "What is: $2^6 \\pmod{13}$",
        a: ["12", "1", "10", "11"],
        correct: 0,
        expl: "<b>Short Trick:</b><br>$2^6=64$<br>$64 \\equiv 12 \\pmod{13}$<br><br><b>Trap:</b> Bad modular reduction."
      },
      {
        q: "The order of 2 in $\\mathbb Z_{13}^*$ is:",
        a: ["6", "12", "3", "4"],
        correct: 1,
        expl: "<b>Short Trick:</b> If powers generate all nonzero residues before returning to 1 $\\to$ primitive.<br>$2^{12}\\equiv1$<br>No smaller exponent gives 1."
      },
      {
        q: "Which of the following is a primitive root modulo 13?",
        a: ["4", "1", "3", "12"],
        correct: 2,
        expl: "<b>Short Trick:</b> Check:<br>$3^{12/2}=3^6 \\not\\equiv1$<br>$3^{12/3}=3^4 \\not\\equiv1$<br>So primitive.<br><br><b>Trap:</b> Students test all powers manually."
      },
      {
        q: "Why is 4 NOT primitive in $\\mathbb Z_{13}^*$?",
        a: ["$4^{12}\\neq1$", "4 is composite", "$4^2\\equiv1$", "ord(4) < 12"],
        correct: 3,
        expl: "<b>Short Trick:</b> Primitive $\\Rightarrow$ order must be 12.<br>But: $4^6\\equiv1$<br>So order divides 6."
      },
      {
        q: "Which element is primitive in $\\mathbb Z_{11}^*$?",
        a: ["Both", "2", "Neither", "4"],
        correct: 1,
        expl: "<b>Short Trick:</b> $|\\mathbb Z_{11}^*|=10$<br>Check:<br>$2^5\\not\\equiv1$<br>$2^2\\not\\equiv1$<br>So order = 10."
      },
      {
        q: "In Diffie-Hellman: $p=13,\\quad g=2,\\quad a=4$. Alice's public key is:",
        a: ["3", "8", "16", "2"],
        correct: 0,
        expl: "<b>Short Trick:</b><br>$2^4=16$<br>$16\\equiv3 \\pmod{13}$"
      },
      {
        q: "In the same setup, Bob chooses: $b=3$. Bob's public key equals:",
        a: ["9", "7", "6", "8"],
        correct: 3,
        expl: "<b>Short Trick:</b><br>$2^3=8$"
      },
      {
        q: "Shared key computed by Alice is:",
        a: ["8", "1", "12", "3"],
        correct: 1,
        expl: "<b>Short Trick:</b><br>$K=B^a=8^4 \\pmod{13}$<br>$8^2=64\\equiv12$<br>$8^4=12^2=144\\equiv1$"
      },
      {
        q: "Eve observes: $A=3,\\quad p=13,\\quad g=2$. To recover Alice's secret key, Eve solves:",
        a: ["$a^2\\equiv3$", "$2a\\equiv3$", "$2^a\\equiv3 \\pmod{13}$", "$2+a=3$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Discrete log problem:<br>$g^a\\equiv A \\pmod p$"
      },
      {
        q: "For: $2^a\\equiv3\\pmod{13}$, value of $a$ is:",
        a: ["4", "3", "5", "2"],
        correct: 0,
        expl: "<b>Short Trick:</b> Test powers:<br>$2^4=16\\equiv3$"
      },
      {
        q: "Why is breaking Diffie-Hellman infeasible for 2048-bit primes?",
        a: ["Prime numbers are random", "Modular arithmetic impossible", "Exponents become irrational", "Discrete logarithm becomes computationally infeasible"],
        correct: 3,
        expl: "<b>Short Trick:</b> Security relies on:<br>$g^a \\mod p$<br>easy forward, hard reverse."
      },
      {
        q: "Let $a_n$ denote the number of ways to pay $n$ pesos using coins/bills of values: $1,2,5,10,20,50,100$ where order matters. Which recurrence relation is correct?",
        a: ["$a_n=a_{n-1}+a_{n-2}+a_{n-5}$", "$a_n=n a_{n-1}$", "$a_n=2a_{n-1}$", "$a_n=a_{n-1}+a_{n-2}+a_{n-5}+a_{n-10}+a_{n-20}+a_{n-50}+a_{n-100}$"],
        correct: 3,
        expl: "<b>Short Trick:</b> Order matters $\\Rightarrow$ last payment approach.<br>Add all possibilities for last coin/bill."
      },
      {
        q: "If $R_n$ is the number of regions formed by $n$ lines in a plane such that: no two are parallel, no three intersect at same point, then the recurrence relation is:",
        a: ["$R_n=2R_{n-1}$", "$R_n=R_{n-1}+n$", "$R_n=nR_{n-1}$", "$R_n=R_{n-1}+n-1$"],
        correct: 1,
        expl: "<b>Short Trick:</b> New line intersects previous $n-1$ lines,<br>creating $n$ new regions."
      },
      {
        q: "For the same problem, if $R_0=1$, then $R_4$ equals:",
        a: ["10", "16", "8", "11"],
        correct: 3,
        expl: "<b>Short Trick:</b> Use:<br>$R_n=R_{n-1}+n$<br><br>$R_1=2$<br>$R_2=4$<br>$R_3=7$<br>$R_4=11$"
      },
      {
        q: "An employee salary satisfies: initial salary = 50000, every year doubles, plus additional $10000n$. Correct recurrence:",
        a: ["$a_n=2a_{n-1}+10000n$", "$a_n=a_{n-1}+10000$", "$a_n=50000n$", "$a_n=2a_{n-1}$"],
        correct: 0,
        expl: "<b>Short Trick:</b> \"double previous\" + yearly increment."
      },
      {
        q: "Let $a_n$ be number of bit strings of length $n$ containing consecutive 0s. Which recurrence is most useful?",
        a: ["$a_n=a_{n-1}+2^n$", "$a_n=2a_{n-1}$", "$a_n=a_{n-1}+a_{n-2}$", "$a_n=2^n$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Complement approach:<br>Strings WITHOUT consecutive 0s follow Fibonacci recurrence."
      },
      {
        q: "Which function satisfies: $a_n=3a_{n-1}+2^n$",
        a: ["$a_n=n2^n$", "$a_n=3^n$", "$a_n=2^n$", "$a_n=-2^{n+1}$"],
        correct: 3,
        expl: "<b>Short Trick:</b> Substitute directly:<br>$-2^{n+1}=3(-2^n)+2^n$<br><br>Works perfectly."
      },
      {
        q: "Given: $a_n=2a_{n-1},\\quad a_0=3$. Find $a_n$.",
        a: ["$2n$", "$2^n$", "$3\\cdot2^n$", "$3+n$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Repeated doubling:<br>$3,6,12,24,\\dots$"
      },
      {
        q: "Given: $a_n=4a_{n-2},\\quad a_0=0,\\ a_1=4$. Value of $a_5$ is:",
        a: ["256", "64", "1024", "16"],
        correct: 1,
        expl: "<b>Short Trick:</b> Odd terms evolve separately:<br>$4,16,64$"
      },
      {
        q: "In Josephus problem with elimination of every second person: $J(2n)=?$",
        a: ["$J(n)+1$", "$2J(n)-1$", "$J(n)-1$", "$2J(n)$"],
        correct: 1,
        expl: "<b>Short Trick:</b> After one round:<br>survivors shift to odd positions."
      },
      {
        q: "For Josephus recurrence: $J(1)=1$. Value of $J(8)$ is:",
        a: ["7", "3", "5", "1"],
        correct: 3,
        expl: "<b>Short Trick:</b> Powers of 2 always survive at position 1."
      },
      {
        q: "For Josephus problem: $J(2n+1)=?$",
        a: ["$2J(n)+1$", "$2J(n)$", "$J(n)+2$", "$2J(n)-1$"],
        correct: 0,
        expl: ""
      },
      {
        q: "Which statement about recurrence relations is TRUE?",
        a: ["Every recurrence has unique solution without base case", "Recurrences always linear", "Initial conditions determine unique sequence", "Initial conditions are unnecessary"],
        correct: 2,
        expl: "<b>Short Trick:</b> Without base conditions,<br>infinite possible sequences exist."
      },
      {
        q: "Which of the following is a linear homogeneous recurrence relation with constant coefficients?",
        a: ["$a_n=2na_{n-1}+a_{n-2}$", "$a_n=3a_{n-1}+4a_{n-2}+5a_{n-3}$", "$a_n=a_{n-1}+n$", "$a_n=a_{n-1}+2$"],
        correct: 1,
        expl: "<b>Short Trick:</b> Check:<br>- linear?<br>- homogeneous?<br>- constant coefficients?<br><br>Only (C) satisfies all three.<br><br><b>Trap:</b> Students ignore \"constant coefficients\"."
      },
      {
        q: "Degree of: $a_n=3a_{n-1}+4a_{n-2}+5a_{n-3}$ is:",
        a: ["3", "1", "4", "2"],
        correct: 1,
        expl: "<b>Short Trick:</b> Highest power of recurrence terms is 1.<br><br>Degree $\\neq$ order.<br><br><b>Trap:</b> Students confuse order with degree."
      },
      {
        q: "Which recurrence relation is homogeneous?",
        a: ["$a_n=a_{n-1}+n$", "$a_n=2^n+a_{n-1}$", "$a_n=a_{n-1}+2$", "$a_n=a_{n-2}$"],
        correct: 3,
        expl: "<b>Short Trick:</b> Homogeneous $\\Rightarrow$ RHS contains only recurrence terms."
      },
      {
        q: "For: $a_n=5a_{n-1}-6a_{n-2}$ characteristic equation is:",
        a: ["$r^2-5r+6=0$", "$r^2+6r-5=0$", "$r^2+5r-6=0$", "$r^2-6r+5=0$"],
        correct: 0,
        expl: "<b>Short Trick:</b> Move everything left:<br>$r^2-5r+6=0$"
      },
      {
        q: "Roots of: $r^2-5r+6=0$ are:",
        a: ["-2, -3", "1, 6", "2, 3", "-1, -6"],
        correct: 2,
        expl: "<b>Short Trick:</b> Factor quickly:<br>$(r-2)(r-3)$"
      },
      {
        q: "General solution of: $a_n=5a_{n-1}-6a_{n-2}$ is:",
        a: ["$a_n=\\alpha5^n+\\beta6^n$", "$a_n=\\alpha n+\\beta$", "$a_n=\\alpha2^n3^n$", "$a_n=\\alpha2^n+\\beta3^n$"],
        correct: 3,
        expl: ""
      },
      {
        q: "For: $a_n=4a_{n-1}-4a_{n-2}$ the characteristic roots are:",
        a: ["4,4", "1,4", "2,2", "-2,-2"],
        correct: 2,
        expl: "<b>Short Trick:</b><br>$r^2-4r+4=0$<br>$(r-2)^2$<br><br>Repeated root."
      },
      {
        q: "General solution for repeated root $r=2$ is:",
        a: ["$a_n=\\alpha2^n$", "$a_n=(\\alpha+\\beta n)2^n$", "$a_n=\\alpha n2^n$", "$a_n=\\alpha2^n+\\beta2^n$"],
        correct: 1,
        expl: "<b>Short Trick:</b> Repeated root $\\Rightarrow$ multiply one term by $n$."
      },
      {
        q: "For: $a_n=-4a_{n-1}-4a_{n-2}$ characteristic equation is:",
        a: ["$r^2-4r-4=0$", "$r^2+4r+4=0$", "$r^2-4r+4=0$", "$r^2+4r-4=0$"],
        correct: 1,
        expl: ""
      },
      {
        q: "Roots of: $r^2+4r+4=0$ are:",
        a: ["4,4", "-4,-4", "2,2", "-2,-2"],
        correct: 3,
        expl: ""
      },
      {
        q: "Solution of: $a_n=a_{n-4}$ must be:",
        a: ["exponential", "periodic with period 4", "Fibonacci-type", "quadratic"],
        correct: 1,
        expl: "<b>Short Trick:</b> Every 4th term repeats."
      },
      {
        q: "For: $a_n=a_{n-1}+n^2,\\quad a_0=0$ which method is fastest?",
        a: ["matrix multiplication", "generating function only", "iteration/summation", "characteristic roots"],
        correct: 2,
        expl: "<b>Short Trick:</b> Nonhomogeneous polynomial term.<br>Easy by telescoping:<br>$a_n=\\sum_{k=1}^n k^2$"
      },
      {
        q: "Closed form of: $\\sum_{k=1}^n k^2$ is:",
        a: ["$n^2$", "$\\frac{n(n+1)}2$", "$2^n$", "$\\frac{n(n+1)(2n+1)}6$"],
        correct: 3,
        expl: ""
      },
      {
        q: "For: $a_n=2a_{n-1}+3^n$ best form of particular solution is:",
        a: ["$An$", "$An^2$", "$A3^n$", "$A2^n$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Match forcing function."
      },
      {
        q: "In walkway tiling problem: \"No two red tiles adjacent\" This recurrence is closest to:",
        a: ["Fibonacci-type recurrence", "periodic recurrence", "geometric progression", "quadratic recurrence"],
        correct: 0,
        expl: "<b>Short Trick:</b> Restriction based on previous tile $\\Rightarrow$ Fibonacci logic."
      },
      {
        q: "Given: $f(n)=5f(n/2)+3,\\quad f(1)=7$. Which Master Theorem case applies?",
        a: ["Case 3", "Case 1", "Not applicable", "Case 2"],
        correct: 1,
        expl: "<b>Short Trick:</b> Compare:<br>$a=5,\\ b=2,\\ f(n)=3$<br><br>$n^{\\log_2 5}\\approx n^{2.32}$<br><br>Constant term is smaller."
      },
      {
        q: "Order of growth of: $f(n)=5f(n/2)+3$ is:",
        a: ["$\\Theta(5^n)$", "$\\Theta(n)$", "$\\Theta(n^{\\log_2 5})$", "$\\Theta(\\log n)$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Master theorem directly:<br>$T(n)=\\Theta(n^{\\log_b a})$"
      },
      {
        q: "Given: $f(n)=2f(n/3)+4$. Order of growth is:",
        a: ["$\\Theta(n^{\\log_3 2})$", "$\\Theta(n)$", "$\\Theta(\\log n)$", "$\\Theta(n^2)$"],
        correct: 0,
        expl: "<b>Short Trick:</b><br>$a=2,\\ b=3$<br><br>$n^{\\log_3 2}$<br>dominates constant 4."
      },
      {
        q: "For: $f(n)=8f(n/2)+n^2$, which term dominates?",
        a: ["$n\\log n$", "$n^2$", "$2^n$", "$n^3$"],
        correct: 3,
        expl: "<b>Short Trick:</b><br>$a=8,\\ b=2$<br><br>$n^{\\log_2 8}=n^3$<br><br>Compare with:<br>$n^2$<br><br>Recursive part dominates."
      },
      {
        q: "Big-O estimate of: $f(n)=8f(n/2)+n^2$ is:",
        a: ["$O(2^n)$", "$O(n^3)$", "$O(n^2\\log n)$", "$O(n^2)$"],
        correct: 1,
        expl: ""
      },
      {
        q: "Suppose: $f(n)=2f(\\sqrt n)+1$. If: $n=2^k$, then depth of recursion is approximately:",
        a: ["$n$", "$\\log n$", "$\\log\\log n$", "$\\sqrt n$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Each step:<br>$n\\to\\sqrt n$<br><br>Exponent halves each time."
      },
      {
        q: "Big-O estimate of: $f(n)=2f(\\sqrt n)+1$ is closest to:",
        a: ["$O(\\log n)$", "$O(\\sqrt n)$", "$O(n)$", "$O((\\log n)^2)$"],
        correct: 3,
        expl: "<b>Short Trick:</b> Depth:<br>$\\log\\log n$<br><br>Tree doubles each level:<br>overall:<br>$(\\log n)^2$"
      },
      {
        q: "For: $T(n)=5T(n-1)-6T(n-2)$, characteristic equation is:",
        a: ["$r^2-5r+6=0$", "$r^2+6r-5=0$", "$r^2-6r+5=0$", "$r^2+5r-6=0$"],
        correct: 0,
        expl: ""
      },
      {
        q: "Roots of: $r^2-5r+6=0$ are:",
        a: ["5,6", "-2,-3", "1,6", "2,3"],
        correct: 3,
        expl: ""
      },
      {
        q: "Growth of: $T(n)=5T(n-1)-6T(n-2)$ is dominated by:",
        a: ["$3^n$", "$n3^n$", "$2^n$", "$n2^n$"],
        correct: 0,
        expl: "<b>Short Trick:</b> Largest root dominates:<br>$3^n$"
      },
      {
        q: "Given: $T(1)=10$, $T(n+1)=2n+T(n)$. Which summation appears after iteration?",
        a: ["$\\sum \\log n$", "$\\sum n^2$", "$\\sum n$", "$\\sum 2^n$"],
        correct: 2,
        expl: "<b>Short Trick:</b> Repeated expansion:<br>$T(n)=10+2(1+2+\\cdots+n)$"
      },
      {
        q: "Growth rate of: $T(n+1)=2n+T(n)$ is:",
        a: ["$O(2^n)$", "$O(n\\log n)$", "$O(n^2)$", "$O(n)$"],
        correct: 2,
        expl: "<b>Short Trick:</b><br>$1+2+\\cdots+n$<br>$=$<br>$\\Theta(n^2)$"
      },
      {
        q: "Which recurrence is MOST suitable for Master Theorem?",
        a: ["$T(n)=T(\\sqrt n)+1$", "$T(n)=T(n-1)+n$", "$T(n)=T(n-2)+1$", "$T(n)=2T(n/2)+n$"],
        correct: 3,
        expl: "<b>Short Trick:</b> Master theorem needs:<br>$T(n)=aT(n/b)+f(n)$"
      },
      {
        q: "For: $T(n)=2T(n/2)+n$, which Master Theorem case applies?",
        a: ["Case 3", "Case 2", "Case 1", "None"],
        correct: 1,
        expl: "<b>Short Trick:</b><br>$f(n)=n$<br>matches:<br>$n^{\\log_2 2}=n$<br><br>Equal growth $\\Rightarrow$ Case 2."
      },
      {
        q: "Solution of: $T(n)=2T(n/2)+n$ is:",
        a: ["$\\Theta(n\\log n)$", "$\\Theta(2^n)$", "$\\Theta(n^2)$", "$\\Theta(n)$"],
        correct: 0,
        expl: ""
      }
    ]
  }
];

export default maths;
