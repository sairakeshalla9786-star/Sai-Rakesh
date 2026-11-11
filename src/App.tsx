import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FullStackProjects } from './components/FullStackProjects';
import { BTechElectronicsProjects } from './components/BTechElectronicsProjects';
import { Projects } from './components/Projects';
import { GithubStrip } from './components/GithubStrip';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Achievements } from './components/Achievements';
import { LearningRoadmap } from './components/LearningRoadmap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DocumentProofModal } from './components/DocumentProofModal';
import { Project } from './types';
import { X, CheckCircle2, Github, AlertCircle } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [proofProject, setProofProject] = useState<Project | null>(null);
  const [overviewProject, setOverviewProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    if (project.reportDetails || project.documentUrl) {
      setProofProject(project);
    } else {
      setOverviewProject(project);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Sticky 3-Zone Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* Open Source / GitHub Activity Strip */}
          <GithubStrip />

          {/* 2. Honest Student & Engineering Bio */}
          <About />

          {/* 3. Grouped Technical Skills */}
          <Skills />

          {/* 4. Dedicated Full-Stack Web & Software Engineering Section */}
          <FullStackProjects onSelectProject={handleSelectProject} />

          {/* 5. Dedicated B.Tech Electronics & Hardware Research Section (with Document Proofs) */}
          <BTechElectronicsProjects onOpenDocumentProof={(p) => setProofProject(p)} />

          {/* 6. Comprehensive Archive: ALL Projects Ordered Chronologically by Year & Date */}
          <Projects onOpenDocumentProof={(p) => setProofProject(p)} />

          {/* 7. Experience & Education Timeline */}
          <ExperienceEducation />

          {/* 8. Achievements & Leadership */}
          <Achievements />

          {/* 9. Continuous Evolution / Learning Roadmap */}
          <LearningRoadmap />

          {/* 10. Contact Form & Details */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Verified Academic Document Proof Modal */}
        <DocumentProofModal
          project={proofProject}
          onClose={() => setProofProject(null)}
        />

        {/* Overview Project Modal */}
        {overviewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {overviewProject.category} · {overviewProject.dateLabel}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {overviewProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setOverviewProject(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                {overviewProject.image && (
                  <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <img
                      src={overviewProject.image}
                      alt={overviewProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {overviewProject.longDescription || overviewProject.description}
                </p>

                {(overviewProject.isGithubPlaceholder || overviewProject.isDemoPlaceholder) && (
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300 space-y-1">
                    <div className="font-semibold flex items-center gap-1.5 font-mono">
                      <AlertCircle className="w-4 h-4" />
                      <span>TODO: Public Repository Publication in Progress</span>
                    </div>
                    <p>
                      This application is undergoing final packaging and staging before public deployment to GitHub.
                    </p>
                  </div>
                )}

                {overviewProject.highlights && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Architectural Highlights
                    </h4>
                    <ul className="space-y-2">
                      {overviewProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {overviewProject.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setOverviewProject(null)}
                  className="px-4 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <a
                  href={overviewProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
