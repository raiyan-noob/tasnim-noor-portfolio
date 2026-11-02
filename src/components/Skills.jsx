"use client";

import { skillCategories, softwareTools } from "@/data/portfolioData";
import { 
  FiTarget, 
  FiPieChart, 
  FiFeather, 
  FiUsers, 
  FiCheckCircle,
  FiZap,
  FiAward
} from "react-icons/fi";

const categoryIconMap = {
  FiTarget: FiTarget,
  FiPieChart: FiPieChart,
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
            Core Competencies &amp; Toolkit
          </h2>
          <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 max-w-2xl leading-relaxed">
            A balanced professional matrix combining financial statement analysis and numerical logic with creative graphic design, campus leadership, and AI-enabled business communication.
          </p>
        </div>

        {/* 4 Skill Categories Grid: Modern Competency Matrix without Percentage/Loading Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 text-left">
          {skillCategories.map((cat, idx) => {
            const IconComp = categoryIconMap[cat.icon] || FiTarget;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-lg relative overflow-hidden flex flex-col justify-between hover:border-[var(--accent-border)] transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 sm:mb-5 border-b border-base-content/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] flex items-center justify-center shrink-0 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-base-content">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="badge badge-sm badge-ghost text-[10px] sm:text-[11px] font-mono text-base-content/50">
                      {cat.skills.length} Competencies
                    </span>
                  </div>

                  {/* Skills Competency Chips */}
                  <div className="space-y-2.5 sm:space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-xl sm:rounded-2xl bg-base-100/70 border border-base-content/5 hover:border-[var(--accent-border)] hover:bg-base-100 transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3"
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <FiCheckCircle className="w-4 h-4 text-[var(--accent-solid)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div className="min-w-0">
                            <span className="font-semibold text-xs sm:text-sm text-base-content block group-hover:text-[var(--accent-solid)] transition-colors truncate">
                              {skill.name}
                            </span>
                            {skill.context && (
                              <span className="text-[10px] sm:text-[11px] text-base-content/60 block line-clamp-1">
                                {skill.context}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Tier / Proficiency Badge */}
                        <div className="shrink-0 pl-6 sm:pl-0">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[var(--accent-subtle)] text-[var(--accent-solid)] border border-[var(--accent-border)]">
                            {skill.tier}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-base-content/5 flex items-center justify-between text-[11px] text-base-content/50">
                  <span>Applied across academic &amp; club initiatives</span>
                  <span className="flex items-center gap-1 font-medium text-[var(--accent-solid)]">
                    <FiZap className="w-3 h-3" />
                    <span>Active Domain</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Software & Analytical Tools Grid */}
        <div className="text-left">
          <div className="mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content flex items-center gap-2">
              <FiAward className="text-[var(--accent-solid)]" />
              <span>Digital Software &amp; Analytical Suite</span>
            </h3>
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              Everyday tools utilized for corporate financial models, creative visual campaigns, and executive presentations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {softwareTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl sm:rounded-2xl bg-base-100 border border-base-content/10 shadow-sm flex flex-col justify-between hover:border-[var(--accent-border)] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-base-content/50 mb-1 truncate">
                    {tool.category}
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-base-content group-hover:text-[var(--accent-solid)] transition-colors truncate">
                    {tool.name}
                  </div>
                </div>
                <div className="mt-2.5">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[9px] font-semibold bg-base-200 text-base-content/70">
                    {tool.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
