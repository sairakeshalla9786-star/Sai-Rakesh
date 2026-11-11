import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { EXPERIENCE_EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'experience':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Experience</span>
          </span>
        );
      case 'education':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-600 dark:text-violet-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Degree</span>
          </span>
        );
      case 'training':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>Advanced Training</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            04 · Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Education Journey
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            A chronological timeline of hands-on electronics defense engineering, university scholarship, and artificial intelligence research.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {EXPERIENCE_EDUCATION.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node on Left Line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(0,242,254,0.4)]" />

              {/* Timestamp label on desktop (offset to left) */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 sm:w-28 sm:text-right mb-2 sm:mb-0">
                {item.period}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  {getTypeBadge(item.type)}
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    {item.scoreOrRole && (
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                        · {item.scoreOrRole}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  {item.organization}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Associated Skills (Zero-Pill: Clean unboxed metadata) */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider">
                    Core Focus:
                  </span>
                  {item.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      {sIdx < item.skills.length - 1 && (
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Professional Development Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800/80">
          <div className="mb-8">
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-1">
              Credentials
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Certifications & Professional Development
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Verified certifications from Cisco, IEEE, NPTEL/IIT, and specialized engineering workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
