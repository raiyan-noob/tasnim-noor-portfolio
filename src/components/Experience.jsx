"use client";

import { useState } from "react";
import { campusAndLeadershipExperience } from "@/data/portfolioData";
import { 
  FiMapPin, 
  FiCalendar, 
  FiCheckCircle
} from "react-icons/fi";

export default function Experience() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Campus Ambassador", "Club Leadership", "Mentorship"];

  const filteredRoles = filter === "All"
    ? campusAndLeadershipExperience
    : campusAndLeadershipExperience.filter((role) => role.badge === filter);

  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12 text-left">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2 block">
              Leadership In Action
            </span>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
              Campus Ambassadorship &amp; Executive Roles
            </h2>
            <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 max-w-2xl">
              Proven hands-on leadership bridging top corporate brands with university student cohorts, mobilizing student communities, and executing large-scale events.
            </p>
          </div>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap no-scrollbar max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === cat
                    ? "bg-[var(--accent-solid)] text-white shadow-md shadow-[var(--accent-glow)]"
                    : "bg-base-200 hover:bg-base-300 text-base-content/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="space-y-6 sm:space-y-8 text-left">
          {filteredRoles.map((exp, idx) => (
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

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-base-content/60 mb-5 sm:mb-6">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Impact Metric Chips */}
                  {exp.metrics && (
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 pt-1">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 sm:p-2.5 rounded-xl bg-base-100/90 border border-base-content/10 text-center">
                          <div className="font-display font-bold text-xs sm:text-base text-base-content">
                            {m.value}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-base-content/60 font-medium mt-0.5 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
