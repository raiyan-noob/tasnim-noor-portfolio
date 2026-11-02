"use client";

import { academicJourney } from "@/data/portfolioData";
import { 
  FiBookOpen, 
  FiAward, 
  FiCheckCircle, 
  FiClock, 
  FiLayers,
  FiStar
} from "react-icons/fi";

export default function Academics() {
  return (
    <section id="academics" className="py-16 sm:py-24 bg-base-200/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2">
            Academic Background
          </span>
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
            Education &amp; Academic Rigor
          </h2>
        
        </div>

        {/* Institutions Grid: BRAC University + Viqarunnisa Noon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16 text-left">
          
          {/* Main: BRAC University (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="ambient-glow w-48 h-48 -right-10 -top-10 opacity-20" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[var(--accent-from)] to-[var(--accent-to)] text-white flex items-center justify-center shrink-0 shadow-lg">
                  <FiAward className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content">
                    {academicJourney.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-base-content/70 mt-0.5">
                    Major: <strong className="text-[var(--accent-solid)] font-semibold">{academicJourney.major}</strong> • {academicJourney.school}
                  </p>
                  <p className="text-[11px] sm:text-xs text-base-content/50 mt-0.5">
                    {academicJourney.institution} ({academicJourney.duration})
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed mb-4">
                Focusing on corporate financial management, capital budgeting, investment valuation, and statistical decision analysis, combined with active student club leadership across campus.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3 border-t border-base-content/10 relative z-10">
              <div className="px-3 py-1.5 rounded-xl bg-base-100 border border-base-content/10 text-xs font-semibold text-base-content">
                6 Semesters Completed
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-xs font-bold text-[var(--accent-solid)]">
                Finance Concentration
              </div>
            </div>
          </div>

          {/* Secondary: Viqarunnisa Noon School and College (5 cols) */}
          <div className="lg:col-span-5 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                  Prestigious Alma Mater
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-base-content mb-1">
                Viqarunnisa Noon School &amp; College
              </h3>
              <div className="text-xs text-base-content/60 mb-4">
                Dhaka, Bangladesh
              </div>

              <div className="space-y-3">
                {academicJourney.previousEducation.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-base-100/80 border border-base-content/5">
                    <div className="flex items-center gap-2 text-xs font-bold text-base-content">
                      <FiStar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{edu.credential}</span>
                    </div>
                    <div className="text-[11px] text-base-content/65 mt-1 leading-relaxed">
                      {edu.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-base-content/10 text-[11px] text-base-content/60">
              Recognized for academic excellence and leadership discipline.
            </div>
          </div>

        </div>

        

        {/* Notable Coursework Grid */}
        <div>
          <div className="text-left mb-4 sm:mb-6">
            <h3 className="font-display font-bold text-base sm:text-lg text-base-content flex items-center gap-2">
              <FiBookOpen className="text-[var(--accent-solid)]" />
              <span>Key Completed Coursework</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-base-content/60 mt-0.5">
              Strong performance across finance, accounting, economics, quantitative statistics, and venture development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-left">
            {academicJourney.notableCourses.map((course, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 rounded-xl bg-base-100 border border-base-content/10 flex items-center justify-between shadow-sm hover:border-[var(--accent-border)] transition-colors"
              >
                <div className="min-w-0 pr-2">
                  <div className="font-semibold text-xs text-base-content truncate">
                    {course.name}
                  </div>
                  <div className="text-[10px] font-mono text-base-content/50 mt-0.5">
                    {course.code}
                  </div>
                </div>
                <div className="badge badge-sm badge-ghost font-bold text-emerald-500 text-xs shrink-0">
                  {course.grade}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
