import React from 'react';
import { X, ExternalLink, Printer, Award, FileText, CheckCircle2, Cpu, Building2, User, Calendar, BookOpen, Layers } from 'lucide-react';
import { Project } from '../types';

interface DocumentProofModalProps {
  project: Project | null;
  onClose: () => void;
}

export const DocumentProofModal: React.FC<DocumentProofModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const report = project.reportDetails;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-200 dark:border-slate-850 max-h-[92vh]">
        
        {/* Header Toolbar (Controls & Verified Status) */}
        <div className="no-print px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  Verified Academic Document Proof
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  NAAC A+ / ABET Accredited
                </span>
              </div>
              <div className="text-sm font-bold text-white truncate max-w-md sm:max-w-xl">
                {project.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Original PDF</span>
              </a>
            )}

            <button
              onClick={handlePrint}
              title="Print document report"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              aria-label="Close document modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200">
          
          {/* Institutional Header Banner */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                <Building2 className="w-4 h-4" />
                <span>{report?.institution || project.academicInstitution || "Vignan's Foundation for Science, Technology & Research"}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                {report?.reportTitle || project.title}
              </h2>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {report?.reportType || project.academicBadge || 'Department of Electronics & Communication Engineering'}
              </div>
            </div>

            {project.documentUrl && (
              <div className="sm:self-center">
                <a
                  href={project.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md whitespace-nowrap"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Official University PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Metadata Credentials Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <User className="w-3.5 h-3.5 text-cyan-500" />
                <span>Candidate / Reg. No</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                A. Sai Rakesh
              </div>
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                {report?.regNo || project.regNo || 'Regd: 211LA05032'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <Award className="w-3.5 h-3.5 text-violet-500" />
                <span>Faculty Guidance</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {report?.guide || project.projectGuide || 'Dr. K. Venkata Kishore, Ph.D'}
              </div>
              <div className="text-xs font-mono text-slate-500">
                Department of ECE
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>Academic Period</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {report?.period || project.academicBadge || 'B.Tech ECE Curriculum'}
              </div>
              <div className="text-xs font-mono text-slate-500">
                NAAC “A+” Grade
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Technical Domain</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {project.category} Engineering
              </div>
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                Hardware & RF / VLSI
              </div>
            </div>
          </div>

          {/* Abstract Section */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Project Abstract & Theoretical Framework</span>
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {report?.abstractText || project.longDescription || project.description}
            </p>
          </div>

          {/* Key Design Objectives */}
          {report?.objectives && report.objectives.length > 0 && (
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Engineering Objectives & Design Methodology</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {report.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200 dark:border-cyan-800/60 font-semibold">
                      {i + 1}
                    </span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Calculated Engineering Parameters & Specifications Table */}
          {report?.keyParameters && report.keyParameters.length > 0 && (
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-violet-500" />
                  <span>Design Parameters & Physical Specifications</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Experimental & Simulated Benchmarks
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[11px]">
                      <th className="py-2.5 px-3">Design Parameter / Circuit Variable</th>
                      <th className="py-2.5 px-3">Specification / Formula Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {report.keyParameters.map((param, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                        <td className="py-2.5 px-3 font-semibold text-slate-800 dark:text-slate-200">
                          {param.label}
                        </td>
                        <td className="py-2.5 px-3 text-cyan-600 dark:text-cyan-400 font-medium">
                          {param.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Software Tools & Hardware Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Software Tools & EDA Suites
              </h3>
              <div className="flex flex-wrap gap-2">
                {(report?.softwareHardware || project.techStack).map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Experimental Results & Verification Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {report?.resultsSummary || 'Experimental outputs validated performance metrics within targeted error bounds, confirming hardware feasibility and analytical correctness.'}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="no-print p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-500">
            Document Reference: <strong className="text-slate-700 dark:text-slate-300">{report?.regNo || 'Alla Sai Rakesh (211LA05032)'}</strong> · Vignan University ECE
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open PDF Document</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
