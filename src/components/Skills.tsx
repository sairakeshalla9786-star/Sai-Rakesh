import React from 'react';
import { Cpu, BrainCircuit, CodeXml, Wrench, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-violet-500" />;
      case 'CodeXml':
        return <CodeXml className="w-5 h-5 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            02 · Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Specialized Skills & Methodologies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Curated capabilities spanning silicon engineering, machine intelligence, and modern web software. Honest proficiencies without arbitrary percentage bars.
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,242,254,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {category.name}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed min-h-[32px]">
                  {category.description}
                </p>

                {/* Skill Items List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quiet bottom indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                <span>{category.skills.length} competencies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
