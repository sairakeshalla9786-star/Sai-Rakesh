import React from 'react';
import { Users, Briefcase, CalendarCheck, Check } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'class-representative':
        return <Users className="w-5 h-5 text-cyan-500" />;
      case 'training-placement-volunteer':
        return <Briefcase className="w-5 h-5 text-violet-500" />;
      case 'college-event-volunteering':
        return <CalendarCheck className="w-5 h-5 text-amber-500" />;
      default:
        return <Users className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            05 · Leadership & Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Achievements & Campus Leadership
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Active roles coordinating academic cohorts, corporate campus recruitments, and technical symposiums.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
                    {getIcon(item.id)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {item.role}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                  {item.scope}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Outcomes:
                  </span>
                  {item.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
