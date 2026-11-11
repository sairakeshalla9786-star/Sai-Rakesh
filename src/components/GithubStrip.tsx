import React from 'react';
import { GitBranch, GitCommit, GitFork, Star, Github, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GithubStrip: React.FC = () => {
  return (
    <section className="py-8 bg-slate-900/40 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Identity & Repo count */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-cyan-400">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Open Source Activity
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  @sairakeshalla9786-star
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Public Repositories & Code Commits
              </h3>
            </div>
          </div>

          {/* Middle: Live Stats */}
          <div className="flex items-center gap-6 sm:gap-8 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-500" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white tabular-nums">9+</span>
                <span className="text-slate-500 ml-1">Repos</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-violet-500" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Active</span>
                <span className="text-slate-500 ml-1">Pushes</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Main</span>
                <span className="text-slate-500 ml-1">Branches</span>
              </div>
            </div>
          </div>

          {/* Right: Direct Profile Link */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Visit @sairakeshalla9786-star</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
