"use client";

import { personalInfo, corePillars } from "@/data/portfolioData";
import { 
  FiTarget, 
  FiPieChart, 
  FiZap, 
  FiHeart, 
  FiCheckCircle, 
  FiMapPin, 
  FiCoffee,
  FiAward
} from "react-icons/fi";

const pillarIcons = {
  FiTarget: FiTarget,
  FiPieChart: FiPieChart,
  FiZap: FiZap,
  FiHeart: FiHeart
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2">
            Professional Narrative
          </span>
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
            Driven by curiosity, backed by business fundamentals.
          </h2>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-20">
          
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base text-base-content/80 leading-relaxed text-left">
            <p className="text-base sm:text-lg text-base-content font-medium">
              Over the course of completing <span className="text-[var(--accent-solid)] font-bold">6 rigorous semesters</span> at BRAC Business School, 
              I have developed an affinity for unraveling <strong className="text-base-content font-semibold">what makes people buy, engage, and remain loyal to brands</strong>.
            </p>

            <p>
              Business to me is neither purely creative nor purely quantitative — it lives at the intersection of both. 
              Whether I am building sensitivity data tables in Microsoft Excel to forecast revenue or synthesizing qualitative focus group feedback to shape an FMCG launch campaign, 
              my focus remains the same: <span className="text-base-content font-semibold">turning raw consumer signals into actionable, commercially viable strategies</span>.
            </p>

            <p>
              Outside the lecture hall, I believe true business leadership is learned on the ground. Serving as an executive in the <strong className="text-base-content font-semibold">BRAC University Business Club (BUBaC)</strong> and representing major consumer platforms as a <strong className="text-base-content font-semibold">Campus Ambassador</strong>, 
              I have pitched to corporate heads, mobilized hundreds of student attendees, and solved live pressure-cooker challenges.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-base-content/70">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FiMapPin className="text-[var(--accent-solid)] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FiAward className="text-[var(--accent-solid)] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Dean&apos;s Honor List</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FiCoffee className="text-[var(--accent-solid)] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Case Solver &amp; Public Speaker</span>
              </div>
            </div>
          </div>

          {/* Quick Value Proposition Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-xl text-left">
              <h3 className="font-display font-bold text-base sm:text-lg text-base-content mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-solid)]" />
                <span>Why Recruit Tasnim for Your Team?</span>
              </h3>
              
              <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-base-content/80">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-base-content block font-semibold">Ready to hit the ground running:</strong>
                    Completed 6 semesters of core business curriculum, meaning immediate productivity with minimal onboarding friction.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-base-content block font-semibold">Analytical rigor + Creative fluency:</strong>
                    Equally comfortable building Excel financial models as designing viral social pitch decks and copywriting.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-base-content block font-semibold">Proven youth influence &amp; outreach:</strong>
                    Demonstrated ability to connect corporate brands directly with university demographics and drive conversions.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-base-content block font-semibold">High emotional intelligence (EQ):</strong>
                    Dual focus on HRM fosters empathy, clear stakeholder negotiation, and seamless cross-functional team chemistry.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {corePillars.map((pillar, idx) => {
            const IconComp = pillarIcons[pillar.icon] || FiTarget;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-base-200 text-base-content/60">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-base-content mb-1.5 sm:mb-2 group-hover:text-[var(--accent-solid)] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-base-content/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
