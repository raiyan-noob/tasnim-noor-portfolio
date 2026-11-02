"use client";

import { useState, useRef } from "react";
import { flagshipProjects } from "@/data/portfolioData";
import { 
  FiArrowRight, 
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle, 
  FiX,
  FiBookOpen,
  FiCalendar,
  FiUser
} from "react-icons/fi";

const CARDS_PER_PAGE = 4;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const totalPages = Math.ceil(flagshipProjects.length / CARDS_PER_PAGE);

  // Get the 4 projects for the active page
  const currentProjects = flagshipProjects.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Touch handlers for mobile swipe navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextPage();
    } else if (isRightSwipe) {
      goToPrevPage();
    }
  };

  const pageLabels = [
    { id: 0, title: "Academic Term Papers & Creative Design", range: "1–4" },
    { id: 1, title: "Corporate Finance & Leadership Operations", range: "5–8" }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-base-200/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Arrow Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2 block">
              Applied Research &amp; Projects
            </span>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
              Research Papers, Case Studies &amp; Design Projects
            </h2>
            <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 leading-relaxed">
              Showcasing in-depth academic research papers in corporate law, personal branding, and cyberbullying, alongside creative design and financial modeling projects.
            </p>
          </div>

          {/* Swipe / Arrow Carousel Controls (Replaces grid filter) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Page Pill Indicators */}
            

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={goToPrevPage}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-base-100 hover:bg-[var(--accent-subtle)] hover:text-[var(--accent-solid)] border border-base-content/10 flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Previous 4 cards"
                title="Previous page"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              {/* Mobile Page Indicator */}
              <div className="sm:hidden text-xs font-bold text-base-content/80 px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10">
                Page {currentPage + 1} of {totalPages}
              </div>

              <button
                onClick={goToNextPage}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[var(--accent-solid)] hover:opacity-90 text-white flex items-center justify-center transition-all shadow-md shadow-[var(--accent-glow)] active:scale-95"
                aria-label="Next 4 cards"
                title="Next page"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Swipe Hint on Mobile */}
        <div className="sm:hidden flex items-center justify-between text-[11px] text-base-content/60 mb-4 px-1">
          <span>Swipe left or right to change pages</span>
          <span className="font-semibold text-[var(--accent-solid)]">
            Showing {currentPage * CARDS_PER_PAGE + 1}–{Math.min((currentPage + 1) * CARDS_PER_PAGE, flagshipProjects.length)} of {flagshipProjects.length}
          </span>
        </div>

        {/* 4 Cards Grid with Swipe Touch Handlers */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left transition-opacity duration-300"
        >
          {currentProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="glass-card rounded-2xl sm:rounded-3xl border border-base-content/10 overflow-hidden flex flex-col justify-between shadow-xl group hover:border-[var(--accent-border)] transition-all transform hover:-translate-y-1"
            >
              <div>
                {/* Visual Top Banner Gradient */}
                <div className={`h-2.5 sm:h-3 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-5 sm:p-7">
                  {/* Category & Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                      {project.tag}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-base-content/60 truncate max-w-[200px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Course / Faculty Badge if available */}
                  {(project.course || project.organization) && (
                    <div className="flex items-center gap-2 text-[11px] text-base-content/60 mb-2 font-mono">
                      <FiBookOpen className="w-3.5 h-3.5 text-[var(--accent-solid)] shrink-0" />
                      <span className="truncate">{project.course || project.organization}</span>
                    </div>
                  )}

                  <h3 className="font-display font-bold text-lg sm:text-xl text-base-content mb-2.5 group-hover:text-[var(--accent-solid)] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Challenge / Focus Box */}
                  <div className="p-3 rounded-xl bg-base-100/70 border border-base-content/5 mb-4 text-[11px] sm:text-xs text-base-content/75 leading-relaxed">
                    <strong className="text-base-content block font-semibold mb-0.5">
                      Research &amp; Strategic Challenge:
                    </strong>
                    <span className="line-clamp-2">{project.challenge}</span>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-base-100 border border-base-content/10 text-center">
                      <div className="font-display font-bold text-[11px] sm:text-xs text-[var(--accent-solid)] truncate">
                        {project.metrics.roi}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-base-content/50 font-medium mt-0.5">
                        Outcome
                      </div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-base-100 border border-base-content/10 text-center">
                      <div className="font-display font-bold text-[11px] sm:text-xs text-base-content truncate">
                        {project.metrics.reach}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-base-content/50 font-medium mt-0.5">
                        Scope
                      </div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-base-100 border border-base-content/10 text-center">
                      <div className="font-display font-bold text-[11px] sm:text-xs text-base-content truncate">
                        {project.metrics.sample}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-base-content/50 font-medium mt-0.5">
                        Evidence
                      </div>
                    </div>
                  </div>

                  {/* Tools Used Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2">
                    {project.tools.slice(0, 4).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-lg bg-base-200 text-[10px] sm:text-[11px] font-medium text-base-content/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:px-7 sm:pb-6 pt-0 border-t border-base-content/5 mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-base-200 hover:bg-[var(--accent-subtle)] hover:text-[var(--accent-solid)] text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>Review Details</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots & Arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={goToPrevPage}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-base-100 hover:bg-base-200 border border-base-content/10 text-xs font-semibold text-base-content transition-all shadow-sm"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Previous </span>
          </button>

          <div className="flex items-center gap-2">
            {pageLabels.map((p) => (
              <button
                key={p.id}
                onClick={() => setCurrentPage(p.id)}
                className={`h-2.5 rounded-full transition-all ${
                  currentPage === p.id 
                    ? "w-8 bg-[var(--accent-solid)]" 
                    : "w-2.5 bg-base-content/20 hover:bg-base-content/40"
                }`}
                aria-label={`Go to page ${p.id + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNextPage}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent-solid)] hover:opacity-90 text-white text-xs font-semibold transition-all shadow-md shadow-[var(--accent-glow)]"
          >
            <span>Next</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Case Study / Research Paper Deep Dive Modal */}
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

            {/* Academic metadata strip if present */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-base-content/60 mb-3 pb-2 border-b border-base-content/10">
              {selectedProject.course && (
                <div className="flex items-center gap-1">
                  <FiBookOpen className="w-3.5 h-3.5 text-[var(--accent-solid)]" />
                  <span>{selectedProject.course}</span>
                </div>
              )}
              {selectedProject.faculty && (
                <div className="flex items-center gap-1">
                  <FiUser className="w-3.5 h-3.5 text-[var(--accent-solid)]" />
                  <span>Instructor: {selectedProject.faculty}</span>
                </div>
              )}
              {selectedProject.date && (
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{selectedProject.date}</span>
                </div>
              )}
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-base-content mb-2 sm:mb-3 pr-8 leading-snug">
              {selectedProject.title}
            </h3>

            <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed mb-4 sm:mb-6">
              {selectedProject.summary}
            </p>

            {/* Strategic Pillars & Methodology */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-base-content/60 mb-2 sm:mb-3">
                Research Methodology &amp; Strategic Execution:
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

            {/* Measurable Results & Academic Outcomes */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-base-200/70 border border-base-content/5">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1.5 sm:mb-2">
                Documented Outcomes &amp; Key Findings:
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
              <span className="text-xs font-semibold text-base-content/50">Core Toolkit &amp; Disciplines:</span>
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
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
