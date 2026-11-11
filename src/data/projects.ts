import { Project } from '../types';

import emoiqImage from '../assets/images/emoiq_ai_preview_1792574932280.jpg';
import arcturaImage from '../assets/images/arctura_fridge_preview_1792574932416.jpg';

/**
 * Master Project Directory
 * Arranged strictly in chronological order by Date & Year (Newest -> Oldest).
 * Includes all B.Tech accredited research, Full-Stack applications, and AI systems.
 */
export const PROJECTS_DATA: Project[] = [
  // ==========================================
  // 2025 – 2026: AI & CONVERSATIONAL INTELLIGENCE
  // ==========================================
  {
    id: 'emoiq-ai',
    title: 'EmoIQ – Emotionally Intelligent AI Chatbot',
    year: 2026,
    dateLabel: '2025 – 2026',
    projectType: 'AI & Machine Learning',
    category: 'AI',
    description: 'Conversational AI agent capable of detecting acoustic and textual emotional tone to deliver empathetic, context-aware responses.',
    longDescription: 'EmoIQ bridges natural language processing and emotional sentiment analysis. Designed during MSc Artificial Intelligence studies to recognize user affective states (calm, anxious, frustrated, enthusiastic) and dynamically calibrate response temperature, cadence, and empathy cues.',
    techStack: ['AI / ML', 'Prompt Engineering', 'Sentiment Analysis', 'Chatbot Design', 'TypeScript', 'NLP'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: '#demo-emoiq',
    isDemoPlaceholder: true,
    image: emoiqImage,
    featured: true,
    highlights: [
      'Multi-modal sentiment detection architecture',
      'Contextual conversation state preservation',
      'Adaptive empathy tuning for conversational clarity'
    ]
  },

  // ==========================================
  // 2025: INDUSTRIAL SMART APPLIANCE WEB INTERFACE
  // ==========================================
  {
    id: 'arctura',
    title: 'Arctura – Dark Engineering Refrigerator Showcase',
    year: 2025,
    dateLabel: '2025',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'High-precision dark-themed industrial landing page for a next-generation smart refrigerator with embedded thermal monitoring telemetry.',
    longDescription: 'Arctura presents a luxury cooling appliance built for modern kitchens. Features reactive thermal zone controls, compressor telemetry breakdowns, and technical CAD-inspired responsive UI with hardware-inspired controls.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Full-Stack UI', 'Responsive Design'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: '#demo-arctura',
    isDemoPlaceholder: true,
    image: arcturaImage,
    featured: true,
    highlights: [
      'Interactive dual-zone thermal monitoring simulation',
      'Hardware-inspired telemetry visualization',
      'Smooth micro-interactions and dark aesthetic'
    ]
  },

  // ==========================================
  // 2024 – 2025: CLOUD-NATIVE FULL-STACK E-COMMERCE
  // ==========================================
  {
    id: 'easy-dryfruits-sweets',
    title: 'Easy Dryfruits & Sweets – Full-Stack Retail Platform',
    year: 2025,
    dateLabel: '2024 – 2025',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'Full-stack food retail platform with real-time product catalogue, cart management, and cloud database integration built on React, Vite, and Firebase.',
    longDescription: 'Full-stack commercial storefront built for local confectionery vendors. Features real-time Firebase Firestore synchronization for inventory stock counts, customer checkout cart, and dynamic pricing updates.',
    techStack: ['React', 'Vite', 'Firebase Firestore', 'Cloud DB', 'Full-Stack Development', 'CSS3'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: '#demo-dryfruits',
    isDemoPlaceholder: true,
    featured: true,
    highlights: [
      'Firebase Firestore real-time inventory synchronization',
      'Client-side cart calculation with state persistence',
      'Mobile-first responsive shopping flow'
    ]
  },

  // ==========================================
  // 2024: VLSI PHYSICAL DESIGN TRAINING
  // ==========================================
  {
    id: 'vlsi-physical-design',
    title: 'VLSI 8-bit Arithmetic Logic Unit & Physical Layout',
    year: 2024,
    dateLabel: '2024',
    projectType: 'B.Tech Electronics & Hardware',
    category: 'Electronics',
    academicBadge: 'Specialized Professional VLSI Training',
    description: 'CMOS-level digital design, RTL synthesis, floorplanning, and static timing analysis for an 8-bit pipelined ALU.',
    longDescription: 'Synthesized arithmetic logic unit utilizing standard cell libraries. Conducted Design Rule Checks (DRC), Layout Versus Schematic (LVS) verification, and parasitic extraction to validate propagation delays under sub-micron geometries.',
    techStack: ['VLSI Physical Design', 'Verilog HDL', 'Cadence Virtuoso', 'Static Timing Analysis (STA)', 'CMOS'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: '#details-vlsi',
    isDemoPlaceholder: true,
    featured: true,
    highlights: [
      'Clock-tree synthesis and propagation skew minimization',
      'Complete DRC & LVS clean layout tapeout workflow',
      'Critical path timing optimization'
    ]
  },

  // ==========================================
  // 2026: MASTER NEXT ACADEMY LIVE DEPLOYMENTS
  // ==========================================
  {
    id: 'animated-movie',
    title: 'Animated Movie Portal',
    year: 2026,
    dateLabel: '2026',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'Multi-page animated cinema discovery platform highlighting trending 3D features, studio trailers, and character cast profiles.',
    longDescription: 'Rich media platform built and deployed during MasterNext Academy training. Incorporates responsive movie carousels, video player modals, and categorized studio filmographies.',
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Vercel Deployment'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: 'https://animatedmoviebyrakesh.vercel.app/',
    isDemoPlaceholder: false,
    featured: true,
    highlights: [
      'Live deployment on Vercel (animatedmoviebyrakesh.vercel.app)',
      'Multi-view layout with route-based animation states',
      'Dynamic character spotlights and trailer embedding'
    ]
  },
  {
    id: 'anatomy-of-web',
    title: 'Anatomy of a Web (Vite & React)',
    year: 2026,
    dateLabel: '2026',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'Deep dive educational web application examining frontend architecture, DOM rendering lifecycles, and component tree dynamics.',
    longDescription: 'Interactive educational resource breaking down modern web mechanics, reactive states, and bundle optimizations built with Vite and React.',
    techStack: ['Vite', 'React', 'JavaScript', 'Web Architecture', 'CSS3'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: 'https://viteandreactbyrakesh.vercel.app/',
    isDemoPlaceholder: false,
    highlights: [
      'Live production deployment on Vercel',
      'Interactive component breakdown and DOM tree visualizations',
      'Responsive design across mobile and desktop devices'
    ]
  },
  {
    id: 'elegant-lights',
    title: 'Elegant Lights E-Commerce Showcase',
    year: 2026,
    dateLabel: '2026',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'Luxury architectural lighting storefront highlighting fixture specifications, illumination simulations, and cart flows.',
    longDescription: 'High-aesthetic commercial catalog for contemporary luminaires, featuring luminous temperature switches, dimming previews, and responsive product grids.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'E-Commerce UI', 'Vercel'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: 'https://elegantlightsbyrakesh.vercel.app/',
    isDemoPlaceholder: false,
    highlights: [
      'Live Vercel deployment (elegantlightsbyrakesh.vercel.app)',
      'Interactive lighting simulation controls',
      'Modern sleek product catalogue and cart UX'
    ]
  },
  {
    id: 'interiors-showcase',
    title: 'Interiors Architectural Studio',
    year: 2026,
    dateLabel: '2026',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'Minimalist spatial design and architectural portfolio highlighting interior layouts, spatial acoustics, and materials.',
    longDescription: 'Curated architectural portfolio for contemporary spatial designers, integrating smooth layout animations, project galleries, and consultation booking.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Deployment'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: 'https://interiorsbyrakesh.vercel.app/',
    isDemoPlaceholder: false,
    highlights: [
      'Live deployment on Vercel (interiorsbyrakesh.vercel.app)',
      'Editorial layout with fluid micro-interactions',
      'High-resolution architectural photography showcase'
    ]
  },
  {
    id: 'moksha-yatra-ai',
    title: 'Moksha Yatra – AI Pilgrimage Assistant',
    year: 2026,
    dateLabel: '2026',
    projectType: 'AI & Machine Learning',
    category: 'AI',
    description: 'AI-assisted spiritual journey planner developed on Google AI Studio, offering route guidance, sacred site history, and itinerary schedules.',
    longDescription: 'Built using Google AI Studio prompt engineering and generative agents to provide context-sensitive guidance for cultural and spiritual travel in India.',
    techStack: ['Google AI Studio', 'Prompt Engineering', 'Generative AI', 'Agentic Workflows'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: 'https://ai.studio/apps/08df5265-902e-40ba-858f-6ae8a5250e1b',
    isDemoPlaceholder: false,
    highlights: [
      'Published on Google AI Studio platform',
      'Context-aware cultural recommendation prompt templates',
      'Step-by-step temple and heritage travel itineraries'
    ]
  },
  {
    id: 'mind-chatbot',
    title: "Mind Chatbot (Share What's on Your Mind)",
    year: 2026,
    dateLabel: '2026',
    projectType: 'AI & Machine Learning',
    category: 'AI',
    description: 'Empathetic conversational AI chatbot designed on Lovable to provide supportive active listening and thoughtful dialogue reflections.',
    longDescription: 'Trained and architected during MasterNext Academy AI training, utilizing conversational safety guidelines and prompt tuning for compassionate responses.',
    techStack: ['Lovable AI', 'Conversational AI', 'Prompt Engineering', 'NLP'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: 'https://lovable.dev/projects/9a9e6be4-239f-42f2-b396-fa8747308b2e',
    isDemoPlaceholder: false,
    highlights: [
      'Live deployment on Lovable platform',
      'Supportive dialogue safety guardrails',
      'Real-time streaming conversation flow'
    ]
  },

  // ==========================================
  // 2023 – 2024: DEFENSE ELECTRONICS APPRENTICE TESTING
  // ==========================================
  {
    id: 'radar-comm-telemetry',
    title: 'Radar & Satellite RF Signal Processing Testbench',
    year: 2024,
    dateLabel: '2023 – 2024',
    projectType: 'B.Tech Electronics & Hardware',
    category: 'Electronics',
    academicBadge: 'ECIL Apprentice Engineering (15 Months)',
    description: 'Hardware testbench and digital filter simulation for radar receiver frontends and satellite telemetry decoding developed during ECIL apprenticeship.',
    longDescription: 'Designed bandpass Chebyshev filtering and pulse-compression routines to boost signal-to-noise ratio in high-frequency radar return echoes, building upon 15 months of hands-on apprentice testing at Electronics Corporation of India Limited (ECIL).',
    techStack: ['Electronics Engineering', 'Radar & Satellite Comm', 'MATLAB / Python', 'PCB Design', 'RF Testing', 'Hardware QA'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: '#details-radar',
    isDemoPlaceholder: true,
    highlights: [
      'Chirp signal pulse compression and Doppler shift simulation',
      'RF receiver frontend noise figure modeling',
      'PCB layout trace impedance matched to 50 ohms'
    ]
  },

  // ==========================================
  // 2023: B.TECH FINAL YEAR CAPSTONE PROJECT (ABET ACCREDITED)
  // ==========================================
  {
    id: 'cntfet-tcam',
    title: 'Design of a CNTFET Based Low Power Ternary Content Addressable Memory (TCAM)',
    year: 2023,
    dateLabel: '2022 – 2023',
    projectType: 'B.Tech Electronics & Hardware',
    category: 'Electronics',
    academicBadge: 'B.Tech Final Year Capstone Project (ABET Accredited)',
    description: 'High-speed, ultra-low power Ternary Content Addressable Memory (TCAM) architecture using Carbon Nanotube FETs (CNTFETs) for next-generation network routing lookup tables.',
    longDescription: 'B.Tech ECE Final Year Capstone project officially published in Vignan University ABET / AQAR repository. Replaced conventional sub-micron bulk CMOS transistors with ballistic-conduction Carbon Nanotube Field Effect Transistors (CNTFETs) in ternary CAM cells. Achieved significant reductions in search-line leakage current, dynamic match-line energy consumption, and access latency under nanoscale regimes for ultra-high-speed routing engines.',
    techStack: ['CNTFETs', 'Ternary CAM (TCAM)', 'VLSI Memory Architecture', 'Low-Power VLSI', 'HSPICE / Cadence', 'Nanotechnology'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: false,
    documentUrl: 'https://vignan.ac.in/aqardownload/abet/Design%20of%20a%20CNTFET%20based%20Low%20Power%20Ternary%20Content%20Addressable%20Memory.pdf',
    documentTitle: 'Vignan Official ABET Publication PDF',
    academicInstitution: "Vignan's Foundation for Science, Technology & Research (NAAC A+)",
    projectGuide: 'Department of Electronics & Communication Engineering',
    regNo: '211LA05032',
    featured: true,
    highlights: [
      'Official publication archived on Vignan University ABET accreditation portal',
      'Engineered CNTFET ternary cell reducing dynamic search energy and leakage',
      'Comparative evaluation against conventional CMOS TCAM implementations at sub-10nm',
      'Optimized match-line sensing and priority-encoder integration for packet forwarding'
    ],
    reportDetails: {
      reportTitle: 'Design of a CNTFET Based Low Power Ternary Content Addressable Memory',
      reportType: 'B.Tech Final Year Capstone Project Report (ABET Accredited)',
      institution: "Vignan's Foundation for Science, Technology & Research (Deemed to be University), Guntur, India",
      guide: 'Department of ECE Faculty Mentors',
      regNo: '211LA05032 (A. Sai Rakesh)',
      period: 'Final Year B.Tech (2022-2023)',
      abstractText: 'Ternary Content Addressable Memory (TCAM) operates as an associative memory conducting parallel hardware word lookups in a single clock cycle. As CMOS technology encounters physical scaling limits (sub-threshold leakage and short-channel effects), this project explores ballistic Carbon Nanotube Field Effect Transistors (CNTFETs) to drastically minimize static leakage and switching power while boosting search throughput for network packet classification.',
      objectives: [
        'Design nanoscale ternary CAM bitcells leveraging high-mobility Carbon Nanotube channels.',
        'Mitigate severe standby leakage currents and peak precharge power dissipation across match lines.',
        'Analyze search latency, power-delay product (PDP), and noise margins across temperature variations.',
        'Provide verifiable academic documentation under ABET/NAAC accreditation standards.'
      ],
      keyParameters: [
        { label: 'Technology Node', value: 'Carbon Nanotube FET (Nanoscale)' },
        { label: 'Memory Architecture', value: 'Ternary CAM (0, 1, and X wildcard states)' },
        { label: 'Primary Benefit', value: 'Drastic reduction in leakage & match-line power' },
        { label: 'Target Application', value: 'High-speed router lookups & packet classification' },
        { label: 'Verification Document', value: 'vignan.ac.in ABET repository PDF' }
      ],
      softwareHardware: ['HSPICE / Cadence EDA', 'Carbon Nanotube Model Libraries', 'Verilog-A'],
      resultsSummary: 'Validated low-power operation and rapid match-line resolution over conventional silicon MOSFET counterparts, demonstrating suitability for high-density, energy-constrained networking switches.',
      pdfDownloadUrl: 'https://vignan.ac.in/aqardownload/abet/Design%20of%20a%20CNTFET%20based%20Low%20Power%20Ternary%20Content%20Addressable%20Memory.pdf',
      externalLinkText: 'Open Official ABET Document (vignan.ac.in)'
    }
  },

  // ==========================================
  // MAY 2023: B.TECH INTER-DEPARTMENTAL PROJECT-III
  // ==========================================
  {
    id: 'rf-hybrid-coupler',
    title: 'Design of Hybrid Coupler in RF Passive Components',
    year: 2023,
    dateLabel: 'May 2023',
    projectType: 'B.Tech Electronics & Hardware',
    category: 'Electronics',
    academicBadge: 'B.Tech Inter-Departmental Project-III (May 2023)',
    description: 'Design and simulation of equal and unequal amplitude branch-line quadrature hybrid couplers at 9.5 GHz for Butler Matrix beamforming networks in 5G and X-band radar systems.',
    longDescription: 'Official B.Tech Inter-Departmental Project-III (IDP-III) conducted under the guidance of Dr. K. Venkata Kishore at Vignan University. Developed microstrip quadrature hybrid couplers generating 90° phase differences for 2x2 and 4x4 Butler Matrix beamforming networks (BFN). Designed both equal power splitters (50Ω to 35.35Ω) and unequal power splitters (60:40 power division; Z01=38.725Ω, Z02=61.234Ω) on microwave substrate (H=0.8mm, εr=2.2) simulated in Keysight Advanced Design System (ADS).',
    techStack: ['RF Passive Components', 'Keysight ADS', 'Hybrid Coupler', 'Butler Matrix (BFN)', '9.5 GHz X-Band', 'S-Parameters'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: false,
    documentTitle: 'B.Tech IDP-III Project Report (May 2023)',
    academicInstitution: "Vignan's Foundation for Science, Technology & Research (NAAC A+)",
    projectGuide: 'Dr. K. Venkata Kishore, Ph.D (Associate Professor, ECE)',
    regNo: '211LA05032',
    featured: true,
    highlights: [
      'Official B.Tech IDP-III project certified by HOD Dr. T. Pitchaiah & Guide Dr. K. Venkata Kishore',
      'Formulated mathematical impedance transformations for 9.5 GHz equal and unequal power splits',
      'Engineered unequal amplitude split (60:40) to lower antenna array side-lobe levels (SLL)',
      'Simulated complete S-parameter matrix (S11 reflection, S21/S31 coupling, S41 isolation) on Keysight ADS'
    ],
    reportDetails: {
      reportTitle: 'Design of Hybrid Coupler in RF Passive Components',
      reportType: 'Inter Departmental Project-III (IDP-III) Final Report',
      institution: "Department of ECE, Vignan's Foundation for Science, Technology and Research, Vadlamudi, India",
      guide: 'Dr. K. Venkata Kishore, Ph.D (Associate Professor)',
      regNo: '211LA05032 (A. Sai Rakesh) · Team: B. Abhignu, B. Rahul, K. Manaswini',
      period: 'May 2023 · B.Tech ECE',
      abstractText: 'In 5G and Beyond 5G (B5G) antenna array systems, passive beamforming networks (BFNs) such as the Butler Matrix (BM) are indispensable for multi-beam generation. This project designs equal and unequal power quadrature hybrid couplers operating at 9.5 GHz (X-band radar applications). By synthesizing unequal power ratios (0.6 and 0.4 split), side-lobe levels in radiation patterns are drastically attenuated while maximizing main-lobe directivity.',
      objectives: [
        'Design microstrip quadrature hybrid coupler generating 90° phase difference with 1-wavelength circumference.',
        'Compute characteristic line impedances for equal power split (Z0=50Ω, Z0a=35.35Ω).',
        'Derive unequal branch impedance formulas for 60:40 power distribution (Z01=38.725Ω, Z02=61.234Ω).',
        'Simulate S-parameters on Keysight Advanced Design System (ADS) using RT/duroid substrate (H=0.8mm, εr=2.2).'
      ],
      keyParameters: [
        { label: 'Operating Frequency', value: '9.5 GHz (X-Band Radar & 5G)' },
        { label: 'Substrate Parameters', value: 'Height H=0.8mm, Dielectric εr=2.2, t=0.035mm' },
        { label: 'Equal Split Impedance', value: 'Z0 = 50 Ω, Z0a = 35.35 Ω, Guided Length L = 5.69 mm' },
        { label: 'Unequal Split Impedance', value: 'Z01 = 38.725 Ω (W=4.45mm), Z02 = 61.235 Ω (W=1.80mm)' },
        { label: 'Phase Shift', value: '90° Quadrature difference between Port 2 & Port 3' },
        { label: 'Isolation Port', value: 'Port 4 (Isolated, ~0 power transfer)' }
      ],
      softwareHardware: ['Keysight Advanced Design System (ADS)', 'RF Microstrip CAD', 'Smith Chart Calculator'],
      resultsSummary: 'S-parameter simulations validated tight port isolation (S41 < -50 dB), precise -3 dB equal split and targeted 60:40 unequal coupling at 9.5 GHz with low insertion loss, proving compatibility for 4x4 Butler Matrix feeder arrays.'
    }
  },

  // ==========================================
  // 2023: IOT / AI HARDWARE KEY PROJECT
  // ==========================================
  {
    id: 'surveillance-car',
    title: 'Surveillance Car with Object Detection & Tracking',
    year: 2023,
    dateLabel: '2023',
    projectType: 'AI & Machine Learning',
    category: 'AI',
    academicBadge: 'IoT / AI Key Project (2023)',
    description: 'Autonomous surveillance robotic vehicle integrating real-time object detection using OpenCV and Python with line tracking and obstacle avoidance.',
    longDescription: 'Key IoT & AI project listed on official resume. Developed an autonomous robotic vehicle featuring real-time computer vision object detection and spatial tracking via OpenCV and Python. Integrated line-tracking sensory arrays and ultrasonic obstacle avoidance with embedded motor controllers to establish seamless software-to-hardware edge intelligence.',
    techStack: ['OpenCV', 'Python', 'Computer Vision', 'IoT', 'Object Detection', 'Sensors & Hardware', 'Line Tracking'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: true,
    demoUrl: '#demo-surveillance',
    isDemoPlaceholder: true,
    featured: true,
    highlights: [
      'Real-time object detection and visual tracking pipeline via OpenCV & Python',
      'Autonomous line-following logic and obstacle collision avoidance',
      'Direct integration of computer-vision pipelines with physical vehicle actuators'
    ]
  },

  // ==========================================
  // 2023: UNIVERSITY STUDENT PORTAL WEB PLATFORM
  // ==========================================
  {
    id: 'university-student-portal',
    title: 'University Student Portal',
    year: 2023,
    dateLabel: '2023',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    isFullStack: true,
    description: 'Interactive academic portal prototype featuring course enrollment, attendance tracking, syllabus inspection, and student alerts.',
    longDescription: 'A centralized collegiate management interface designed using vanilla JavaScript DOM manipulation to emulate campus intranet workflows, semester grade reports, and department announcements.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Full-Stack Web basics'],
    githubUrl: 'https://github.com/sairakeshalla9786-star/protal',
    isGithubPlaceholder: false,
    demoUrl: 'https://sairakeshalla9786-star.github.io/protal',
    isDemoPlaceholder: false,
    highlights: [
      'Dynamic DOM updating for academic records & course lists',
      'Tabbed interface for schedule and attendance inspection',
      'Clean student dashboard layout'
    ]
  },

  // ==========================================
  // 2023: HIGH-CONVERSION LANDING PAGE
  // ==========================================
  {
    id: 'biryani-landing-page',
    title: 'Biryani Restaurant Landing Page',
    year: 2023,
    dateLabel: '2023',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    description: 'Modern, high-conversion landing page for a specialty dining establishment featuring menu showcases, customer feedback, and table reservations.',
    longDescription: 'A clean restaurant promotional landing page with intuitive call-to-actions, hero banner styling, chef notes, and mobile-friendly reservation layouts.',
    techStack: ['HTML5', 'CSS3', 'Flexbox / Grid', 'Responsive UI / UX'],
    githubUrl: 'https://github.com/sairakeshalla9786-star/landingpage',
    isGithubPlaceholder: false,
    demoUrl: 'https://sairakeshalla9786-star.github.io/landingpage',
    isDemoPlaceholder: false,
    highlights: [
      'Responsive hero section with dish highlight cards',
      'Clean reservation form layout and social links',
      'Live GitHub Pages deployment'
    ]
  },

  // ==========================================
  // 2022 – 2023: ARTISANAL CULINARY SHOWCASE
  // ==========================================
  {
    id: 'biryani-by-rakesh',
    title: 'Biryani by Rakesh',
    year: 2023,
    dateLabel: '2022 – 2023',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    description: 'Detailed information site exploring regional Indian biryani heritage, signature spices, cooking techniques, and recipe breakdowns.',
    longDescription: 'An artisanal culinary curation portal crafted with clean semantic HTML and modular CSS styling, celebrating traditional Dum cooking methods and regional variations.',
    techStack: ['HTML5', 'CSS3', 'Responsive Web Design', 'Modular CSS'],
    githubUrl: 'https://github.com/sairakeshalla9786-star/biryani-byrakesh',
    isGithubPlaceholder: false,
    demoUrl: 'https://sairakeshalla9786-star.github.io/biryani-byrakesh',
    isDemoPlaceholder: false,
    highlights: [
      'Custom typographic styling and authentic color palette',
      'Semantic HTML5 structure with optimized asset delivery',
      'Active public repository on GitHub'
    ]
  },

  // ==========================================
  // 2022: TERMINAL UI & CSS PROTOTYPES
  // ==========================================
  {
    id: 'test-projects',
    title: 'Test Projects & Terminal UI Prototype',
    year: 2022,
    dateLabel: '2022',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    description: 'Experimental web interfaces exploring terminal-inspired CLI styling, command prompt parsing, and CSS component testing.',
    longDescription: 'Exploration repository evaluating terminal emulations in the browser, dark contrast schemes, and rapid styling benchmarks for developer-oriented web tools.',
    techStack: ['HTML5', 'CSS3', 'Terminal UI', 'Web Prototyping'],
    githubUrl: 'https://github.com/sairakeshalla9786-star/testproject1',
    isGithubPlaceholder: false,
    demoUrl: 'https://sairakeshalla9786-star.github.io/testproject1',
    isDemoPlaceholder: false,
    highlights: [
      'Monospace terminal color theme and simulated prompt',
      'Rapid prototype layout testing',
      'Live code on GitHub'
    ]
  },

  // ==========================================
  // 2022: FOUNDATIONAL FRONTEND PRACTICE SUITE
  // ==========================================
  {
    id: 'practice-projects',
    title: 'HTML, CSS & JavaScript Practice Suite',
    year: 2022,
    dateLabel: '2022',
    projectType: 'Full-Stack & Web Software',
    category: 'Web',
    description: 'Hands-on frontend laboratory containing foundational programming exercises, responsive UI patterns, and vanilla JS algorithms.',
    longDescription: 'A structured playground repository documenting the progression from core HTML5 markup to advanced CSS selectors, flexbox architecture, and JavaScript event loops.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Algorithms', 'DOM'],
    githubUrl: 'https://github.com/sairakeshalla9786-star/practice1',
    isGithubPlaceholder: false,
    demoUrl: 'https://sairakeshalla9786-star.github.io/practice1',
    isDemoPlaceholder: false,
    highlights: [
      'Clean modular exercise folders and test suites',
      'Experimentation with layout mechanics and responsiveness',
      'Fundamental algorithm and DOM practice'
    ]
  },

  // ==========================================
  // 2021 – 2022: B.TECH FIELD PROJECT-II (EMBEDDED HARDWARE)
  // ==========================================
  {
    id: 'rfid-passport-verification',
    title: 'Passport Verification Using RFID Card',
    year: 2022,
    dateLabel: '2021 – 2022',
    projectType: 'B.Tech Electronics & Hardware',
    category: 'Electronics',
    academicBadge: 'B.Tech Field Project Report-II (2021-2022)',
    description: 'Embedded automated contactless e-passport identification system integrating ATmega328P microcontroller, RC522 RFID reader, and LCD visual display for rapid border security.',
    longDescription: 'Official B.Tech Field Project Report-II certified by Dr. K. Venkata Kishore, Dr. M. Pachiyannan, Ms. Naga Jyothi Sree, and HOD Dr. T. Pitchaiah. Built a working embedded prototype that reads biometric transponder UID tags, cross-references digital records against stored microcontroller firmware, and outputs verification status to a 16x2 LCD display to prevent physical passport tampering and expedite immigration clearance.',
    techStack: ['Arduino UNO (ATmega328P)', 'RFID RC522 (13.56 MHz)', 'Embedded C', '16x2 LCD Display', 'Microcontrollers', 'Power Supply Design'],
    githubUrl: 'https://github.com/sairakeshalla9786-star',
    isGithubPlaceholder: false,
    documentTitle: 'B.Tech Field Project Report-II (2021-2022)',
    academicInstitution: "Vignan's Foundation for Science, Technology & Research (NAAC A+)",
    projectGuide: 'Dr. K. Venkata Kishore & Dr. M. Pachiyannan',
    regNo: '211LA05032',
    featured: true,
    highlights: [
      'Official B.Tech Field Project certified by ECE Department at Vignan University',
      'Configured SPI communications between ATmega328P and 13.56 MHz RC522 RFID transponder module',
      'Engineered step-down transformer, bridge rectifier, and LM7805 voltage regulation power stage',
      'Integrated 16x2 LCD display for passenger authentication and access authorization feedback'
    ],
    reportDetails: {
      reportTitle: 'Passport Verification Using RFID Card',
      reportType: 'Field Project Report-II Final Documentation',
      institution: "Department of ECE, Vignan's Foundation for Science, Technology and Research, Vadlamudi, India",
      guide: 'Dr. K. Venkata Kishore (Assoc. Prof), Dr. M. Pachiyannan (Assoc. Prof), Ms. Naga Jyothi Sree',
      regNo: '211LA05032 (A. Rakesh) · Team: SK. Baji, SK. Arshiya, G. Devi Sai Sunanda',
      period: 'Academic Year 2021-2022 · II-Year, II-Semester B.Tech ECE',
      abstractText: 'Traditional paper booklet passports are vulnerable to physical forgery, duplication, and cause cumbersome queues at immigration checkpoints. This project implements a contactless electronic passport (e-passport) prototype using 13.56 MHz Radio Frequency Identification (RFID). Unique passenger credentials stored on secure RFID smart cards are interrogated wirelessly by an RF reader and matched against memory registers in an Arduino UNO controller.',
      objectives: [
        'Automate identity authentication to eliminate manual paper document verification delays.',
        'Develop embedded microcontroller firmware on ATmega328P to handle RFID tag interrogation and access control.',
        'Build a regulated DC power supply converting AC mains with transformer, bridge rectifier, and IC 7805.',
        'Interface 16x2 LCD display for instantaneous feedback on valid vs unauthorized passport scans.'
      ],
      keyParameters: [
        { label: 'Microcontroller', value: 'Arduino UNO (ATmega328P, 16 MHz Ceramic Resonator)' },
        { label: 'RF Reader Module', value: 'RC522 13.56 MHz Wireless Transceiver (SPI Interface)' },
        { label: 'Display Interface', value: '16x2 Liquid Crystal Display (4-bit/8-bit mode)' },
        { label: 'Power Subsystem', value: 'Step-down Transformer + Bridge Rectifier + LM7805 Regulator' },
        { label: 'Operating Voltage', value: '5V DC Regulated' }
      ],
      softwareHardware: ['Arduino IDE', 'Embedded C / C++', 'RC522 RFID Module', 'ATmega328P', '16x2 LCD', 'Power Supply Components'],
      resultsSummary: 'Proved reliable instantaneous tag recognition within read proximity, successfully identifying authorized passenger IDs, alerting on unrecognized tags, and demonstrating seamless applicability for smart airport turnstiles.'
    }
  }
];

/** Selectors for dedicated sections */
export const BTECH_ELECTRONICS_PROJECTS = PROJECTS_DATA.filter(
  (p) => p.category === 'Electronics'
);

export const FULLSTACK_WEB_PROJECTS = PROJECTS_DATA.filter(
  (p) => p.category === 'Web' || p.isFullStack
);

export const AI_PROJECTS = PROJECTS_DATA.filter(
  (p) => p.category === 'AI'
);
