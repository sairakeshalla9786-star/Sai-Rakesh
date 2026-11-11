import React from 'react';
import { Compass, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { ROADMAP_ITEMS } from '../data/portfolioData';

export const LearningRoadmap: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            06 · Continuous Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Currently Learning & Roadmap
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Active daily study and deliberate technical practice across core computer science, chip physical design, and modern software engineering.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.topic}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Current Focus:
                  </div>
                  {item.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span>Curriculum Completion</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
