"use client";

import { personalInfo, heroStats } from "@/data/portfolioData";
import { 
  FiFileText, 
  FiArrowRight, 
  FiLinkedin, 
  FiMail, 
  FiAward, 
  FiTrendingUp, 
  FiUsers, 
  FiBookOpen, 
  FiBriefcase,
  FiZap,
  FiCheckCircle,
  FiExternalLink
} from "react-icons/fi";

const iconMap = {
  FiBookOpen: FiBookOpen,
  FiAward: FiAward,
  FiTrendingUp: FiTrendingUp,
  FiUsers: FiUsers,
  FiBriefcase: FiBriefcase
};

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-glow w-72 h-72 sm:w-[500px] sm:h-[500px] -top-32 -left-20" />
      <div className="ambient-glow w-64 h-64 sm:w-[450px] sm:h-[450px] top-60 -right-20 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Recruiter Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-[11px] sm:text-xs font-semibold text-[var(--accent-solid)] mb-5 sm:mb-6 shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-from)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-solid)]"></span>
              </span>
              <span className="truncate">{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.18] sm:leading-[1.15] text-base-content mb-5 sm:mb-6">
              Turning consumer insights into{" "}
              <span className="gradient-text font-editorial italic font-normal">
                market-winning
              </span>{" "}
              brand strategies.
            </h1>

            {/* Subtitle / Positioning Statement */}
            <p className="text-sm sm:text-base md:text-lg text-base-content/80 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Hello! I am <strong className="text-base-content font-semibold">{personalInfo.fullName}</strong> ({personalInfo.nickname}) — a 
              results-oriented 6th-semester BBA undergraduate at <span className="text-[var(--accent-solid)] font-semibold">{personalInfo.businessSchool}</span>. 
              Dual-specializing in <strong className="text-base-content font-semibold">{personalInfo.major}</strong> &amp; <strong className="text-base-content font-semibold">{personalInfo.minorOrSecondConcentration}</strong>, 
              I blend consumer psychology with quantitative modeling and energetic youth leadership.
            </p>

            {/* Primary Action Buttons - responsive flex-col on mobile, row on tablet/desktop */}
            <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] via-[var(--accent-via)] to-[var(--accent-to)] text-white hover:opacity-95 shadow-lg shadow-[var(--accent-glow)] transition-all transform hover:-translate-y-0.5 text-center"
              >
                <span>Explore Case Studies</span>
                <FiArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-base-200 hover:bg-base-300 text-base-content border border-base-content/10 transition-all transform hover:-translate-y-0.5 text-center"
              >
                <FiFileText className="w-4 h-4 text-[var(--accent-solid)] shrink-0" />
                <span>Interactive Resume</span>
              </button>

              <a
                href="#opportunity-matcher"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--accent-subtle)] text-[var(--accent-solid)] border border-[var(--accent-border)] hover:bg-[var(--accent-from)] hover:text-white transition-all transform hover:-translate-y-0.5 text-center"
              >
                <FiZap className="w-4 h-4 shrink-0" />
                <span>Recruiter Matcher</span>
              </a>
            </div>

            {/* Quick Social & Direct Proof Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-base-content/70">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-base-content/50">
                Direct Connect:
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors font-medium"
              >
                <FiLinkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
                <FiExternalLink className="w-3 h-3 text-base-content/40 shrink-0" />
              </a>
              <span className="text-base-content/20 hidden xs:inline">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[var(--accent-solid)] transition-colors font-medium truncate max-w-[200px] xs:max-w-none"
              >
                <FiMail className="w-4 h-4 shrink-0" />
                <span className="truncate">Email Tasnim</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Persona & Interactive Profile Badge */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Profile Card Container */}
              <div className="gradient-border-box glass-card p-5 sm:p-8 rounded-3xl relative shadow-2xl">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-base-content/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-base-content/70">
                      Recruiter Profile Snapshot
                    </span>
                  </div>
                  <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-mono">
                    BRACU • 2026
                  </span>
                </div>

                {/* Avatar / Monogram Visual Showcase */}
                <div className="my-5 sm:my-6 flex flex-col items-center text-center">
                  <div className="relative mb-4 group">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-[var(--accent-from)] via-[var(--accent-via)] to-[var(--accent-to)] p-[2.5px] sm:p-[3px] shadow-xl shadow-[var(--accent-glow)] transform transition-transform group-hover:scale-105">
                      <div className="w-full h-full rounded-[13px] bg-base-100 flex flex-col items-center justify-center p-2 text-center">
                        <span className="font-editorial text-3xl sm:text-5xl font-bold gradient-text">
                          TN
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-base-content/50 mt-1">
                          Nabila
                        </span>
                      </div>
                    </div>
                    {/* Verified Pill */}
                    <div className="absolute -bottom-2 bg-base-100 border border-[var(--accent-border)] text-[var(--accent-solid)] text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
                      <FiCheckCircle className="w-3 h-3 shrink-0" />
                      <span>6 Semesters Complete</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--accent-solid)] font-medium mt-1">
                    {personalInfo.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-base-content/60 mt-0.5">
                    BRAC Business School • Dhaka, Bangladesh
                  </p>
                </div>

                {/* Micro Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-base-200/60 border border-base-content/5 text-xs">
                    <span className="text-base-content/70 font-medium">Academic Track:</span>
                    <span className="font-semibold text-base-content">BBA (Marketing &amp; HRM)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-base-200/60 border border-base-content/5 text-xs">
                    <span className="text-base-content/70 font-medium">Cumulative GPA:</span>
                    <span className="font-bold text-[var(--accent-solid)]">3.82 / 4.00</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-base-200/60 border border-base-content/5 text-xs">
                    <span className="text-base-content/70 font-medium">Club Executive:</span>
                    <span className="font-semibold text-base-content">BUBaC &amp; BUMA</span>
                  </div>
                </div>

                {/* Quick Action in Card */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-base-content/10 flex items-center justify-between gap-2">
                  <a
                    href="#contact"
                    className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl bg-base-200 hover:bg-[var(--accent-subtle)] hover:text-[var(--accent-solid)] text-xs font-semibold text-center transition-all"
                  >
                    Direct Inquiry
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 sm:py-2.5 px-3 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <FiLinkedin className="w-3.5 h-3.5 shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </div>

              </div>

      

            </div>
          </div>

        </div>

        {/* Bottom Hero Stats Strip */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-base-content/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {heroStats.map((stat, idx) => {
              const IconComp = iconMap[stat.icon] || FiBriefcase;
              return (
                <div
                  key={idx}
                  className={`glass-card p-3 sm:p-4 rounded-2xl flex flex-col justify-between text-left ${
                    idx === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs text-base-content/60 font-medium">
                      {stat.label}
                    </span>
                    <IconComp className="w-4 h-4 text-[var(--accent-solid)] shrink-0" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-base-content tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-base-content/50 truncate mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
