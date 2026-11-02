"use client";

import { useState } from "react";
import { flagshipProjects } from "@/data/portfolioData";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiX
} from "react-icons/fi";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All", 
    "Brand Strategy & FMCG", 
    "Consumer Research & FinTech", 
    "Human Resource Strategy", 
    "Business Feasibility & Consulting"
  ];

  const filteredProjects = activeFilter === "All"
    ? flagshipProjects
    : flagshipProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-base-200/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12 text-left">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2 block">
              Applied Business Strategy
            </span>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
              Case Studies &amp; Projects
            </h2>
            <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 max-w-2xl">
              End-to-end business challenges cracked through structured market research, consumer segmentation, financial feasibility, and omnichannel execution plans.
            </p>
          </div>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap no-scrollbar max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? "bg-[var(--accent-solid)] text-white shadow-md shadow-[var(--accent-glow)]"
                    : "bg-base-100 hover:bg-base-200 text-base-content/70 border border-base-content/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="glass-card rounded-2xl sm:rounded-3xl border border-base-content/10 overflow-hidden flex flex-col justify-between shadow-xl group hover:border-[var(--accent-border)] transition-all"
            >
              <div>
                {/* Visual Top Banner Gradient */}
                <div className={`h-2.5 sm:h-3 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-5 sm:p-8">
                  {/* Category & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                      {project.tag}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-base-content/50">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content mb-2 sm:mb-3 group-hover:text-[var(--accent-solid)] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed mb-4 sm:mb-6">
                    {project.summary}
                  </p>

                  {/* Problem & Challenge Box */}
                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-base-100/70 border border-base-content/5 mb-4 sm:mb-6 text-[11px] sm:text-xs text-base-content/75 leading-relaxed">
                    <strong className="text-base-content block font-semibold mb-1">
                      Business Challenge:
                    </strong>
                    {project.challenge}
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-base-100 border border-base-content/10 text-center">
                      <div className="font-display font-bold text-[11px] sm:text-sm text-[var(--accent-solid)] truncate">
                        {project.metrics.roi}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-base-content/50 font-medium mt-0.5">
                        Outcome
                      </div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-base-100 border border-base-content/10 text-center">
                      <div className="font-display font-bold text-[11px] sm:text-sm text-base-content truncate">
                        {project.metrics.reach}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-base-content/50 font-medium mt-0.5">
                        Recognition
                      </div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-base-100 border border-base-content/10 text-center">
                      <div className="font-display font-bold text-[11px] sm:text-sm text-base-content truncate">
                        {project.metrics.sample}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-base-content/50 font-medium mt-0.5">
                        Data Basis
                      </div>
                    </div>
                  </div>

                  {/* Tools Used Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 sm:px-2.5 py-0.5 rounded-lg bg-base-200 text-[10px] sm:text-[11px] font-medium text-base-content/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:px-8 sm:pb-8 pt-0 border-t border-base-content/5 mt-3 sm:mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-base-200 hover:bg-[var(--accent-subtle)] hover:text-[var(--accent-solid)] text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>Review Case Deep Dive</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-2xl max-h-[88vh] rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-y-auto border border-base-content/10 shadow-2xl relative text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center text-base-content/80 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4" />
            </button>

            <div className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] mb-2">
              {selectedProject.tag} • {selectedProject.category}
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-base-content mb-2 sm:mb-3 pr-8">
              {selectedProject.title}
            </h3>

            <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed mb-4 sm:mb-6">
              {selectedProject.summary}
            </p>

            {/* Strategic Pillars Implemented */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-base-content/60 mb-2 sm:mb-3">
                Strategic Framework &amp; Execution Roadmap:
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {selectedProject.strategy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-base-content/85 leading-relaxed">
                    <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent-solid)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Results */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-base-200/70 border border-base-content/5">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1.5 sm:mb-2">
                Impact &amp; Empirical Results:
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {selectedProject.results.map((res, rIdx) => (
                  <li key={rIdx} className="text-xs sm:text-sm text-base-content/85 flex items-start gap-2">
                    <span className="text-[var(--accent-solid)] font-bold">•</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology & Toolkit */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-base-content/10">
              <span className="text-xs font-semibold text-base-content/50">Toolkit:</span>
              {selectedProject.tools.map((t, idx) => (
                <span key={idx} className="badge badge-sm bg-base-100 text-[10px] sm:text-[11px] font-medium text-base-content">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-base-200 hover:bg-base-300 text-xs font-semibold text-base-content transition-all text-center"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
