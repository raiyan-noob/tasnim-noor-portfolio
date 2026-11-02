"use client";

import { skillCategories, softwareTools, certifications } from "@/data/portfolioData";
import { 
  FiTarget, 
  FiBarChart2, 
  FiFeather, 
  FiUsers, 
  FiShield
} from "react-icons/fi";

const categoryIconMap = {
  FiTarget: FiTarget,
  FiBarChart2: FiBarChart2,
  FiFeather: FiFeather,
  FiUsers: FiUsers
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2">
            Competency Matrix
          </span>
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
            Skills, Business Toolkit &amp; Credentials
          </h2>
          <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 max-w-2xl">
            A balanced mix of quantitative data analysis, qualitative consumer psychology, visual presentation craftsmanship, and campus leadership capabilities.
          </p>
        </div>

        {/* 4 Skill Categories Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 text-left">
          {skillCategories.map((cat, idx) => {
            const IconComp = categoryIconMap[cat.icon] || FiTarget;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-base-content">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-3.5 sm:space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center justify-between text-xs font-medium text-base-content mb-1.5">
                        <span className="truncate pr-2">{skill.name}</span>
                        <span className="text-base-content/60 font-mono shrink-0">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-base-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Software & Analytical Tools Grid */}
        <div className="mb-12 sm:mb-20 text-left">
          <div className="mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content">
              Digital Software &amp; Analytical Suite
            </h3>
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              Proficient across everyday business modeling, survey analytics, and design workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3.5">
            {softwareTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-base-100 border border-base-content/10 shadow-sm flex flex-col justify-between hover:border-[var(--accent-border)] transition-all group"
              >
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-base-content/50 mb-1">
                    {tool.category}
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-base-content group-hover:text-[var(--accent-solid)] transition-colors">
                    {tool.name}
                  </div>
                </div>
                <div className="mt-2.5 sm:mt-3 inline-block">
                  <span className="badge badge-xs badge-ghost text-[9px] sm:text-[10px] font-medium text-[var(--accent-solid)]">
                    {tool.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Professional Accreditations */}
        <div className="text-left">
          <div className="mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content flex items-center gap-2">
              <FiShield className="text-[var(--accent-solid)]" />
              <span>Certifications &amp; Upskilling</span>
            </h3>
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              Continuous learning outside university curriculum through recognized global programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-base-content/10 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="badge badge-sm badge-outline text-[9px] sm:text-[10px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-base-content/50">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-xs sm:text-sm text-base-content mb-1">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] sm:text-xs font-semibold text-base-content/70 mb-1.5 sm:mb-2">
                    {cert.issuer}
                  </div>
                  <p className="text-[11px] sm:text-xs text-base-content/60 leading-relaxed">
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
}
