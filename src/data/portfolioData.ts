import { ExperienceItem, SkillCategory, AchievementItem, RoadmapItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sai Rakesh Alla',
  tagline: 'Where Electronics meets Artificial Intelligence',
  headline: 'Electronics & Communication Engineer | VLSI Physical Design | AI & Full-Stack Development',
  email: 'sairakeshalla9786@gmail.com',
  whatsappNumber: '+44 07442752965',
  whatsappRaw: '447442752965',
  whatsappUrl: 'https://wa.me/447442752965',
  githubUrl: 'https://github.com/sairakeshalla9786-star',
  linkedinUrl: 'https://www.linkedin.com/in/alla-sai-rakesh-9b3590224',
  address: '84 De Beauvoir Road RG1 5NP Reading, United Kingdom',
  location: 'Reading, United Kingdom / India',
  resumePdfUrl: '/assets/aistudio/Sai_Rakesh_Resume_7345af80.pdf',
  languages: ['English', 'Telugu'],
  typingRoles: [
    'ECE Engineer',
    'VLSI Physical Design',
    'AI & Full-Stack Developer',
    'Surrey MSc AI Researcher'
  ],
  bio: [
    'Electronics and Communication Engineer with industry experience at Electronics Corporation of India Limited (ECIL) and practical training in ASIC Physical Design, AI and Full-Stack Development.',
    'Hands-on exposure to RTL-to-GDSII physical design, floorplanning, power planning, placement, clock tree synthesis, routing, timing closure and Static Timing Analysis using Cadence and Synopsys EDA tools. Experienced in TCL scripting, C++, Python, system-level testing, signal validation, EMI/EMC testing and hardware-software integration.',
    'Currently pursuing an MSc in Artificial Intelligence with Industrial Practice at the University of Surrey, pioneering integrated solutions that bridge silicon compute hardware and modern intelligent software.'
  ],
  stats: [
    { label: 'ECIL Apprenticeship', value: '15 Months', detail: 'Hardware & Systems QA' },
    { label: 'University', value: 'Univ of Surrey', detail: 'MSc Artificial Intelligence' },
    { label: 'B.Tech CGPA', value: '7.92 / 10', detail: 'Vignan Univ (ECE First Class)' },
    { label: 'Diploma CGPA', value: '8.78 / 10', detail: 'Bapatla Engineering College' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'VLSI & ASIC Physical Design',
    iconName: 'Cpu',
    description: 'ASIC Physical Design flow from RTL-to-GDSII, floorplanning, timing closure, and EDA sign-off.',
    skills: [
      'ASIC Physical Design',
      'RTL-to-GDSII Flow',
      'Floorplanning & Power Planning',
      'Placement & CTS',
      'Routing & Timing Closure',
      'Static Timing Analysis (STA)',
      'Sign-off Checks',
      'Cadence Innovus',
      'Synopsys ICC2',
      'Synopsys PrimeTime'
    ]
  },
  {
    name: 'Hardware, Embedded & Systems Testing',
    iconName: 'Wrench',
    description: 'Industrial testing, multi-layer PCB diagnostics, communications, and embedded microcontrollers.',
    skills: [
      'PLC I/O & Signal Validation',
      'EMI / EMC Testing',
      'RFID & Embedded Systems',
      'PCB & System Testing',
      'VME / Universal-Module QA',
      'Window Announcement Systems',
      'Radar & Satellite Comm'
    ]
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    iconName: 'BrainCircuit',
    description: 'Generative models, computer vision, agentic pipelines, and LLM safety.',
    skills: [
      'Machine Learning',
      'Prompt Engineering',
      'AI API Integration',
      'Computer Vision (OpenCV)',
      'LLM Reliability & Safety',
      'Chatbot Architecture'
    ]
  },
  {
    name: 'Programming, Scripting & Full-Stack',
    iconName: 'CodeXml',
    description: 'Languages, EDA automation scripting, modern reactive frameworks, and databases.',
    skills: [
      'Python',
      'C++',
      'Embedded C',
      'TCL Scripting',
      'TypeScript / JavaScript',
      'React & Node.js',
      'HTML / CSS / Tailwind',
      'REST APIs & Firebase',
      'Git & GitHub'
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Cisco CCNA Certification',
    issuer: 'Cisco',
    description: 'Networking Fundamentals and Infrastructure routing and switching protocols.'
  },
  {
    title: 'IEEE Certification',
    issuer: 'IEEE',
    description: '5G Wireless Technology, beamforming, and next-generation cellular communication architectures.'
  },
  {
    title: 'NPTEL Certification — Joy of Python',
    issuer: 'NPTEL / IIT',
    description: 'Programming Fundamentals, algorithmic thinking, and computational logic.'
  },
  {
    title: 'NPTEL Certification — Cloud Computing',
    issuer: 'NPTEL / IIT',
    description: 'Virtualization, distributed systems, and scalable cloud application architecture.'
  },
  {
    title: 'Workshop — Ethical Hacking with Cyber Security',
    issuer: 'TECHNO WORKSHOP',
    description: 'Defensive security, cryptographic considerations, and vulnerability assessments.'
  },
  {
    title: 'Workshop — Xilinx Software Technology',
    issuer: 'Xilinx',
    description: 'FPGA design flow and EDA tool configuration for reconfigurable silicon logic.'
  }
];

export const EXPERIENCE_EDUCATION: ExperienceItem[] = [
  {
    id: 'msc-ai-surrey',
    title: 'MSc Artificial Intelligence with Industrial Practice',
    organization: 'University of Surrey',
    period: '2026 – Present',
    type: 'education',
    location: 'Surrey, United Kingdom',
    scoreOrRole: 'Postgraduate Researcher',
    description: 'Advanced postgraduate program specializing in machine learning algorithms, computer vision pipelines, neural architectures, and intelligent systems with industrial practice placement.',
    bullets: [
      'Focusing on deep learning, neural optimization, and edge acceleration for intelligent hardware systems.',
      'Studying state-of-the-art transformer mechanisms, prompt engineering, and conversational AI paradigms.',
      'Conducting algorithmic design and data structures analysis using Python.'
    ],
    skills: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Python', 'AI Systems Architecture']
  },
  {
    id: 'ecil-apprentice',
    title: 'Apprentice Engineer',
    organization: 'Electronics Corporation of India Limited (ECIL)',
    period: 'Jan 2025 – Mar 2026',
    type: 'experience',
    location: 'Hyderabad, India',
    scoreOrRole: 'Apprentice Engineer',
    description: 'Hands-on electronic engineering apprenticeship at a premier defense and strategic electronics public sector enterprise.',
    bullets: [
      'Executed system-level test activities for the Window Announcement System, analysing signal data and troubleshooting hardware-software integration faults.',
      'Performed PLC I/O verification and signal validation, identifying anomalies and supporting corrective actions.',
      'Conducted EMI/EMC testing and interpreted quantitative measurement data against applicable industry requirements.',
      'Supported PCB, PLC and VME/universal-module activities, system integration, troubleshooting and technical documentation.',
      'Maintained quality procedure records and documentation in an ISO-certified engineering environment.'
    ],
    skills: ['Electronics Engineering', 'EMI/EMC Testing', 'PLC I/O Verification', 'Signal Validation', 'PCB Diagnostics', 'Hardware QA']
  },
  {
    id: 'masternext-ai-fullstack',
    title: 'AI & Full-Stack Development Trainee',
    organization: 'MasterNext Academy',
    period: 'Apr 2026 – Jul 2026',
    type: 'training',
    location: 'Specialized Technical Training',
    scoreOrRole: 'Professional Trainee',
    description: 'Intensive professional training in modern AI engineering, API integrations, and full-stack software development.',
    bullets: [
      'Studied AI foundations, model types, and prompt engineering patterns for reliable LLM outputs.',
      'Built and deployed AI-powered web applications using Lovable and Bolt, progressing from rapid prototypes to functional applications.',
      'Integrated AI APIs with web interfaces and applied reliability and safety techniques to improve output quality.',
      'Developed practical skills in HTML, CSS, JavaScript, TypeScript, React and Node.js, with Git/GitHub and modern deployment workflows.'
    ],
    skills: ['AI API Integration', 'Prompt Engineering', 'React', 'TypeScript', 'Node.js', 'Lovable', 'Bolt']
  },
  {
    id: 'vlsi-guru-trainee',
    title: 'Physical Design Engineer Trainee',
    organization: 'VLSI Guru',
    period: 'Jun 2024 – Mar 2025',
    type: 'training',
    location: 'Specialized VLSI Training',
    scoreOrRole: 'Physical Design Trainee',
    description: 'Comprehensive industry training through the complete ASIC Physical Design backend flow from RTL synthesis to GDSII tapeout.',
    bullets: [
      'Worked through the ASIC Physical Design flow from RTL to GDSII, including floorplanning, power planning, placement, CTS, routing, timing closure and sign-off checks.',
      'Used Static Timing Analysis (STA) concepts to analyse timing and support timing-closure activities.',
      'Used TCL scripting to automate repetitive design tasks and improve workflow efficiency.',
      'Developed practical familiarity with Cadence Innovus, Synopsys ICC2, and Synopsys PrimeTime.'
    ],
    skills: ['ASIC Physical Design', 'Cadence Innovus', 'Synopsys ICC2', 'PrimeTime', 'TCL Scripting', 'STA']
  },
  {
    id: 'btech-vignan',
    title: 'B.Tech in Electronics & Communication Engineering',
    organization: 'Vignan Foundation Science & Technology Research University',
    period: '2020 – 2024',
    type: 'education',
    location: 'Andhra Pradesh, India',
    scoreOrRole: 'CGPA: 7.92 / 10 (First Class)',
    description: 'Four-year undergraduate degree with comprehensive focus on semiconductor physics, VLSI design, digital systems, and RF communications.',
    bullets: [
      'Graduated with First Class distinction (CGPA 7.92 / 10).',
      'Final Year Capstone: "Design of a CNTFET Based Low Power Ternary Content Addressable Memory" (official ABET accredited publication on vignan.ac.in).',
      'Inter-Departmental Project-III: "Design of Hybrid Coupler in RF Passive Components" (9.5 GHz microwave coupler for Butler Matrix in Keysight ADS, guided by Dr. K. Venkata Kishore).',
      'Field Project-II: "Passport Verification Using RFID Card" (embedded Arduino ATmega328P & RC522 wireless transponder system).',
      'Served as Class Representative (CR) coordinating 60+ engineering students.'
    ],
    skills: ['Electronics Engineering', 'CNTFET & TCAM', 'RF Hybrid Coupler', 'RFID & Embedded C', 'Digital Electronics']
  },
  {
    id: 'diploma-bapatla',
    title: 'Diploma in Electronics & Communication Engineering',
    organization: 'Bapatla Engineering College',
    period: '2017 – 2020',
    type: 'education',
    location: 'Bapatla, Andhra Pradesh, India',
    scoreOrRole: 'CGPA: 8.78 / 10 (Distinction)',
    description: 'Three-year foundational engineering diploma providing hands-on circuit laboratory testing, analog electronics, and PCB construction.',
    bullets: [
      'Achieved exceptional academic record of 8.78 / 10 CGPA.',
      'Completed foundational labs in electronic devices, digital electronics, instrumentation, and microprocessor interfacing.'
    ],
    skills: ['Analog Electronics', 'Digital Circuits', 'PCB Fabrication', 'Microprocessors']
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'class-representative',
    title: 'Class Representative (CR)',
    role: 'Student Cohort Leadership',
    scope: 'Electronics & Communication Engineering Department',
    description: 'Elected to represent a cohort of 60+ engineering students, bridging communications between the department chair, faculty professors, and student body.',
    outcomes: [
      'Streamlined academic scheduling, laboratory allocations, and course feedback loops.',
      'Resolved academic grievances and facilitated student study groups during examination periods.',
      'Maintained consistent departmental attendance and academic communication standards.'
    ]
  },
  {
    id: 'training-placement-volunteer',
    title: 'Training & Placement Department Volunteer',
    role: 'Corporate Drive Coordinator',
    scope: 'University Placement Cell',
    description: 'Actively volunteered with the campus placement unit to orchestrate recruitment drives for multinational engineering and technology corporations.',
    outcomes: [
      'Managed logistics, candidate verification, and interview scheduling for 200+ campus applicants.',
      'Facilitated corporate recruiters with technical lab setups and evaluation environments.',
      'Strengthened peer interview readiness through collaborative mock sessions.'
    ]
  },
  {
    id: 'college-event-volunteering',
    title: 'College Technical & Cultural Event Volunteering',
    role: 'Event Committee Coordinator',
    scope: 'University Annual Symposiums & Tech Fests',
    description: 'Coordinated technical workshops, robotics demonstrations, and collegiate symposiums celebrating engineering innovation.',
    outcomes: [
      'Organized hardware circuit-debugging challenges and electronics project showcases.',
      'Coordinated audio-visual equipment and stage technical requirements for guest speakers.',
      'Recognized for exceptional reliability, proactive teamwork, and crisis management.'
    ]
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 'python-dsa',
    topic: 'Python for DSA',
    category: 'Computer Science Core',
    status: 'In Progress',
    description: 'Mastering data structures, tree/graph algorithms, dynamic programming, and computational complexity optimization.',
    focusAreas: ['Graphs & Trees', 'Dynamic Programming', 'Algorithmic Complexity', 'LeetCode Practice'],
    progressPercent: 78
  },
  {
    id: 'vlsi-pnr',
    topic: 'VLSI Physical Design',
    category: 'Hardware Engineering',
    status: 'In Progress',
    description: 'Deepening proficiency in advanced sub-micron physical implementation: timing closure, clock tree synthesis, and IR drop mitigation.',
    focusAreas: ['Floorplanning & Placement', 'Clock Tree Synthesis (CTS)', 'Static Timing Analysis (STA)', 'DRC / LVS Signoff'],
    progressPercent: 82
  },
  {
    id: 'ai-ml',
    topic: 'Artificial Intelligence & Machine Learning',
    category: 'AI Systems',
    status: 'Advancing',
    description: 'MSc curriculum focus: transformer architectures, multi-modal neural networks, and quantized on-device inference.',
    focusAreas: ['Deep Neural Networks', 'Transformer Attention', 'Model Quantization', 'Agentic Workflows'],
    progressPercent: 70
  },
  {
    id: 'fullstack-dev',
    topic: 'Full-Stack Web Development',
    category: 'Software Engineering',
    status: 'Advancing',
    description: 'Building performant cloud-native web applications with React, TypeScript, serverless backends, and responsive design systems.',
    focusAreas: ['React & Next.js Patterns', 'TypeScript Type Systems', 'REST & GraphQL APIs', 'Cloud Database Design'],
    progressPercent: 75
  }
];
