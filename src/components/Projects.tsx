import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Code, Sparkles, AlertCircle, Eye, X, CheckCircle2, FileText, Award, Calendar, ArrowUpDown } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { DocumentProofModal } from './DocumentProofModal';

interface ProjectsProps {
  onOpenDocumentProof?: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc'); // desc = Newest First, asc = Oldest First
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [proofProject, setProofProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory; count: number }[] = [
    { label: 'All Projects', value: 'All', count: PROJECTS_DATA.length },
    {
      label: 'Electronics & Hardware',
      value: 'Electronics',
      count: PROJECTS_DATA.filter((p) => p.category === 'Electronics').length,
    },
    {
      label: 'Full-Stack Web',
      value: 'Full-Stack',
      count: PROJECTS_DATA.filter((p) => p.category === 'Web' || p.isFullStack).length,
    },
    {
      label: 'AI & ML',
      value: 'AI',
      count: PROJECTS_DATA.filter((p) => p.category === 'AI').length,
    },
  ];

  // Filter and sort projects chronologically by year
  const processedProjects = useMemo(() => {
    let list = [...PROJECTS_DATA];

    if (activeCategory === 'Electronics') {
      list = list.filter((p) => p.category === 'Electronics');
    } else if (activeCategory === 'Full-Stack') {
      list = list.filter((p) => p.category === 'Web' || p.isFullStack);
    } else if (activeCategory === 'AI') {
      list = list.filter((p) => p.category === 'AI');
    }

    // Sort strictly based on date and year
    list.sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });

    return list;
  }, [activeCategory, sortOrder]);

  const handleProjectTitleClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    if (project.reportDetails || project.documentUrl) {
      setProofProject(project);
    } else {
      setSelectedProject(project);
    }
  };

  const handleDocumentClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setProofProject(project);
  };

  const handleDemoClick = (project: Project, e: React.MouseEvent) => {
    if (project.isDemoPlaceholder || project.demoUrl?.startsWith('#')) {
      e.preventDefault();
      if (project.reportDetails || project.documentUrl) {
        setProofProject(project);
      } else {
        setSelectedProject(project);
      }
    }
  };

  const handleCodeClick = (project: Project, e: React.MouseEvent) => {
    if (project.isGithubPlaceholder) {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
              05 · Comprehensive Chronological Archive
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              All Projects & Technical Evolution
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Every project ordered chronologically by date and academic year ({sortOrder === 'desc' ? '2026 down to 2021' : '2021 up to 2026'}). Spanning full-stack applications, accredited B.Tech electronics research, and artificial intelligence.
            </p>
          </div>

          {/* Chronological Sort Toggle & View Controls */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 transition-colors shadow-sm"
              title="Toggle date order"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-cyan-500" />
              <span>
                Date Order: <strong className="text-cyan-600 dark:text-cyan-400">{sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}</strong>
              </span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 mb-10 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.value
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700/60'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Chronological Project Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/70 border transition-all duration-300 overflow-hidden ${
                project.reportDetails || project.documentUrl
                  ? 'border-cyan-500/40 dark:border-cyan-500/30 hover:border-cyan-400 shadow-[0_4px_20px_rgba(0,242,254,0.08)]'
                  : 'border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-[0_8px_30px_rgba(0,242,254,0.12)]'
              }`}
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
                    
                    {/* Timestamp & Category Badge Overlay */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-mono text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-cyan-500/40 font-semibold">
                        {project.dateLabel}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded border border-slate-700">
                        {project.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 pt-5 pb-1 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                        {project.category}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] font-medium">
                        {project.isFullStack ? 'Full-Stack' : project.academicBadge ? 'B.Tech Research' : 'Software'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                      <Calendar className="w-3 h-3 text-cyan-500" />
                      <span>{project.dateLabel}</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Clickable Title that opens Document Proof or Overview */}
                  <h3
                    onClick={(e) => handleProjectTitleClick(project, e)}
                    className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer flex items-start justify-between gap-2"
                    title="Click project title to view verified proof / details"
                  >
                    <span>{project.title}</span>
                    {(project.reportDetails || project.documentUrl) && (
                      <FileText className="w-4 h-4 text-cyan-500 shrink-0 mt-1 opacity-80 group-hover:opacity-100" />
                    )}
                  </h3>

                  {project.academicBadge && (
                    <div className="text-[11px] font-mono text-violet-600 dark:text-violet-400 mt-1 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>{project.academicBadge}</span>
                    </div>
                  )}

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span className="text-slate-300 dark:text-slate-700 select-none">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                {(project.documentUrl || project.reportDetails) ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleDocumentClick(project, e)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-semibold rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Document Proof</span>
                    </button>

                    {project.documentUrl ? (
                      <a
                        href={project.documentUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                        title="Open Official Vignan University ABET PDF directly"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>ABET PDF</span>
                      </a>
                    ) : (
                      <button
                        onClick={(e) => handleDocumentClick(project, e)}
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    {project.isGithubPlaceholder ? (
                      <button
                        onClick={(e) => handleCodeClick(project, e)}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
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
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Code</span>
                      </a>
                    )}

                    {project.isDemoPlaceholder ? (
                      <button
                        onClick={(e) => handleDemoClick(project, e)}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono font-medium rounded-lg text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Overview</span>
                      </button>
                    ) : (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono font-medium rounded-lg text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-mono text-cyan-300 flex items-center justify-center sm:justify-start gap-2">
              <Github className="w-5 h-5 text-cyan-400" />
              <span>Explore All Repositories & Future Hardware Releases</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              All 14 projects, source code commits, HTML/CSS layout templates, JavaScript utilities, and upcoming hardware design repositories on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/sairakeshalla9786-star"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <span>More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Verified Academic Document Proof Modal */}
      <DocumentProofModal
        project={proofProject}
        onClose={() => setProofProject(null)}
      />

      {/* Standard Project Overview Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  {selectedProject.category} · {selectedProject.dateLabel}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {selectedProject.image && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {(selectedProject.isGithubPlaceholder || selectedProject.isDemoPlaceholder) && (
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5 font-mono">
                    <AlertCircle className="w-4 h-4" />
                    <span>TODO: Public Repository Publication in Progress</span>
                  </div>
                  <p>
                    This project is undergoing open-source staging or academic refinement. The verified code will be deployed to GitHub shortly.
                  </p>
                </div>
              )}

              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Architectural Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
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
                  {selectedProject.techStack.map((t) => (
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
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>
              <a
                href="https://github.com/sairakeshalla9786-star"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
