import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Database, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { FULLSTACK_WEB_PROJECTS } from '../data/projects';
import { Project } from '../types';

interface FullStackProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FullStackProjects: React.FC<FullStackProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="fullstack" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
              03 · Software Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Full-Stack Web & Software Engineering
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Reactive frontend architectures, cloud databases, full-stack state management, and real-time platforms built with React, TypeScript, Vite, and Firebase.
            </p>
          </div>

          <a
            href="https://github.com/sairakeshalla9786-star"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm whitespace-nowrap self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repositories ({FULLSTACK_WEB_PROJECTS.length})</span>
          </a>
        </div>

        {/* Featured Full-Stack Grid (Top Spotlight Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FULLSTACK_WEB_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,242,254,0.12)] overflow-hidden"
            >
              <div>
                {/* Visual if available */}
                {project.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-cyan-500/30">
                      {project.dateLabel}
                    </div>
                  </div>
                ) : (
                  <div className="px-6 pt-5 pb-1 flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />
                      <span>{project.isFullStack ? 'Full-Stack Application' : 'Web Application'}</span>
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {project.dateLabel}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span className="text-slate-300 dark:text-slate-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                {project.isGithubPlaceholder ? (
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Code</span>
                    <span className="text-[10px] text-amber-500 font-bold">(TODO)</span>
                  </button>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                )}

                {project.demoUrl && !project.isDemoPlaceholder ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-medium rounded-lg text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-medium rounded-lg text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
                  >
                    <span>Overview</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
