import React, { useState } from 'react';
import { X, Printer, Download, Mail, Github, MapPin, CheckCircle2, Phone, ExternalLink, FileText, Layout, Award, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_EDUCATION, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'pdf'>('web');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-200 dark:border-slate-800">
        {/* Controls Toolbar (Hidden in print) */}
        <div className="no-print p-3 sm:p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm text-cyan-400 font-semibold tracking-wide">
              Curriculum Vitae · Sai Rakesh Alla
            </span>
            {/* View Mode Toggle */}
            <div className="inline-flex p-0.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono">
              <button
                onClick={() => setActiveTab('web')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'web'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Structured CV</span>
              </button>
              <button
                onClick={() => setActiveTab('pdf')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'pdf'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Original PDF</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Sai_Rakesh_Alla_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              title="Download original uploaded PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {activeTab === 'web' && (
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        {activeTab === 'pdf' ? (
          /* Direct PDF Access Hub (Avoids Chrome nested iframe block) */
          <div className="p-8 sm:p-12 bg-slate-900 text-slate-100 flex flex-col items-center justify-center text-center space-y-6 max-h-[82vh] overflow-y-auto">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-xl">
              <FileText className="w-12 h-12" />
            </div>

            <div className="max-w-lg space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Official PDF Document
              </span>
              <h3 className="text-2xl font-bold text-white">
                Sai Rakesh Alla – Resume PDF
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct copy of your verified 2-page document (<strong className="font-mono text-cyan-300">Sai_Rakesh_Resume_7345af80.pdf</strong>).
              </p>
            </div>

            {/* Direct Action Buttons: Open & Download */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open PDF in New Window</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Sai_Rakesh_Alla_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download PDF File</span>
              </a>
            </div>

            {/* 2-Page Contents Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full text-left pt-6 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 font-semibold">Page 1 Content</span>
                <h4 className="text-sm font-bold text-white">Experience & Key Projects</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• ECIL Apprentice Engineer (Window Announcement & EMI/EMC)</li>
                  <li>• MasterNext Academy (AI & Full-Stack Projects)</li>
                  <li>• VLSI Guru Physical Design (RTL-to-GDSII)</li>
                  <li>• Key Projects: Surveillance Car, CNTFET TCAM, Passport RFID</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 font-semibold">Page 2 Content</span>
                <h4 className="text-sm font-bold text-white">Skills, Education & Certs</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Technical Skills: VLSI/ASIC, EDA Tools, AI/ML, Python, C++</li>
                  <li>• MSc AI with Industrial Practice (Univ of Surrey)</li>
                  <li>• B.Tech ECE (Vignan Univ) & Diploma (Bapatla)</li>
                  <li>• Certifications: Cisco CCNA, IEEE 5G, NPTEL Python & Cloud</li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('web')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
              >
                ← Or view the formatted Structured CV directly
              </button>
            </div>
          </div>
        ) : (
          /* Printable Structured Web CV Body (Exact Twin of PDF) */
          <div className="p-6 sm:p-10 space-y-7 bg-white text-slate-900 font-sans max-h-[82vh] overflow-y-auto">
            {/* Quick PDF Action Notification Strip */}
            <div className="no-print p-3 rounded-xl bg-cyan-50 border border-cyan-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-cyan-900 font-medium">
                Viewing interactive curriculum vitae. Want the original 2-page PDF file?
              </span>
              <div className="flex items-center gap-2 font-mono">
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  download="Sai_Rakesh_Alla_Resume.pdf"
                  className="font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open PDF in Tab</span>
                </a>
              </div>
            </div>
            {/* Header */}
            <div className="border-b border-slate-300 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                SAI RAKESH ALLA
              </h1>
              <p className="text-sm sm:text-base text-cyan-800 font-semibold mt-1">
                Electronics & Communication Engineer | VLSI Physical Design | AI & Full-Stack Development
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.address}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1 font-semibold text-slate-800">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  {PERSONAL_INFO.whatsappNumber}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>|</span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 hover:underline font-semibold"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Professional Profile */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                Electronics and Communication Engineer with industry experience at Electronics Corporation of India Limited (ECIL) and practical training in ASIC Physical Design, AI and Full-Stack Development. Hands-on exposure to RTL-to-GDSII physical design, floorplanning, power planning, placement, clock tree synthesis, routing, timing closure and Static Timing Analysis using Cadence and Synopsys EDA tools. Experienced in TCL scripting, C++, Python, system-level testing, signal validation, EMI/EMC testing and hardware-software integration. Currently pursuing an MSc in Artificial Intelligence with Industrial Practice at the University of Surrey.
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-950">
                      Apprentice Engineer | Electronics Corporation of India Limited (ECIL) — Hyderabad, India
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-600">
                      Jan 2025 – Mar 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <li>Executed system-level test activities for the Window Announcement System, analysing signal data and troubleshooting hardware-software integration faults.</li>
                    <li>Performed PLC I/O verification and signal validation, identifying anomalies and supporting corrective actions.</li>
                    <li>Conducted EMI/EMC testing and interpreted quantitative measurement data against applicable industry requirements.</li>
                    <li>Supported PCB, PLC and VME/universal-module activities, system integration, troubleshooting and technical documentation.</li>
                    <li>Maintained quality procedure records and documentation in an ISO-certified engineering environment.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Trainee */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Professional Trainee
              </h2>
              <div className="space-y-4">
                {/* MasterNext Academy */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-950">
                      AI & Full-Stack Development Trainee | MasterNext Academy
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-600">
                      Apr 2026 – Jul 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <li>Studied AI foundations, model types and prompt engineering patterns for reliable LLM outputs.</li>
                    <li>Built and deployed AI-powered web applications using Lovable and Bolt, progressing from rapid prototypes to functional applications.</li>
                    <li>Integrated AI APIs with web interfaces and applied reliability and safety techniques to improve output quality.</li>
                    <li>Developed practical skills in HTML, CSS, JavaScript, TypeScript, React and Node.js, with Git/GitHub and modern deployment workflows.</li>
                  </ul>
                  <div className="mt-2 pl-4 text-xs font-mono text-slate-600 space-y-0.5">
                    <span className="font-bold text-slate-900 block">Deployed Projects:</span>
                    <div>1. <a href="https://animatedmoviebyrakesh.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">animatedmoviebyrakesh.vercel.app</a> - (animatedmovie)</div>
                    <div>2. <a href="https://viteandreactbyrakesh.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">viteandreactbyrakesh.vercel.app</a> - (Anatomy of a Web)</div>
                    <div>3. <a href="https://elegantlightsbyrakesh.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">elegantlightsbyrakesh.vercel.app</a> - (elegantlights)</div>
                    <div>4. <a href="https://interiorsbyrakesh.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">interiorsbyrakesh.vercel.app</a> - (interiors)</div>
                    <div>5. <a href="https://lovable.dev/projects/74235e94-5873-46f9-901d-9f251630b0a6" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">lovable.dev meditation & wellness</a></div>
                    <div>6. <a href="https://lovable.dev/projects/f988ab45-984d-4f9d-9a19-d45dec0fa698" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">lovable.dev business data</a></div>
                    <div>7. <a href="https://lovable.dev/projects/9a9e6be4-239f-42f2-b396-fa8747308b2e" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">lovable.dev mind chatbot</a></div>
                    <div>8. <a href="https://ai.studio/apps/08df5265-902e-40ba-858f-6ae8a5250e1b" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-semibold">Google AI Studio (Moksha Yatra)</a></div>
                  </div>
                </div>

                {/* VLSI Guru */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-950">
                      Physical Design Engineer Trainee | VLSI Guru
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-600">
                      Jun 2024 – Mar 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <li>Worked through the ASIC Physical Design flow from RTL to GDSII, including floorplanning, power planning, placement, CTS, routing, timing closure and sign-off checks.</li>
                    <li>Used Static Timing Analysis concepts to analyse timing and support timing-closure activities.</li>
                    <li>Used TCL scripting to automate repetitive design tasks and improve workflow efficiency.</li>
                    <li>Developed practical familiarity with Cadence Innovus, Synopsys ICC2 and Synopsys PrimeTime.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Key Projects
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>Surveillance Car with Object Detection & Tracking | IoT / AI Project</span>
                    <span className="font-mono text-xs font-semibold text-slate-600">2023</span>
                  </div>
                  <p className="text-slate-700 mt-1 leading-relaxed">
                    Developed an autonomous surveillance vehicle integrating real-time object detection using OpenCV and Python with line tracking and obstacle avoidance; implemented computer-vision pipelines connecting AI/ML with sensor-driven hardware.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>CNTFET-Based Low-Power Ternary CAM | B.Tech Final Year Project</span>
                    <span className="font-mono text-xs font-semibold text-slate-600">2023–2024</span>
                  </div>
                  <p className="text-slate-700 mt-1 leading-relaxed">
                    Designed a low-power ternary content-addressable memory using Carbon Nanotube FET technology and conducted quantitative performance analysis.
                  </p>
                  <a
                    href="https://vignan.ac.in/aqardownload/abet/Design%20of%20a%20CNTFET%20based%20Low%20Power%20Ternary%20Content%20Addressable%20Memory.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-cyan-700 hover:underline font-semibold"
                  >
                    ABET/AQAR Publication Link: vignan.ac.in PDF
                  </a>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>Passport Verification Using RFID | Embedded Systems Project</span>
                    <span className="font-mono text-xs font-semibold text-slate-600">2022</span>
                  </div>
                  <p className="text-slate-700 mt-1 leading-relaxed">
                    Designed an RFID-based passport verification system with secure data handling and cryptographic data-integrity considerations.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <p><strong>VLSI / ASIC:</strong> ASIC Physical Design, RTL-to-GDSII, Floorplanning, Power Planning, Placement, Clock Tree Synthesis (CTS), Routing, Timing Closure, Static Timing Analysis (STA), Sign-off Checks</p>
                <p><strong>EDA Tools:</strong> Cadence Innovus, Synopsys ICC2, Synopsys PrimeTime</p>
                <p><strong>Programming / Scripting:</strong> Python, C++, Embedded C, TCL, JavaScript, TypeScript</p>
                <p><strong>AI / ML:</strong> Machine Learning, Prompt Engineering, AI API Integration, Computer Vision, OpenCV, LLM Reliability & Safety</p>
                <p><strong>Hardware / Embedded:</strong> PLC, RFID, IoT, EMI/EMC Testing, Signal Validation, PCB/System Testing</p>
                <p><strong>Software / Web:</strong> HTML, CSS, React (learning), Node.js (learning), REST APIs, Git, GitHub</p>
                <p><strong>Mathematics / Analysis:</strong> Probability Theory & Stochastic Processes, Statistics, Numerical Analysis, Signal Processing, Data Structures & Algorithms</p>
                <p><strong>Operating Systems:</strong> Linux, Windows</p>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950">
                      MSc Artificial Intelligence with Industrial Practice | University of Surrey
                    </h3>
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-600">
                    2026 – Present
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950">
                      B.Tech Electronics & Communication Engineering | Vignan Foundation Science & Technology Research University
                    </h3>
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-600">
                    2020 – 2024 | CGPA: 7.92/10 (First Class)
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950">
                      Diploma Electronics & Communication Engineering | Bapatla Engineering College
                    </h3>
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-600">
                    2017 – 2020 | CGPA: 8.78/10
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Professional Development */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Certifications & Professional Development
              </h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs leading-relaxed">
                <li><strong className="text-slate-900">Cisco CCNA Certification</strong> — Networking Fundamentals and Infrastructure</li>
                <li><strong className="text-slate-900">IEEE Certification</strong> — 5G Wireless Technology</li>
                <li><strong className="text-slate-900">NPTEL Certification</strong> — Joy of Python (Programming Fundamentals)</li>
                <li><strong className="text-slate-900">NPTEL Certification</strong> — Cloud Computing</li>
                <li><strong className="text-slate-900">Workshop</strong> — Ethical Hacking with Cyber Security (TECHNO WORKSHOP)</li>
                <li><strong className="text-slate-900">Workshop</strong> — Xilinx Software Technology (FPGA/EDA Tools)</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
