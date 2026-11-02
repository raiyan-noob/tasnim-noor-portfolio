"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedRoleForContact, setSelectedRoleForContact] = useState("");

  const handleRoleSelectFromMatcher = (roleName) => {
    setSelectedRoleForContact(roleName);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col relative selection:bg-[var(--accent-solid)] selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Academics />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact preselectedRole={selectedRoleForContact} />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Interactive Printable ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
