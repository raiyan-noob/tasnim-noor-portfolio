"use client";

import { useState } from "react";
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
  FiUser,
  FiImage
} from "react-icons/fi";

const CARDS_PER_PAGE = 4;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Gallery slider state inside modal
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryTouchStart, setGalleryTouchStart] = useState(null);
  const [galleryTouchEnd, setGalleryTouchEnd] = useState(null);

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

  // Touch handlers for main page navigation
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

  // Modal open helper
  const openProjectModal = (project, initialGalleryIdx = 0) => {
    setSelectedProject(project);
    setGalleryIndex(initialGalleryIdx);
  };

  // Gallery looping slider handlers
  const nextGalleryImage = () => {
    if (!selectedProject?.gallery?.length) return;
    setGalleryIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevGalleryImage = () => {
    if (!selectedProject?.gallery?.length) return;
    setGalleryIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  const onGalleryTouchStart = (e) => {
    setGalleryTouchEnd(null);
    setGalleryTouchStart(e.targetTouches[0].clientX);
  };

  const onGalleryTouchMove = (e) => {
    setGalleryTouchEnd(e.targetTouches[0].clientX);
  };

  const onGalleryTouchEnd = () => {
    if (!galleryTouchStart || !galleryTouchEnd) return;
    const distance = galleryTouchStart - galleryTouchEnd;
    if (distance > 40) {
      nextGalleryImage();
    } else if (distance < -40) {
      prevGalleryImage();
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

          {/* Swipe / Arrow Carousel Controls (4 cards per page) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Page Pill Indicators */}
            <div className="hidden sm:flex items-center gap-2 p-1.5 rounded-2xl bg-base-100 border border-base-content/10">
              {pageLabels.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentPage(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    currentPage === p.id
                      ? "bg-[var(--accent-solid)] text-white shadow-md shadow-[var(--accent-glow)]"
                      : "text-base-content/70 hover:bg-base-200"
                  }`}
                >
                  <span>Page {p.id + 1}</span>
                  <span className="opacity-70 text-[10px] ml-1.5">({p.range})</span>
                </button>
              ))}
            </div>

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

                  {/* Course / Faculty / Organization Badge */}
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

                  {/* Visual Design Showcase Thumbnail Strip (if project has gallery) */}
                  {project.gallery && project.gallery.length > 0 && (
                    <div className="mb-4 p-2.5 rounded-2xl bg-base-200/50 border border-base-content/10">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--accent-solid)] flex items-center gap-1.5">
                          <FiImage className="w-3.5 h-3.5" />
                          <span>Featured Design Works ({project.gallery.length})</span>
                        </span>
                        <span className="text-[10px] text-base-content/50">Click to preview</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {project.gallery.map((g, gIdx) => (
                          <div
                            key={gIdx}
                            onClick={() => openProjectModal(project, gIdx)}
                            className="aspect-[3/4] rounded-xl overflow-hidden bg-base-300 relative cursor-pointer group/thumb border border-base-content/10 hover:border-[var(--accent-solid)] transition-all shadow-sm"
                          >
                            <img
                              src={g.image}
                              alt={g.title}
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover/thumb:opacity-100 text-[10px] text-white font-bold bg-black/70 px-1.5 py-0.5 rounded backdrop-blur-xs transition-opacity">
                                View
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenge / Focus Box & Impact Metrics Strip (Only for academic & business projects without gallery) */}
                  {!project.gallery && (
                    <>
                      <div className="p-3 rounded-xl bg-base-100/70 border border-base-content/5 mb-4 text-[11px] sm:text-xs text-base-content/75 leading-relaxed">
                        <strong className="text-base-content block font-semibold mb-0.5">
                          Strategic Objective &amp; Scope:
                        </strong>
                        <span className="line-clamp-2">{project.challenge}</span>
                      </div>

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
                    </>
                  )}

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
                  onClick={() => openProjectModal(project, 0)}
                  className="w-full py-2.5 px-4 rounded-xl bg-base-200 hover:bg-[var(--accent-subtle)] hover:text-[var(--accent-solid)] text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>{project.gallery ? "Explore Design Gallery & Details" : "Review Details"}</span>
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
            <span>Previous</span>
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

      {/* Case Study / Research Paper & Design Gallery Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-y-auto border border-base-content/10 shadow-2xl relative text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center text-base-content/80 transition-colors z-20"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4" />
            </button>

            <div className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] mb-2">
              {selectedProject.tag} • {selectedProject.category}
            </div>

            {/* Academic or Organization Metadata strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-base-content/60 mb-3 pb-2 border-b border-base-content/10">
              {selectedProject.course && (
                <div className="flex items-center gap-1">
                  <FiBookOpen className="w-3.5 h-3.5 text-[var(--accent-solid)]" />
                  <span>{selectedProject.course}</span>
                </div>
              )}
              {selectedProject.organization && (
                <div className="flex items-center gap-1">
                  <FiBookOpen className="w-3.5 h-3.5 text-[var(--accent-solid)]" />
                  <span>{selectedProject.organization}</span>
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

            {/* ── Interactive Looping Image Slider UI for Graphic Design Showcase ── */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="mb-6 p-3 sm:p-5 rounded-2xl bg-base-200/60 border border-base-content/10 shadow-inner">
                {/* Carousel Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-solid)] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-base-content">
                      Interactive Design Showcase
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-sm badge-outline text-[11px] font-mono text-[var(--accent-solid)] border-[var(--accent-border)]">
                      Design {galleryIndex + 1} of {selectedProject.gallery.length} • Looping
                    </span>
                  </div>
                </div>

                {/* Looping Carousel Stage with Touch Gestures */}
                <div 
                  onTouchStart={onGalleryTouchStart}
                  onTouchMove={onGalleryTouchMove}
                  onTouchEnd={onGalleryTouchEnd}
                  className="relative rounded-2xl overflow-hidden bg-base-300/80 border border-base-content/10 flex flex-col items-center justify-center shadow-lg group select-none"
                >
                  {/* Image Display */}
                  <div className="w-full flex items-center justify-center p-3 sm:p-6 min-h-[340px] max-h-[480px] sm:max-h-[540px] relative">
                    <img
                      src={selectedProject.gallery[galleryIndex].image}
                      alt={selectedProject.gallery[galleryIndex].title}
                      className="max-h-[320px] sm:max-h-[500px] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-all duration-300"
                    />

                    {/* Previous Button (Infinite Loop to Last Image) */}
                    <button
                      onClick={prevGalleryImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-[var(--accent-solid)] text-white backdrop-blur-md flex items-center justify-center shadow-xl transition-all active:scale-90 z-10 cursor-pointer"
                      aria-label="Previous design (loops to last image)"
                      title="Previous design (loops to last image)"
                    >
                      <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Next Button (Infinite Loop to First Image) */}
                    <button
                      onClick={nextGalleryImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-[var(--accent-solid)] text-white backdrop-blur-md flex items-center justify-center shadow-xl transition-all active:scale-90 z-10 cursor-pointer"
                      aria-label="Next design (loops to first image)"
                      title="Next design (loops to first image)"
                    >
                      <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>

                  {/* Swipe hint on mobile */}
                  <div className="sm:hidden text-[10px] text-base-content/50 pb-2">
                    Swipe left or right to browse designs
                  </div>
                </div>

                {/* Active Design Description & Meta */}
                <div className="mt-4 p-4 rounded-xl bg-base-100 border border-base-content/10 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-base-content">
                        {selectedProject.gallery[galleryIndex].title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[var(--accent-solid)] font-semibold mt-0.5">
                        {selectedProject.gallery[galleryIndex].client} • {selectedProject.gallery[galleryIndex].honoree}
                      </p>
                    </div>
                    <span className="badge badge-sm bg-[var(--accent-subtle)] text-[var(--accent-solid)] font-medium self-start sm:self-center border-none">
                      {selectedProject.gallery[galleryIndex].role}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed mb-3">
                    {selectedProject.gallery[galleryIndex].description}
                  </p>

                  {/* Direct Clickable Thumbnail Selector */}
                  <div className="pt-3 border-t border-base-content/10 flex items-center gap-2.5 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/50 shrink-0">
                      Designs:
                    </span>
                    {selectedProject.gallery.map((g, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryIndex(idx)}
                        className={`relative w-12 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          galleryIndex === idx
                            ? "border-[var(--accent-solid)] ring-2 ring-[var(--accent-solid)]/40 scale-105 shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                        title={g.title}
                      >
                        <img
                          src={g.image}
                          alt={g.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Strategic Pillars & Methodology */}
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

            {/* Measurable Results & Outcomes */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-base-200/70 border border-base-content/5">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1.5 sm:mb-2">
                Documented Outcomes &amp; Impact:
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
              <span className="text-xs font-semibold text-base-content/50">Core Toolkit:</span>
              {selectedProject.tools.map((t, idx) => (
                <span key={idx} className="badge badge-sm bg-base-100 text-[10px] sm:text-[11px] font-medium text-base-content">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-base-200 hover:bg-base-300 text-xs font-semibold text-base-content transition-all text-center cursor-pointer"
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
