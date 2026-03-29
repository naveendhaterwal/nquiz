export const jeeMockConfig = {
  id: 'finaltest01',
  title: 'JEE Mock Test 1 (Final Format)',
  durationMinutes: 180,
  instructions:
    'Attempt all questions. Correct answers are shown only after test submission. Format: Question, Options, Correct Answer, Why Correct, Why Others Wrong.',
};

export const jeeMockQuestions = [
  {
    id: 'q1',
    type: 'mcq',
    topic: 'Electrostatics',
    fullQuestion:
      'A charge (5 x 10^-8 C) is placed at origin. Work done in moving a charge (1 uC) from point A(2,2,1) m to B(1,1,0.5) m is:',
    options: ['9 x 10^-6 J', '18 x 10^-6 J', '4.5 x 10^-6 J', '0'],
    correctAnswer: 'B',
    whyCorrect:
      'Work done depends on potential difference: W = q(V_B - V_A), with V proportional to 1/r. Distance at A is 3 m and at B is 1.5 m, so B has higher potential and gives positive work. This matches option (B).',
    whyOtherOptionsWrong: {
      A: 'This misses a factor of 2 in the potential difference calculation.',
      C: 'This uses incorrect scaling of potential with distance.',
      D: 'Zero work is only possible when initial and final potentials are equal, which is not true here.',
    },
  },
  {
    id: 'q2',
    type: 'mcq',
    topic: 'Magnetic Field',
    fullQuestion:
      'A charged particle is released from rest along the axis of a long solenoid. The acceleration of the particle is:',
    options: ['a > g', 'a < g', 'a = g', 'a = 0'],
    correctAnswer: 'C',
    whyCorrect:
      'Magnetic force is q(v x B). Initially v = 0, so magnetic force is zero. Only gravity acts at release, hence acceleration is g.',
    whyOtherOptionsWrong: {
      A: 'This assumes an extra magnetic contribution at v = 0, which is not possible.',
      B: 'This also assumes magnetic force affects motion initially, which it does not.',
      D: 'This ignores gravity.',
    },
  },
  {
    id: 'q3',
    type: 'mcq',
    topic: 'EMI',
    fullQuestion:
      'Magnetic field varies as B = cos(200t). A loop of resistance 50 ohm is placed perpendicular to it. The average power dissipated is proportional to:',
    options: ['1', 'pi', 'pi^2', '2pi'],
    correctAnswer: 'B',
    whyCorrect:
      'Induced emf is proportional to dB/dt, so cosine gives sine dependence. Average power depends on mean of sin^2 terms, leading to a pi-type factor in proportional form.',
    whyOtherOptionsWrong: {
      A: 'This ignores time-varying induction behavior.',
      C: 'This overestimates the proportional dependence.',
      D: 'This uses an incorrect scaling factor.',
    },
  },
  {
    id: 'q4',
    type: 'mcq',
    topic: 'Waves',
    fullQuestion:
      'Two strings of same length but different linear densities are joined under same tension. Ratio of time taken by pulse is:',
    options: ['sqrt(mu1/mu2)', 'sqrt(mu2/mu1)', 'mu1/mu2', '1'],
    correctAnswer: 'A',
    whyCorrect:
      'Wave speed v = sqrt(T/mu). For same length, time t is proportional to 1/v, so t is proportional to sqrt(mu). Therefore time ratio is sqrt(mu1/mu2).',
    whyOtherOptionsWrong: {
      B: 'This is the inverted ratio.',
      C: 'This incorrectly uses linear relation instead of square-root relation.',
      D: 'This ignores different linear densities.',
    },
  },
  {
    id: 'q5',
    type: 'mcq',
    topic: 'Fluids',
    fullQuestion:
      'Water flows in a horizontal pipe. Area ratio is 2:1 and height difference is h. Velocity at larger area is:',
    options: ['sqrt(gh)', 'sqrt(2gh)', 'sqrt(gh/2)', '2sqrt(gh)'],
    correctAnswer: 'C',
    whyCorrect:
      'Using continuity, speed at smaller area is double. Applying Bernoulli with this relation yields velocity at larger area v = sqrt(gh/2).',
    whyOtherOptionsWrong: {
      A: 'This neglects the area-ratio velocity condition.',
      B: 'This similarly ignores continuity coupling.',
      D: 'This overestimates the result from Bernoulli + continuity.',
    },
  },
  {
    id: 'q6',
    type: 'mcq',
    topic: 'Rigid Body',
    fullQuestion:
      'A rod is supported by two identical strings. One string is cut. Tension in remaining string becomes:',
    options: ['mg', 'mg/2', 'mg/4', '2mg'],
    correctAnswer: 'C',
    whyCorrect:
      'After one string is cut, rod motion is no longer static and starts rotational motion. The standard result for this setup gives tension mg/4 in the remaining string.',
    whyOtherOptionsWrong: {
      A: 'This assumes full static support by one string.',
      B: 'This assumes old symmetric static sharing still applies.',
      D: 'This is physically inconsistent for this release condition.',
    },
  },
  {
    id: 'q7',
    type: 'mcq',
    topic: 'Thermodynamics',
    fullQuestion:
      'Water is heated from 20 C to 80 C. Gas consumption is proportional to:',
    options: ['DeltaT', 'DeltaT^2', '1/DeltaT', 'constant'],
    correctAnswer: 'A',
    whyCorrect:
      'Required heat Q = mcDeltaT, so fuel used is proportional to DeltaT for fixed mass and specific heat.',
    whyOtherOptionsWrong: {
      B: 'There is no square dependence in Q = mcDeltaT.',
      C: 'Inverse dependence is incorrect.',
      D: 'It cannot be constant when temperature rise changes.',
    },
  },
  {
    id: 'q8',
    type: 'mcq',
    topic: 'Modern Physics',
    fullQuestion: 'Closest approach of alpha particle depends on:',
    options: ['mass', 'charge', 'energy', 'charge and energy'],
    correctAnswer: 'D',
    whyCorrect:
      'Distance of closest approach in Coulomb interaction depends on nuclear/effective charge and incident kinetic energy.',
    whyOtherOptionsWrong: {
      A: 'Mass is not the direct controlling term in the closest-approach formula.',
      B: 'Charge alone is incomplete; energy is also required.',
      C: 'Energy alone is incomplete; charge is also required.',
    },
  },
  {
    id: 'q9',
    type: 'mcq',
    topic: 'Gravitation',
    fullQuestion: 'A satellite is moved from orbit R to 2R. Energy required is:',
    options: ['positive', 'negative', 'zero', 'infinite'],
    correctAnswer: 'A',
    whyCorrect:
      'Raising orbit increases total orbital energy (less negative), so external energy must be supplied.',
    whyOtherOptionsWrong: {
      B: 'Negative value would imply energy release while moving to higher orbit.',
      C: 'Energy change is not zero between different orbital radii.',
      D: 'Finite radius change needs finite energy.',
    },
  },
  {
    id: 'q10',
    type: 'mcq',
    topic: 'Optics',
    fullQuestion: 'Two convex lenses expand a beam. The expansion depends on:',
    options: ['sum', 'difference', 'ratio', 'product'],
    correctAnswer: 'C',
    whyCorrect:
      'Beam expansion (angular magnification type) in two-lens arrangement depends on the ratio of focal lengths.',
    whyOtherOptionsWrong: {
      A: 'Sum of focal lengths does not set expansion factor.',
      B: 'Difference is not the governing relation for expansion ratio.',
      D: 'Product does not define magnification in this setup.',
    },
  },
  {
    id: 'q11',
    type: 'mcq',
    topic: 'Electrostatics',
    fullQuestion: 'Electric potential at distance r from a point charge varies as:',
    options: ['r', 'r^2', '1/r', 'constant'],
    correctAnswer: 'C',
    whyCorrect:
      'For point charge, V = kq/r, so potential decreases inversely with distance.',
    whyOtherOptionsWrong: {
      A: 'Linear dependence is incorrect for point-charge potential.',
      B: 'Quadratic dependence is incorrect.',
      D: 'Potential is not constant with distance for a point charge.',
    },
  },
  {
    id: 'q12',
    type: 'mcq',
    topic: 'Magnetism',
    fullQuestion:
      'Magnetic force on a charged particle is maximum when angle between velocity and field is:',
    options: ['0 degree', '45 degree', '90 degree', '180 degree'],
    correctAnswer: 'C',
    whyCorrect:
      'F = qvB sin(theta), and sin(theta) is maximum at theta = 90 degree.',
    whyOtherOptionsWrong: {
      A: 'At 0 degree, sin(theta)=0 so magnetic force is zero.',
      B: 'At 45 degree, sin(theta) is not maximum.',
      D: 'At 180 degree, sin(theta)=0 so magnetic force is zero.',
    },
  },
  {
    id: 'q13',
    type: 'mcq',
    topic: 'EMI',
    fullQuestion: 'Induced emf depends on:',
    options: ['magnetic flux', 'rate of change of flux', 'resistance', 'current'],
    correctAnswer: 'B',
    whyCorrect:
      'Faraday law gives e = -d(phi)/dt, so induced emf depends on how fast flux changes.',
    whyOtherOptionsWrong: {
      A: 'Flux alone without change does not induce emf.',
      C: 'Resistance affects current for given emf, not emf generation law.',
      D: 'Current may result from emf but is not the primary dependence in Faraday law.',
    },
  },
  {
    id: 'q14',
    type: 'mcq',
    topic: 'Waves',
    fullQuestion: 'Speed of wave in string depends on:',
    options: ['tension only', 'density only', 'both', 'neither'],
    correctAnswer: 'C',
    whyCorrect:
      'v = sqrt(T/mu), so speed depends on both tension T and linear density mu.',
    whyOtherOptionsWrong: {
      A: 'Tension alone is incomplete because mu is also present.',
      B: 'Density alone is incomplete because T is also present.',
      D: 'The formula directly depends on T and mu.',
    },
  },
  {
    id: 'q15',
    type: 'mcq',
    topic: 'Fluids',
    fullQuestion: 'Bernoulli equation is valid for:',
    options: ['viscous flow', 'turbulent flow', 'ideal flow', 'compressible flow'],
    correctAnswer: 'C',
    whyCorrect:
      'Bernoulli equation in basic form assumes ideal, incompressible, non-viscous steady flow.',
    whyOtherOptionsWrong: {
      A: 'Viscosity introduces dissipative losses not included in ideal Bernoulli form.',
      B: 'Turbulence violates the simple streamline assumptions.',
      D: 'Compressibility effects need modified treatment beyond the simple form.',
    },
  },
  {
    id: 'q16',
    type: 'mcq',
    topic: 'Thermodynamics',
    fullQuestion: 'Heat required to raise temperature depends on:',
    options: ['mass', 'specific heat', 'temperature change', 'all'],
    correctAnswer: 'D',
    whyCorrect:
      'Q = mcDeltaT includes all three factors: mass, specific heat, and temperature rise.',
    whyOtherOptionsWrong: {
      A: 'Mass alone is incomplete.',
      B: 'Specific heat alone is incomplete.',
      C: 'Temperature change alone is incomplete.',
    },
  },
  {
    id: 'q17',
    type: 'mcq',
    topic: 'Work-Energy',
    fullQuestion: 'Work done in conservative field depends on:',
    options: ['path', 'endpoints', 'time', 'velocity'],
    correctAnswer: 'B',
    whyCorrect:
      'For conservative forces, work is path independent and depends only on initial and final positions.',
    whyOtherOptionsWrong: {
      A: 'Path dependence is characteristic of non-conservative work.',
      C: 'Elapsed time does not define conservative work directly.',
      D: 'Velocity is not the direct criterion for potential difference based work.',
    },
  },
  {
    id: 'q18',
    type: 'mcq',
    topic: 'Electrostatics',
    fullQuestion: 'Electric field inside a conductor is:',
    options: ['zero', 'maximum', 'constant', 'variable'],
    correctAnswer: 'A',
    whyCorrect:
      'In electrostatic equilibrium, free charges rearrange until internal electric field becomes zero.',
    whyOtherOptionsWrong: {
      B: 'Maximum field would drive further charge motion and violate equilibrium.',
      C: 'Any non-zero constant field still violates electrostatic equilibrium.',
      D: 'A variable non-zero field also violates electrostatic equilibrium.',
    },
  },
  {
    id: 'q19',
    type: 'mcq',
    topic: 'Gravitation',
    fullQuestion: 'Energy of satellite depends on:',
    options: ['radius', 'mass', 'both', 'none'],
    correctAnswer: 'A',
    whyCorrect:
      'Using orbital energy per unit mass, epsilon = -GM/(2r), dependence is on orbital radius r.',
    whyOtherOptionsWrong: {
      B: 'Mass alone is not the deciding factor in specific orbital energy.',
      C: 'This is misleading in context of standard specific-energy form.',
      D: 'Energy certainly varies with orbit radius.',
    },
  },
  {
    id: 'q20',
    type: 'mcq',
    topic: 'Optics',
    fullQuestion: 'Lens formula is:',
    options: ['1/f = 1/v + 1/u', '1/f = 1/v - 1/u', 'f = uv', 'none'],
    correctAnswer: 'B',
    whyCorrect:
      'Using the Cartesian sign convention, the thin lens formula is 1/f = 1/v - 1/u.',
    whyOtherOptionsWrong: {
      A: 'This uses incorrect sign convention in the formula.',
      C: 'This is not the lens equation.',
      D: 'A correct relation is available, so none is false.',
    },
  },
  {
    id: 'q21',
    type: 'integer',
    topic: 'Electrostatics',
    fullQuestion:
      'Work done between two points at same distance from charge = ___',
    correctAnswer: '0',
    whyCorrect: 'Points at equal distance from a point charge have same potential, so potential difference is zero and work done is zero.',
  },
  {
    id: 'q22',
    type: 'integer',
    topic: 'Waves',
    fullQuestion: 'If mu1 = 4mu2, velocity ratio v1/v2 = ___',
    correctAnswer: '1/2',
    whyCorrect: 'For strings at same tension, v is proportional to 1/sqrt(mu). Thus v1/v2 = sqrt(mu2/mu1) = sqrt(1/4) = 1/2.',
  },
  {
    id: 'q23',
    type: 'integer',
    topic: 'Thermodynamics',
    fullQuestion:
      'If temperature rise doubles, heat required becomes ___ times',
    correctAnswer: '2',
    whyCorrect: 'From Q = mcDeltaT, heat is directly proportional to DeltaT for fixed m and c.',
  },
  {
    id: 'q24',
    type: 'integer',
    topic: 'Modern Physics',
    fullQuestion:
      'Closest approach is proportional to 1/E. If energy doubles, new distance factor = ___',
    correctAnswer: '1/2',
    whyCorrect: 'If distance is inversely proportional to energy, doubling energy halves the distance.',
  },
  {
    id: 'q25',
    type: 'integer',
    topic: 'Optics',
    fullQuestion: 'Beam expands from 2 mm to 10 mm. Ratio = ___',
    correctAnswer: '5',
    whyCorrect: 'Expansion ratio = final diameter / initial diameter = 10/2 = 5.',
  },
];

export const jeeMockTests = [
  {
    id: jeeMockConfig.id,
    title: jeeMockConfig.title,
    durationMinutes: jeeMockConfig.durationMinutes,
    instructions: jeeMockConfig.instructions,
    questions: jeeMockQuestions,
  },
];
