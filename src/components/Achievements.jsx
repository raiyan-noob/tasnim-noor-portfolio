"use client";

import { useState } from "react";
import { achievements, testimonials } from "@/data/portfolioData";
import { 
  FiAward, 
  FiStar, 
  FiZap, 
  FiCheckCircle, 
  FiFeather,
  FiMessageSquare,
  FiLinkedin,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiArrowLeft,
  FiArrowRight
} from "react-icons/fi";

const iconMap = {
  FiAward: FiAward,
  FiStar: FiStar,
  FiZap: FiZap,
  FiCheckCircle: FiCheckCircle,
  FiFeather: FiFeather
};

const CARDS_PER_PAGE = 4;

export default function Achievements() {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const totalPages = Math.ceil(achievements.length / CARDS_PER_PAGE);

  // 4 cards per page
  const currentAchievements = achievements.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Mobile swipe navigation
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
    { id: 0, title: "Executive Leadership & Certifications", range: "1–4" },
    { id: 1, title: "Event Operations & Campus Honors", range: "5–8" }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-base-200/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2 block">
              Honors &amp; Verified Credentials
            </span>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
              Honors, Certifications &amp; Endorsements
            </h2>
            <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 leading-relaxed">
              Verified certifications, official leadership appointments, and recognition from organizations like the SME Foundation, Grameenphone Academy, BRAC Bank, and BUBEF.
            </p>
          </div>

          {/* 4-Cards-Per-Page Controls */}
          <div className="flex items-center gap-3 shrink-0">
         

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={goToPrevPage}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-base-100 hover:bg-[var(--accent-subtle)] hover:text-[var(--accent-solid)] border border-base-content/10 flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Previous 4 honors"
                title="Previous page"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              <div className="sm:hidden text-xs font-bold text-base-content/80 px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10">
                Page {currentPage + 1} of {totalPages}
              </div>

              <button
                onClick={goToNextPage}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[var(--accent-solid)] hover:opacity-90 text-white flex items-center justify-center transition-all shadow-md shadow-[var(--accent-glow)] active:scale-95"
                aria-label="Next 4 honors"
                title="Next page"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-between text-[11px] text-base-content/60 mb-4 px-1">
          <span>Swipe left or right to change pages</span>
          <span className="font-semibold text-[var(--accent-solid)]">
            Showing {currentPage * CARDS_PER_PAGE + 1}–{Math.min((currentPage + 1) * CARDS_PER_PAGE, achievements.length)} of {achievements.length}
          </span>
        </div>

        {/* 4 Honors Cards Grid with Mobile Swipe Handlers */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14 text-left transition-opacity duration-300"
        >
          {currentAchievements.map((item) => {
            const IconComp = iconMap[item.icon] || FiAward;
            return (
              <div
                key={item.id}
                className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-base-content/10 flex flex-col justify-between shadow-lg relative group hover:border-[var(--accent-border)] transition-all transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-display font-bold text-base sm:text-xl text-base-content mb-1 group-hover:text-[var(--accent-solid)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[var(--accent-solid)] mb-2 sm:mb-3">
                    {item.organization} • <span className="text-base-content/60 font-normal">{item.date}</span>
                  </div>

                  {/* Description from LinkedIn post */}
                  <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Takeaway box if available */}
                  {item.keyTakeaway && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-base-100/70 border border-base-content/5 text-[11px] text-base-content/70 mb-4">
                      <strong className="text-base-content block font-semibold mb-0.5">Key Impact:</strong>
                      <span>{item.keyTakeaway}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Action: Direct Link to LinkedIn Post */}
                <div className="pt-3 border-t border-base-content/5 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] text-base-content/50 font-medium">
                    {item.badge}
                  </span>
                  
                  {item.linkedinUrl && (
                    <a
                      href={item.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] hover:underline"
                    >
                      <FiLinkedin className="w-3.5 h-3.5" />
                      <span>View on LinkedIn</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Navigation */}
        <div className="flex items-center justify-center gap-4 mb-14 sm:mb-20">
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
    </section>
  );
}
