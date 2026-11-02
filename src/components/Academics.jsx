"use client";

import { academicJourney } from "@/data/portfolioData";
import { 
  FiBookOpen, 
  FiAward, 
  FiCheckCircle, 
  FiClock, 
  FiLayers
} from "react-icons/fi";

export default function Academics() {
  return (
    <section id="academics" className="py-16 sm:py-24 bg-base-200/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2">
            Academic Excellence
          </span>
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
            Academic Milestones &amp; Rigor
          </h2>
          <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 max-w-2xl">
            A comprehensive overview of coursework, academic honors, and analytical business foundations developed across 6 completed semesters at BRAC Business School.
          </p>
        </div>

        {/* Institution Highlight Banner */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-xl mb-10 sm:mb-14 text-left relative overflow-hidden">
          <div className="ambient-glow w-48 h-48 -right-10 -top-10 opacity-20" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[var(--accent-from)] to-[var(--accent-to)] text-white flex items-center justify-center shrink-0 shadow-lg">
                <FiAward className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-solid)] text-[10px] sm:text-xs font-semibold mb-1">
                  {academicJourney.currentMilestone}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content">
                  {academicJourney.degree}
                </h3>
                <p className="text-xs sm:text-sm text-base-content/70 mt-0.5">
                  {academicJourney.school} • {academicJourney.institution} ({academicJourney.duration})
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-base-100 border border-base-content/10">
                <div className="text-[10px] sm:text-[11px] text-base-content/60 font-medium">Cumulative GPA</div>
                <div className="text-base sm:text-lg font-bold text-[var(--accent-solid)] font-display">{academicJourney.cgpa}</div>
              </div>
              {academicJourney.honors.map((honor, idx) => (
                <div key={idx} className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-base-100 border border-base-content/10 flex items-center gap-2">
                  <FiAward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-base-content">{honor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Semester Progression Roadmap */}
        <div className="mb-12 sm:mb-16">
          <div className="text-left mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-lg sm:text-xl text-base-content flex items-center gap-2">
              <FiLayers className="text-[var(--accent-solid)]" />
              <span>Curriculum Roadmap &amp; Cumulative Progression</span>
            </h3>
            <p className="text-xs text-base-content/60 mt-1">
              Demonstrating the step-by-step transition from foundational principles to advanced strategic analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {academicJourney.semesterMilestones.map((milestone, idx) => {
              const isCompleted = idx < 3;
              return (
                <div
                  key={idx}
                  className={`p-5 sm:p-6 rounded-2xl transition-all relative flex flex-col justify-between ${
                    isCompleted
                      ? "glass-card border-t-4 border-t-[var(--accent-solid)]"
                      : "bg-base-200/40 border border-dashed border-base-content/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        isCompleted ? "bg-[var(--accent-subtle)] text-[var(--accent-solid)]" : "bg-base-300 text-base-content/50"
                      }`}>
                        {milestone.badge}
                      </span>
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-500">
                          <FiCheckCircle className="w-3.5 h-3.5" />
                          <span>Completed</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-base-content/50">
                          <FiClock className="w-3.5 h-3.5" />
                          <span>Upcoming</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-xs sm:text-base text-base-content mb-1.5 sm:mb-2 leading-snug">
                      {milestone.semester}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-base-content/70 mb-3 leading-relaxed">
                      {milestone.focus}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-base-content/10 text-[10px] sm:text-[11px] text-[var(--accent-solid)] font-medium">
                    ✨ {milestone.highlight}
                  </div>
                </div>
              );
            })}
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
              High academic standing achieved across core marketing, HRM, finance, and analytics modules.
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
