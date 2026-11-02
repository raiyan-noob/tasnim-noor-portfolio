"use client";

import { useState } from "react";
import { recruiterMatcherRoles } from "@/data/portfolioData";
import { 
  FiZap, 
  FiCheckCircle, 
  FiArrowRight, 
  FiBriefcase, 
  FiStar
} from "react-icons/fi";

export default function OpportunityMatcher({ onSelectRole }) {
  const [selectedRoleId, setSelectedRoleId] = useState(recruiterMatcherRoles[0].id);

  const activeRole = recruiterMatcherRoles.find((r) => r.id === selectedRoleId) || recruiterMatcherRoles[0];

  const handleRoleClick = (role) => {
    setSelectedRoleId(role.id);
    if (onSelectRole) {
      onSelectRole(role.roleName);
    }
  };

  return (
    <section id="opportunity-matcher" className="py-16 sm:py-24 bg-base-200/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-solid)] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
            <FiZap className="w-3.5 h-3.5" />
            <span>Interactive Recruiter Tool</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-base-content tracking-tight">
            Role Fit &amp; Opportunity Matcher
          </h2>
          <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3">
            Select the specific role you are scouting for to review Tasnim&apos;s tailored qualifications, match score, and relevant project evidence.
          </p>
        </div>

        {/* Role Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-6 sm:mb-8">
          {recruiterMatcherRoles.map((role) => {
            const isSelected = role.id === selectedRoleId;
            return (
              <button
                key={role.id}
                onClick={() => handleRoleClick(role)}
                className={`p-3 sm:p-4 rounded-2xl text-left transition-all relative ${
                  isSelected
                    ? "bg-base-100 shadow-xl border-2 border-[var(--accent-border)] scale-[1.01]"
                    : "glass-card hover:bg-base-100/70 border border-base-content/10"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-[var(--accent-subtle)] text-[var(--accent-solid)]" : "bg-base-200 text-base-content/60"
                  }`}>
                    {role.matchPercentage}% Match
                  </span>
                  {isSelected && <FiCheckCircle className="w-4 h-4 text-[var(--accent-solid)] shrink-0" />}
                </div>
                <div className="font-display font-bold text-xs sm:text-base text-base-content line-clamp-1">
                  {role.roleName}
                </div>
                <div className="text-[10px] sm:text-[11px] text-base-content/50 mt-0.5">
                  {role.targetDepartments[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Matched Breakdown Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-base-content/10 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="ambient-glow w-64 h-64 -right-20 -bottom-20 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            
            {/* Left 8 cols: Pitch and details */}
            <div className="md:col-span-8 flex flex-col items-start text-left">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="badge badge-primary bg-[var(--accent-solid)] border-none text-white font-semibold text-[11px] sm:text-xs py-2">
                  {activeRole.roleName}
                </span>
                <span className="text-[11px] sm:text-xs text-base-content/60 font-medium">
                  Ideal for: {activeRole.targetDepartments.join(" • ")}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content mb-2 sm:mb-3">
                {activeRole.headline}
              </h3>

              <p className="text-xs sm:text-base text-base-content/80 leading-relaxed mb-5 sm:mb-6">
                &ldquo;{activeRole.pitch}&rdquo;
              </p>

              {/* Key Skills Pill Grid */}
              <div className="mb-5 sm:mb-6 w-full">
                <span className="text-[10px] sm:text-xs font-semibold text-base-content/60 uppercase tracking-wider block mb-2">
                  Direct Competency Alignment:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeRole.keySkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-base-100 border border-base-content/10 text-[11px] sm:text-xs font-medium text-base-content"
                    >
                      <FiStar className="w-3 h-3 text-[var(--accent-solid)] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={() => {
                  if (onSelectRole) onSelectRole(activeRole.roleName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-95 shadow-md shadow-[var(--accent-glow)] transition-all text-center"
              >
                <span>{activeRole.actionPrompt}</span>
                <FiArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Right 4 cols: Recommended Case Study Card */}
            <div className="md:col-span-4 flex flex-col justify-center w-full">
              <div className="p-4 sm:p-5 rounded-2xl bg-base-100/90 border border-base-content/10 shadow-lg text-left">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--accent-solid)] mb-2 flex items-center gap-1.5">
                  <FiBriefcase className="w-3.5 h-3.5" />
                  <span>Flagship Evidence</span>
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-base-content mb-1.5 leading-snug">
                  {activeRole.recommendedProject}
                </h4>
                <p className="text-xs text-base-content/70 mb-3 line-clamp-3">
                  Comprehensive case study proving methodology, quantitative data analysis, and execution impact.
                </p>
                <a
                  href={activeRole.recommendedProjectLink}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-solid)] hover:underline"
                >
                  <span>Review Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
