"use client";

import { achievements, testimonials } from "@/data/portfolioData";
import { 
  FiAward, 
  FiStar, 
  FiZap, 
  FiCheckCircle, 
  FiMessageSquare
} from "react-icons/fi";

const iconMap = {
  FiAward: FiAward,
  FiStar: FiStar,
  FiZap: FiZap,
  FiCheckCircle: FiCheckCircle
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 bg-base-200/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2">
            Accolades &amp; Recognition
          </span>
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
            Honors, Awards &amp; Endorsements
          </h2>
          <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3 max-w-2xl">
            Demonstrated competitive drive and recognition from academic juries, national competition judges, and campus organizations.
          </p>
        </div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20 text-left">
          {achievements.map((item, idx) => {
            const IconComp = iconMap[item.icon] || FiAward;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 flex flex-col justify-between shadow-lg relative group hover:border-[var(--accent-border)] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="badge badge-sm badge-outline text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] border-[var(--accent-border)]">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-xl text-base-content mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[var(--accent-solid)] mb-2 sm:mb-3">
                    {item.organization} • {item.date}
                  </div>
                  <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="text-left">
          <div className="mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-lg sm:text-2xl text-base-content flex items-center gap-2">
              <FiMessageSquare className="text-[var(--accent-solid)]" />
              <span>Mentorship &amp; Peer Endorsements</span>
            </h3>
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              Feedback from faculty mentors, club executives, and brand managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-base-content/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">{t.avatar}</span>
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-base-200 text-base-content/60">
                      {t.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-base-content/85 italic leading-relaxed mb-4 sm:mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-base-content/10">
                  <div className="font-display font-bold text-xs sm:text-sm text-base-content">
                    {t.author}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-base-content/60 mt-0.5">
                    {t.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
