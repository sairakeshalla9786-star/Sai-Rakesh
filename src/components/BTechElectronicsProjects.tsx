import React from 'react';
import { Award, FileText, ExternalLink, Cpu, CheckCircle2, Building2, Calendar, Radio } from 'lucide-react';
import { BTECH_ELECTRONICS_PROJECTS } from '../data/projects';
import { Project } from '../types';

interface BTechElectronicsProjectsProps {
  onOpenDocumentProof: (project: Project) => void;
}

export const BTechElectronicsProjects: React.FC<BTechElectronicsProjectsProps> = ({
  onOpenDocumentProof,
}) => {
  return (
    <section id="electronics" className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b12]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
              04 · Core Hardware & VLSI Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              B.Tech Electronics & Hardware Research
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Official university engineering projects, peer-certified research reports, and RF microwave design suites conducted under Department of ECE faculty at Vignan University and industrial apprenticeship at ECIL.
            </p>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 self-start md:self-auto shadow-sm">
            <Building2 className="w-4 h-4 text-cyan-500" />
            <span>Vignan University (NAAC A+) · ECE Department</span>
          </div>
        </div>

        {/* Highlighted B.Tech Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BTECH_ELECTRONICS_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/80 border border-cyan-500/30 dark:border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 p-6 shadow-sm hover:shadow-[0_12px_36px_rgba(0,242,254,0.14)]"
            >
              <div>
                {/* Year & Badge Header */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{project.academicBadge || 'B.Tech Project'}</span>
                  </span>
                  <span className="text-slate-400 font-semibold tabular-nums">
                    {project.dateLabel}
                  </span>
                </div>

                {/* Project Title (Clickable) */}
                <h3
                  onClick={() => onOpenDocumentProof(project)}
                  className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  title="Click to view verified document report"
                >
                  {project.title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Reg No: 211LA05032</span>
                  <span>·</span>
                  <span className="truncate">{project.projectGuide || 'Vignan ECE'}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
                <button
                  onClick={() => onOpenDocumentProof(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono font-semibold rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Verified Document Proof</span>
                </button>

                {project.documentUrl && (
                  <a
                    href={project.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Official Vignan ABET PDF</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Electronics & Apprenticeship Row (ECIL & VLSI Training) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {BTECH_ELECTRONICS_PROJECTS.slice(3).map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-violet-600 dark:text-violet-400 font-medium">
                    {project.academicBadge || 'Engineering Research'}
                  </span>
                  <span className="text-slate-400 tabular-nums">
                    {project.dateLabel}
                  </span>
                </div>
                <h3
                  onClick={() => onOpenDocumentProof(project)}
                  className="text-base font-bold text-slate-900 dark:text-white cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-xs font-mono text-slate-500">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-slate-700 dark:text-slate-300">
                      {tech} ·
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => onOpenDocumentProof(project)}
                  className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Technical Overview & Specs</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
