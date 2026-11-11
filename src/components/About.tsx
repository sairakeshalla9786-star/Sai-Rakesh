import React from 'react';
import { Cpu, Brain, Rocket, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            01 · Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            At the Confluence of Hardware & Machine Intelligence
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            From testing radar defense electronics to architecting intelligent web agents and simulating VLSI layouts.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story (7 columns) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am an Electronics & Communication Engineering graduate from{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Vignan University
              </strong>{' '}
              (B.Tech, CGPA 7.92), driven by a dual curiosity: how electrons propagate through microscopic silicon gates, and how algorithmic neural networks learn and deduce meaning from data.
            </p>
            <p>
              My engineering discipline was forged during{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                15 months of intensive apprenticeship at ECIL
              </strong>{' '}
              (Electronics Corporation of India Limited). There, I worked directly with defense-grade electronic assemblies, inspecting multi-layer PCBs, testing high-frequency radar modules, and verifying satellite communication subsystems against strict aerospace standards.
            </p>
            <p>
              To expand beyond board diagnostics, I completed rigorous industry training with{' '}
              <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">
                VLSI Guru
              </strong>{' '}
              (ASIC Physical Design from RTL-to-GDSII, Cadence Innovus, Synopsys ICC2, and Static Timing Analysis) and{' '}
              <strong className="text-violet-600 dark:text-violet-400 font-semibold">
                MasterNext Academy
              </strong>{' '}
              (AI foundations, LLM prompt engineering, and modern full-stack web applications).
            </p>
            <p>
              Currently, I am pursuing my{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                MSc in Artificial Intelligence with Industrial Practice
              </strong>{' '}
              at the{' '}
              <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">
                University of Surrey
              </strong>
              . My overarching career goal is to work at the intersection of hardware engineering, VLSI chip layout, and AI software—building tomorrow’s intelligent edge systems and compute accelerators.
            </p>

            {/* Core Pillars Bullet Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                <span className="text-sm">
                  <strong className="text-slate-900 dark:text-white">ECE Foundation:</strong> Circuit theory, PCB layout & RF radar testing
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-500 mt-1 shrink-0" />
                <span className="text-sm">
                  <strong className="text-slate-900 dark:text-white">VLSI Physical Design:</strong> Floorplanning, CTS & Static Timing Analysis
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                <span className="text-sm">
                  <strong className="text-slate-900 dark:text-white">AI Research:</strong> MSc AI studies, NLP sentiment models & agent design
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-500 mt-1 shrink-0" />
                <span className="text-sm">
                  <strong className="text-slate-900 dark:text-white">Full-Stack Web:</strong> React, Vite, Firebase & interactive UI
                </span>
              </div>
            </div>
          </div>

          {/* Key Milestone Cards (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            {/* ECIL Card */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    ECIL Apprentice Engineer
                  </h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    15 Months · Strategic Electronics
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Hands-on diagnosis of multi-layer PCB assemblies, radar transmitter/receiver test benches, and satellite telemetry calibration.
              </p>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    B.Tech ECE · Vignan University
                  </h3>
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    CGPA: 7.92 / 10 · Class Representative
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strong academic record in core electronics, microprocessors, signals & systems, and communication engineering.
              </p>
            </div>

            {/* Future Focus */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    MSc Artificial Intelligence
                  </h3>
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    University of Surrey · 2026 – Present
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                MSc with Industrial Practice specializing in machine learning algorithms, computer vision pipelines, neural architectures, and hardware acceleration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
