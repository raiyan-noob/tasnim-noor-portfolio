"use client";

import { campusAndLeadershipExperience } from "@/data/portfolioData";
import { 
  FiMapPin, 
  FiCalendar, 
  FiCheckCircle
} from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12 text-left">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2 block">
              Experience
            </span>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
               Extra Curricular &amp; Leadership Roles
            </h2>
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-6 sm:space-y-8 text-left">
          {campusAndLeadershipExperience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-lg relative overflow-hidden transition-all hover:border-[var(--accent-border)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left col: Role title & Organization */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                      {exp.badge}
                    </span>
                    <span className="text-[11px] text-base-content/50 font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[var(--accent-solid)] mb-3">
                    {exp.organization}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-base-content/60">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right col: Bulleted responsibilities */}
                <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-base-content/10 pt-4 lg:pt-0 border-t lg:border-t-0 border-base-content/10">
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-base-content/60 mb-3">
                    Key Execution Highlights:
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-base-content/80 leading-relaxed">
                        <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent-solid)] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
