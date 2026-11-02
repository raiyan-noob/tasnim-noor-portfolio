"use client";

import { personalInfo } from "@/data/portfolioData";
import { FiArrowUp, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 bg-base-300/60 border-t border-base-content/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          
          {/* Left: Branding & Role */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[var(--accent-from)] to-[var(--accent-to)] p-[1.5px] shadow-sm shrink-0">
              <div className="w-full h-full rounded-[9px] sm:rounded-[10px] bg-base-100 flex items-center justify-center font-display font-bold text-xs sm:text-sm text-[var(--accent-from)]">
                TN
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base text-base-content">
                {personalInfo.fullName}
              </div>
              <div className="text-[11px] sm:text-xs text-base-content/60">
                BBA Undergraduate (6 Semesters Complete) • {personalInfo.businessSchool}
              </div>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-base-content/70">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors flex items-center gap-1.5"
            >
              <FiLinkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[var(--accent-solid)] transition-colors flex items-center gap-1.5"
            >
              <FiMail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <span>•</span>
            <a
              href="#opportunity-matcher"
              className="hover:text-[var(--accent-solid)] transition-colors"
            >
              Role Matcher
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs text-base-content/50">
              © {new Date().getFullYear()} • Crafted for Leadership
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-base-200 hover:bg-base-100 border border-base-content/10 flex items-center justify-center text-base-content transition-all hover:-translate-y-0.5 active:scale-95"
              title="Back to Top"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
