"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  FiMenu, 
  FiX, 
  FiMoon, 
  FiSun, 
  FiFileText, 
  FiMail, 
  FiCheck,
  FiZap
} from "react-icons/fi";

const palettes = [
  { id: "rose", name: "Rose Luxe", color: "#fb7185" },
  { id: "emerald", name: "Emerald Pro", color: "#10b981" },
  { id: "indigo", name: "Royal Indigo", color: "#818cf8" },
  { id: "gold", name: "Warm Gold", color: "#fbbf24" },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("night");
  const [currentPalette, setCurrentPalette] = useState("rose");
  const [paletteDropdownOpen, setPaletteDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "night" ? "light" : "night";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const changePalette = (paletteId) => {
    setCurrentPalette(paletteId);
    document.documentElement.setAttribute("data-palette", paletteId);
    setPaletteDropdownOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Honors", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-lg py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[var(--accent-from)] to-[var(--accent-to)] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shrink-0">
              <div className="w-full h-full rounded-[9px] sm:rounded-[10px] bg-base-100 flex items-center justify-center font-display font-bold text-sm sm:text-lg text-[var(--accent-from)]">
                TN
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm sm:text-base md:text-lg tracking-tight group-hover:text-[var(--accent-from)] transition-colors truncate max-w-[125px] xs:max-w-[170px] sm:max-w-none">
                {personalInfo.fullName}
              </span>
              <span className="text-[10px] sm:text-xs text-base-content/60 font-medium hidden md:inline-block">
                BBA • BRAC Business School
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-base-content/80 hover:text-base-content hover:bg-base-200/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Recruiter CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Matcher Shortcut (tablets & up) */}
            <a
              href="#opportunity-matcher"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-subtle)] text-[var(--accent-solid)] border border-[var(--accent-border)] hover:bg-[var(--accent-from)] hover:text-white transition-all shadow-sm"
              title="Jump to Recruiter Role Matcher"
            >
              <FiZap className="w-3.5 h-3.5 animate-pulse" />
              <span>Role Matcher</span>
            </a>

            {/* Resume Button (sm & up) */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-base-200 hover:bg-base-300 text-base-content border border-base-content/10 transition-all"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Accent Palette Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPaletteDropdownOpen(!paletteDropdownOpen)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-base-200 hover:bg-base-300 border border-base-content/10 transition-all"
                title="Change Accent Theme"
                aria-label="Change Accent Theme"
              >
                <div
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: palettes.find(p => p.id === currentPalette)?.color }}
                />
              </button>

              {paletteDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 sm:w-40 glass-panel rounded-xl shadow-xl p-2 border border-base-content/10 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-base-content/50 uppercase px-2 py-1">
                    Accent Palette
                  </div>
                  {palettes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => changePalette(p.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        currentPalette === p.id
                          ? "bg-[var(--accent-subtle)] text-[var(--accent-solid)]"
                          : "hover:bg-base-200 text-base-content/80"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                        <span>{p.name}</span>
                      </div>
                      {currentPalette === p.id && <FiCheck className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-base-200 hover:bg-base-300 border border-base-content/10 text-base-content transition-all"
              title={theme === "night" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme Mode"
            >
              {theme === "night" ? (
                <FiSun className="w-4 h-4 text-amber-400" />
              ) : (
                <FiMoon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* "Hire Me" Button (desktop only) */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-95 shadow-md shadow-[var(--accent-glow)] transition-all"
            >
              <FiMail className="w-3.5 h-3.5" />
              <span>Hire Tasnim</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-base-200 border border-base-content/10 text-base-content"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <FiX className="w-4 h-4 sm:w-5 sm:h-5" /> : <FiMenu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 glass-panel rounded-2xl border border-base-content/10 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-base-content/85 hover:text-base-content hover:bg-base-200/70 transition-all"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-base-content/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-base-200 text-sm font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform"
                >
                  <FiFileText className="w-4 h-4 text-[var(--accent-solid)]" />
                  <span>View &amp; Download Resume</span>
                </button>
                <a
                  href="#opportunity-matcher"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] border border-[var(--accent-border)] text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <FiZap className="w-4 h-4" />
                  <span>Recruiter Role Matcher</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                >
                  <FiMail className="w-4 h-4" />
                  <span>Contact / Hire Tasnim</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
