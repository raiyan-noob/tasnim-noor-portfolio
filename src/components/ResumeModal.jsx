"use client";

import { personalInfo, academicJourney, campusAndLeadershipExperience, flagshipProjects } from "@/data/portfolioData";
import { 
  FiX, 
  FiPrinter, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin
} from "react-icons/fi";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="bg-base-100 text-base-content w-full max-w-4xl max-h-[92vh] rounded-2xl sm:rounded-3xl shadow-2xl border border-base-content/15 flex flex-col overflow-hidden relative text-left">
        
        {/* Header Action Bar */}
        <div className="p-3 sm:px-6 bg-base-200/80 border-b border-base-content/10 flex items-center justify-between no-print gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-display font-bold text-xs sm:text-sm text-base-content truncate">
              CV Preview • {personalInfo.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] border border-[var(--accent-border)] hover:bg-[var(--accent-from)] hover:text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
              title="Print or Save as PDF"
            >
              <FiPrinter className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Print / Save PDF</span>
              <span className="xs:hidden">PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-base-300 hover:bg-base-content/20 text-base-content/80 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div id="printable-resume" className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-5 sm:space-y-6 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b-2 border-base-content/20 pb-4 sm:pb-5">
            <h1 className="font-display font-extrabold text-xl sm:text-3xl text-base-content tracking-tight uppercase">
              {personalInfo.fullName}
            </h1>
            <p className="text-xs sm:text-base font-semibold text-[var(--accent-solid)] mt-0.5">
              BBA Undergraduate (Completed 6 Semesters) • Marketing &amp; Human Resource Management
            </p>
            <p className="text-[11px] sm:text-xs text-base-content/70 mt-1">
              BRAC Business School, BRAC University • Seeking Summer 2025/2026 Internships &amp; Youth Ambassador Roles
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-base-content/75 font-medium">
              <span className="flex items-center gap-1">
                <FiMapPin className="w-3 h-3 text-[var(--accent-solid)] shrink-0" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline truncate">
                <FiMail className="w-3 h-3 text-[var(--accent-solid)] shrink-0" />
                {personalInfo.email}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FiPhone className="w-3 h-3 text-[var(--accent-solid)] shrink-0" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline text-[#0A66C2]">
                <FiLinkedin className="w-3 h-3 shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--accent-solid)] border-b border-base-content/10 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm text-base-content/85 leading-relaxed">
              Analytical and proactive 6th-semester BBA undergraduate at BRAC Business School (CGPA: 3.82/4.00) dual-concentrating in Marketing and Human Resource Management. 
              Demonstrated acumen in consumer behavior research, strategic campaign formulation, and financial feasibility modeling. Proven campus leader with hands-on 
              experience orchestrating national business competitions for 500+ participants and driving 30%+ student user conversions as a corporate campus ambassador.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--accent-solid)] border-b border-base-content/10 pb-1 mb-2">
              Education &amp; Academic Honors
            </h2>
            <div className="flex flex-col xs:flex-row justify-between items-start mb-1 gap-1">
              <div>
                <strong className="text-xs sm:text-sm font-bold text-base-content block">
                  Bachelor of Business Administration (BBA)
                </strong>
                <span className="text-[11px] sm:text-xs text-base-content/80">
                  BRAC Business School, BRAC University • Dhaka, Bangladesh
                </span>
              </div>
              <div className="xs:text-right">
                <span className="text-[11px] sm:text-xs font-semibold text-base-content block">2022 - Present</span>
                <span className="text-[11px] sm:text-xs font-bold text-[var(--accent-solid)]">CGPA: 3.82 / 4.00</span>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-base-content/75 mb-1.5 leading-relaxed">
              <strong>Status:</strong> Completed 6 Semesters (Junior/Senior Transition) • Expected Graduation: 2026<br />
              <strong>Major:</strong> Marketing | <strong>Minor/Concentration:</strong> Human Resource Management (HRM)
            </p>
            <p className="text-[11px] sm:text-xs text-base-content/70 leading-relaxed">
              <strong>Key Courses:</strong> Strategic Brand Management (A), Consumer Behavior (A), Integrated Marketing Communications (A-), Business Statistics (A), HRM Strategy (A), Financial Management (A-).<br />
              <strong>Honors:</strong> BRAC University Dean&apos;s Honor List, Merit Scholarship Recipient.
            </p>
          </div>

          {/* Leadership & Campus Experience */}
          <div>
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--accent-solid)] border-b border-base-content/10 pb-1 mb-2">
              Campus Ambassadorship &amp; Leadership Experience
            </h2>
            
            <div className="space-y-3">
              {campusAndLeadershipExperience.slice(0, 3).map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col xs:flex-row justify-between items-start gap-0.5">
                    <div>
                      <strong className="text-[11px] sm:text-xs md:text-sm font-bold text-base-content">
                        {exp.role}
                      </strong>
                      <span className="text-[11px] sm:text-xs text-base-content/70 block font-medium">
                        {exp.organization}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-base-content/60">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] sm:text-xs text-base-content/80 mt-1">
                    {exp.responsibilities.slice(0, 2).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Business Projects */}
          <div>
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--accent-solid)] border-b border-base-content/10 pb-1 mb-2">
              Selected Business Case Studies &amp; Projects
            </h2>
            <div className="space-y-3">
              {flagshipProjects.slice(0, 3).map((proj, idx) => (
                <div key={idx}>
                  <div className="flex flex-col xs:flex-row justify-between items-start gap-0.5">
                    <strong className="text-[11px] sm:text-xs md:text-sm font-bold text-base-content">
                      {proj.title}
                    </strong>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[var(--accent-solid)] shrink-0">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-base-content/80 mt-0.5 leading-relaxed">
                    {proj.summary}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-base-content/60 mt-0.5">
                    <strong>Impact &amp; Toolkit:</strong> {proj.results[0]} | Tools: {proj.tools.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Software */}
          <div>
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--accent-solid)] border-b border-base-content/10 pb-1 mb-2">
              Business &amp; Technical Toolkit
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-base-content/80">
              <div>
                <strong>Marketing Strategy:</strong> Brand Positioning, STP, Consumer Insights, Social Media Analytics, GTM Planning.
              </div>
              <div>
                <strong>Analytics &amp; Software:</strong> MS Excel (Advanced Pivot/Modeling), SPSS, Google Analytics, Canva Pro, Figma.
              </div>
              <div>
                <strong>HR &amp; People:</strong> Employee Journey Mapping, Onboarding Frameworks, Peer Mentorship, Cross-Functional Teamwork.
              </div>
              <div>
                <strong>Communication:</strong> Executive Pitch Decks, Case Presentations, Emceeing, Professional Copywriting.
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div>
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--accent-solid)] border-b border-base-content/10 pb-1 mb-2">
              Certifications &amp; Key Honors
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] sm:text-xs text-base-content/80">
              <li>• 1st Runner Up - National Inter-University Brand Pitch 2024</li>
              <li>• Google Digital Garage - Fundamentals of Digital Marketing</li>
              <li>• Best Campus Ambassador of the Quarter Award 2024</li>
              <li>• HubSpot Academy - Inbound Marketing Certified</li>
            </ul>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 15mm;
            color: #000 !important;
            background: #fff !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

    </div>
  );
}
