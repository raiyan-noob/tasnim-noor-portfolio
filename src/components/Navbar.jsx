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
  const [theme, setTheme] = useState("light");
  const [currentPalette, setCurrentPalette] = useState("rose");
  const [paletteDropdownOpen, setPaletteDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Restore persisted theme and palette from localStorage
    try {
      const savedTheme = localStorage.getItem("tasnim_theme") || "light";
      const savedPalette = localStorage.getItem("tasnim_palette") || "rose";
      setTheme(savedTheme);
      setCurrentPalette(savedPalette);
      document.documentElement.setAttribute("data-theme", savedTheme);
      document.documentElement.setAttribute("data-palette", savedPalette);
    } catch {
      // Fallback
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect current visible section on scroll
      const sections = ["about", "academics", "experience", "projects", "skills", "achievements", "contact"];
      const scrollPosition = window.scrollY + 180;

      let current = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "night" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("tasnim_theme", nextTheme);
    } catch {
      // localStorage may be disabled
    }
  };

  const changePalette = (paletteId) => {
    setCurrentPalette(paletteId);
    document.documentElement.setAttribute("data-palette", paletteId);
    setPaletteDropdownOpen(false);
    try {
      localStorage.setItem("tasnim_palette", paletteId);
    } catch {
      // localStorage may be disabled
    }
  };

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Academics", href: "#academics", id: "academics" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "#contact", id: "contact" },
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
              <span className="font-display font-bold text-sm sm:text-base md:text-md tracking-tight group-hover:text-[var(--accent-from)] transition-colors max-w-[125px] xs:max-w-[170px] sm:max-w-none truncate">
                {personalInfo.fullName}
              </span>
              <span className="text-[10px] sm:text-xs text-base-content/60 font-medium hidden md:inline-block">
                BBA • BRAC University
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Active Indicator and Distinct Hover State */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "bg-[var(--accent-subtle)] text-[var(--accent-solid)] font-semibold border border-[var(--accent-border)]/50 shadow-xs hover:bg-gradient-to-r hover:from-[var(--accent-from)] hover:to-[var(--accent-to)] hover:text-white hover:border-transparent hover:shadow-md hover:shadow-[var(--accent-glow)]"
                      : "text-base-content/75 hover:text-base-content hover:bg-base-200/80 hover:text-[var(--accent-solid)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent-solid)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Recruiter CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label="Toggle Theme Mode"
            >
              {theme === "light" ? (
                <FiMoon className="w-4 h-4 text-indigo-500" />
              ) : (
                <FiSun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-95 shadow-md shadow-[var(--accent-glow)] transition-all"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

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
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[var(--accent-subtle)] text-[var(--accent-solid)] font-semibold border border-[var(--accent-border)]/50"
                        : "text-base-content/85 hover:text-base-content hover:bg-base-200/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
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
