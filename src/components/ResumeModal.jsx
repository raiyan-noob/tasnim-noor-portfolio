"use client";

import { 
  FiX, 
  FiPrinter, 
  FiDownload,
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin,
  FiExternalLink
} from "react-icons/fi";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Container */}
      <div className="bg-base-100 text-base-content w-full max-w-4xl max-h-[92vh] rounded-2xl sm:rounded-3xl shadow-2xl border border-base-content/15 flex flex-col overflow-hidden relative text-left">
        
        {/* Header Action Bar */}
        <div className="p-3 sm:px-6 bg-base-200/80 border-b border-base-content/10 flex items-center justify-between no-print gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-display font-bold text-xs sm:text-sm text-base-content truncate">
              Official Resume Preview • Tasnim Binte Noor
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/Tasnim_Binte_Noor_Resume.pdf"
              download="Tasnim_Binte_Noor_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--accent-solid)] text-white hover:opacity-90 text-xs font-semibold transition-all shadow-md shadow-[var(--accent-glow)] active:scale-95"
              title="Download Attached Resume PDF"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-base-200 hover:bg-base-300 text-base-content border border-base-content/10 text-xs font-semibold transition-all shadow-sm active:scale-95"
              title="Print Resume"
            >
              <FiPrinter className="w-3.5 h-3.5" />
              <span>Print</span>
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

        {/* Scrollable Printable Resume Sheet (Matching Attached PDF) */}
        <div id="printable-resume" className="p-5 sm:p-8 md:p-12 overflow-y-auto space-y-6 text-xs sm:text-sm bg-base-100">
          
          {/* Resume Header */}
          <div className="border-b-2 border-base-content/25 pb-4 sm:pb-5">
            <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-base-content tracking-tight uppercase">
              TASNIM BINTE NOOR
            </h1>
            <p className="text-xs sm:text-sm font-bold text-base-content/80 mt-1 uppercase tracking-wider">
              BUSINESS STUDENT | FINANCE | BUSINESS ANALYTICS &amp; INFORMATION SYSTEM
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2.5 sm:mt-3 text-xs text-base-content/75 font-medium">
              <span className="flex items-center gap-1">
                <FiMapPin className="w-3.5 h-3.5 text-[var(--accent-solid)] shrink-0" />
                Bangla Motore, Dhaka
              </span>
              <span>|</span>
              <a href="tel:+8801700304827" className="flex items-center gap-1 hover:underline text-base-content">
                <FiPhone className="w-3.5 h-3.5 text-[var(--accent-solid)] shrink-0" />
                +8801700304827
              </a>
              <span>|</span>
              <a href="mailto:tasnimbinten@gmail.com" className="flex items-center gap-1 hover:underline text-[var(--accent-solid)] font-semibold">
                <FiMail className="w-3.5 h-3.5 shrink-0" />
                tasnimbinten@gmail.com
              </a>
              <span>|</span>
              <a 
                href="https://www.linkedin.com/in/tasnim-binte-noor-nabila/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:underline text-[#0A66C2] font-semibold"
              >
                <FiLinkedin className="w-3.5 h-3.5 shrink-0" />
                <span>LinkedIn</span>
                <FiExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content border-b border-base-content/20 pb-1 mb-2.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-base-content/85 leading-relaxed">
              BBA student majoring in Finance with skills in Microsoft Excel, Power BI, graphic design, and content creation. Experienced in academic research, group projects, corporate event volunteering, and entrepreneurship training under SME Foundation. A punctual, honest, and hardworking individual interested in finance, business development, and continuous learning, with a commitment to contributing positively to the community.
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center justify-between border-b border-base-content/20 pb-1 mb-2.5">
              <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content">
                SKILLS
              </h2>
              <span className="text-[11px] sm:text-xs font-semibold text-base-content/60 font-mono">
                OCT 2024 - Present
              </span>
            </div>
            
            <ul className="space-y-2 text-xs sm:text-sm text-base-content/85 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-base-content/50 mt-1 font-bold">•</span>
                <div>
                  <strong className="text-base-content font-bold">Microsoft Excel:</strong> Intermediate – Pivot Tables, IF/AND/OR Functions, Lookup Functions, Data Cleaning, Data Analysis, Charts and Data Visualization.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base-content/50 mt-1 font-bold">•</span>
                <div>
                  <strong className="text-base-content font-bold">Microsoft Power BI:</strong> Basic/Intermediate – Data Visualization, Dashboard Creation and Data Reporting.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base-content/50 mt-1 font-bold">•</span>
                <div>
                  <strong className="text-base-content font-bold">Graphic Design:</strong> Canva, Adobe Photoshop (if applicable).
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base-content/50 mt-1 font-bold">•</span>
                <div>
                  <strong className="text-base-content font-bold">Content Creation:</strong> Photography, Photo Editing and Visual Content Development.
                </div>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content border-b border-base-content/20 pb-1 mb-3">
              EDUCATION
            </h2>
            
            <div className="space-y-3">
              {/* BRAC University */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <div className="flex items-start gap-2">
                    <span className="text-base-content/50 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-base-content">
                        Bachelor of Business Administration - BRAC University
                      </strong>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-base-content/70 sm:text-right pl-4 sm:pl-0">
                    OCT 2024- Present
                  </span>
                </div>
                <div className="pl-4 sm:pl-4 text-xs sm:text-sm text-base-content/80 mt-0.5">
                  3rd Year - Major in Finance , Minor in Business Analytics | <strong className="text-[var(--accent-solid)] font-bold">CGPA - 3.71/4.00</strong>
                </div>
              </div>

              {/* HSC - Viqarunnisa */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <div className="flex items-start gap-2">
                    <span className="text-base-content/50 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-base-content">
                        HSC - Viqarunnisa Noon School &amp; College | Science
                      </strong>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-base-content/70 sm:text-right pl-4 sm:pl-0">
                    2023
                  </span>
                </div>
              </div>

              {/* SSC - Viqarunnisa */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <div className="flex items-start gap-2">
                    <span className="text-base-content/50 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-base-content">
                        SSC - Viqarunnisa Noon School &amp; College | Science
                      </strong>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-base-content/70 sm:text-right pl-4 sm:pl-0">
                    2021
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content border-b border-base-content/20 pb-1 mb-2.5">
              CERTIFICATIONS
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-base-content/85">
              <li className="flex items-center gap-2">
                <span className="text-base-content/50 font-bold">•</span>
                <span>Grameenphone Academy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base-content/50 font-bold">•</span>
                <span>Brac University Business and Economics Forum</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base-content/50 font-bold">•</span>
                <span>SME Foundation</span>
              </li>
            </ul>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content border-b border-base-content/20 pb-1 mb-3">
              ACADEMIC PROJECTS
            </h2>
            
            <div className="space-y-3 text-xs sm:text-sm text-base-content/85 leading-relaxed">
              {/* Project 1 */}
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-base-content/50 mt-0.5 font-bold">•</span>
                  <div>
                    <strong className="text-base-content font-bold block">
                      A Term Paper on Corporate and Commercial Law
                    </strong>
                    <span className="text-base-content/75 block mt-0.5">
                      Contract, Misrepresentation, Fiduciary Duty and Agency in Corporate and Commercial Disputes: A Case-Based Analysis
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-base-content/50 mt-0.5 font-bold">•</span>
                  <div>
                    <strong className="text-base-content font-bold block">
                      Personal Branding through Linkedin
                    </strong>
                    <span className="text-base-content/75 block mt-0.5">
                      How university students can strategically use LinkedIn for personal branding, professional networking and career development to enhance visibility.
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-base-content/50 mt-0.5 font-bold">•</span>
                  <div>
                    <strong className="text-base-content font-bold block">
                      Understanding Cyberbullying in the Digital Era
                    </strong>
                    <span className="text-base-content/75 block mt-0.5">
                      Examines the causes and consequences of cyberbullying among Bangladeshi youth, focusing on its effects on mental health, academic performance, and social relationships.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extracurricular Involvement */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content border-b border-base-content/20 pb-1 mb-3">
              EXTRACURRICULAR INVOLVEMENT
            </h2>
            
            <div className="space-y-3 text-xs sm:text-sm text-base-content/85 leading-relaxed">
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-base-content/50 mt-0.5 font-bold">•</span>
                  <div>
                    <strong className="text-base-content font-bold block">
                      Senior Executive at Brac University Business And Economics Forum
                    </strong>
                    <span className="text-base-content/75 block mt-0.5">
                      Contributed to the forum's branding and promotional activities through creative content development and visual communication.
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2">
                  <span className="text-base-content/50 mt-0.5 font-bold">•</span>
                  <div>
                    <strong className="text-base-content font-bold">
                      Member of Judges &amp; Experts team of Hult Prize 2026-2027
                    </strong>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2">
                  <span className="text-base-content/50 mt-0.5 font-bold">•</span>
                  <div>
                    <strong className="text-base-content font-bold">
                      Creative &amp; Content Designer at BracU Mongol Tori
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-base-content border-b border-base-content/20 pb-1 mb-3">
              REFERENCES
            </h2>
            
            <div className="text-xs sm:text-sm text-base-content/85 leading-relaxed pl-3 border-l-2 border-[var(--accent-solid)]">
              <strong className="text-base-content font-bold block text-sm">
                Nadia Afroze Disha
              </strong>
              <span className="block text-base-content/80">Lecturer</span>
              <span className="block text-base-content/80">BRAC Business School</span>
              <a 
                href="mailto:afroze.disha@bracu.ac.bd" 
                className="text-[var(--accent-solid)] font-semibold hover:underline block mt-0.5"
              >
                afroze.disha@bracu.ac.bd
              </a>
            </div>
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
