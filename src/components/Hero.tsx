import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail, FileText, ChevronRight, Sparkles, Cpu, Layers, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroChipImage from '../assets/images/ai_hardware_processor.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = PERSONAL_INFO.typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullRole.length) {
          setDisplayText(currentFullRole.slice(0, displayText.length + 1));
        } else {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Circuit Grid & Glow Nodes */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

        {/* Circuit Pattern SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35 dark:opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit-grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Circuit lines */}
              <path
                d="M 10 10 L 40 10 L 50 20 L 90 20 M 10 90 L 30 90 L 45 75 L 85 75 M 50 20 L 50 60 L 60 70 L 90 70 M 20 40 L 20 60 L 35 60"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-slate-300 dark:text-slate-800"
              />
              {/* Circuit Junction Nodes */}
              <circle cx="10" cy="10" r="2" className="text-cyan-500/60" fill="currentColor" />
              <circle cx="90" cy="20" r="2.5" className="text-violet-500/60" fill="currentColor" />
              <circle cx="85" cy="75" r="2" className="text-cyan-400/60" fill="currentColor" />
              <circle cx="35" cy="60" r="2" className="text-violet-400/60" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero (Left: Typographic hierarchy; Right: Hardware/AI visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Tagline / Subtitle */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F2FE]" />
              <span className="font-semibold tracking-wide">
                Where Electronics meets Artificial Intelligence
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                Alla Sai Rakesh
              </h1>
              {/* Typing Animation Subheading */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono text-slate-600 dark:text-slate-300">
                  I am a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500 font-bold">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-cyan-400 font-normal">|</span>
                </span>
              </div>
            </div>

            {/* Lead Bio Description */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl text-balance">
              Electronics & Communication Engineer with ECIL apprentice experience and practical training in ASIC Physical Design (RTL-to-GDSII), AI and Full-Stack Development. Currently pursuing an MSc in Artificial Intelligence with Industrial Practice at the University of Surrey.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 dark:bg-cyan-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-cyan-400 transition-all shadow-sm hover:shadow-[0_0_16px_rgba(0,242,254,0.3)] whitespace-nowrap"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Icon Links */}
            <div className="pt-2 flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect
              </span>
              <div className="h-3 w-px bg-slate-300 dark:bg-slate-800" />
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-cyan-500 transition-colors"
              >
                <span className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-cyan-500">in</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp (+44 7442752965)"
                title="WhatsApp: +44 7442752965"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-emerald-500 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
              </a>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden lg:inline">
                {PERSONAL_INFO.address}
              </span>
            </div>
          </div>

          {/* Right Column: 5 cols — Hardware & Neural Core Visual */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl p-1 bg-gradient-to-br from-cyan-500/20 via-slate-800/40 to-violet-500/20 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/9]">
                <img
                  src={heroChipImage}
                  alt="Semiconductor Microchip & AI neural processor on circuit board with robotic arms in automated manufacturing laboratory"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Subtle bottom contrast scrim for metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Hardware + AI Metadata */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60 shadow-sm">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px] font-medium tracking-tight">Silicon & AI Accelerator</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-violet-300 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60 text-[11px] shadow-sm">
                    <Layers className="w-3 h-3" />
                    <span>ECE · AI · VLSI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip below split (Rule 2.B) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm">
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="p-3">
              <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-cyan-600 dark:text-cyan-400/80 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
