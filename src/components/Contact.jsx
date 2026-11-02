"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiSend, 
  FiCheckCircle
} from "react-icons/fi";

// Lightweight zero-dependency celebration confetti
function triggerConfetti() {
  if (typeof window === "undefined") return;
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "999999";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 90 }).map(() => ({
    x: canvas.width / 2,
    y: canvas.height * 0.55,
    vx: (Math.random() - 0.5) * 18,
    vy: (Math.random() - 1.2) * 18,
    size: Math.random() * 8 + 4,
    color: ["#fb7185", "#f43f5e", "#f59e0b", "#10b981", "#6366f1", "#38bdf8", "#fbbf24"][
      Math.floor(Math.random() * 7)
    ],
    rotation: Math.random() * 360,
    rSpeed: (Math.random() - 0.5) * 12,
    alpha: 1,
  }));

  const startTime = Date.now();

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45;
      p.rotation += p.rSpeed;
      p.alpha = Math.max(0, 1 - elapsed / 2500);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (elapsed < 2500) {
      requestAnimationFrame(animate);
    } else {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    }
  };

  animate();
}

export default function Contact({ preselectedRole }) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "Marketing Internship",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedRole) {
      setFormData(prev => ({
        ...prev,
        inquiryType: preselectedRole,
        message: `Hello Tasnim,\n\nI was impressed by your profile and would like to discuss an opportunity regarding the ${preselectedRole} position.`
      }));
    }
  }, [preselectedRole]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry: ${formData.inquiryType} from ${formData.name} (${formData.organization})`
    );
    const body = encodeURIComponent(
      `Hello Tasnim,\n\n` +
      `You have received a new inquiry via your portfolio website:\n\n` +
      `From: ${formData.name}\n` +
      `Organization: ${formData.organization}\n` +
      `Email: ${formData.email}\n` +
      `Focus Area: ${formData.inquiryType}\n\n` +
      `Message Details:\n${formData.message}\n\n` +
      `---------------------------------\n` +
      `Sent via Tasnim Binte Noor Portfolio`
    );

    // Direct routing to her Gmail account
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    triggerConfetti();
  };

  const inquiryTypes = [
    "Internship",
    "Campus Ambassador Role",
    "Job Opportunity",
    "Others"
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow w-64 h-64 sm:w-96 sm:h-96 -bottom-20 -left-20 opacity-25" />
      <div className="ambient-glow w-64 h-64 sm:w-96 sm:h-96 top-20 -right-20 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent-solid)] mb-2 block">
            Let&apos;s Build Together
          </span>
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-base-content tracking-tight">
            Connect &amp; Start a Conversation
          </h2>
          <p className="text-xs sm:text-base text-base-content/70 mt-2 sm:mt-3">
            Open to corporate internships, campus ambassador invitations, and full-time opportunities. Drop a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Direct Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 w-full">
            
            <div className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-lg">
              <h3 className="font-display font-bold text-base sm:text-lg text-base-content mb-3 sm:mb-4">
                Direct Contact Channels
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-base-100 hover:bg-base-200/80 border border-base-content/5 transition-all group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-solid)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-base-content/50 uppercase">
                      Email
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-base-content truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-base-100 hover:bg-base-200/80 border border-base-content/5 transition-all group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-base-content/50 uppercase">
                      LinkedIn Profile
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-base-content truncate">
                      tasnim-binte-noor-nabila
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-base-100 border border-base-content/5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-base-content/50 uppercase">
                      Direct Contact
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-base-content truncate">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-base-100 border border-base-content/5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                    <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-base-content/50 uppercase">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-base-content truncate">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-base-content/10 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-8 sm:py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                    <FiCheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-base-content mb-2">
                    Inquiry Prepared for Tasnim's Gmail!
                  </h3>
                  <p className="text-xs sm:text-sm text-base-content/75 max-w-md mb-6 leading-relaxed">
                    Your message has been addressed directly to <strong className="text-base-content font-semibold">{personalInfo.email}</strong>. If your email application didn't open automatically, you can dispatch it directly via Gmail:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent(`Portfolio Inquiry: ${formData.inquiryType} from ${formData.name}`)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.organization})\nEmail: ${formData.email}\nFocus Area: ${formData.inquiryType}\n\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#EA4335] text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-[#EA4335]/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <FiMail className="w-4 h-4 shrink-0" />
                      <span>Open in Gmail Webmail</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-base-200 hover:bg-base-300 text-xs font-semibold text-base-content transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-base-content">
                      Send a Direct Message
                    </h3>
                    <span className="text-[10px] sm:text-[11px] text-base-content/50">
                      All fields required
                    </span>
                  </div>

                  {/* Inquiry Type Chips */}
                  <div>
                    <label className="text-[10px] sm:text-xs font-semibold text-base-content/70 uppercase tracking-wider block mb-2">
                      Opportunity Focus:
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-all ${
                            formData.inquiryType === type
                              ? "bg-[var(--accent-solid)] text-white shadow-sm"
                              : "bg-base-200 hover:bg-base-300 text-base-content/70"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs font-semibold text-base-content/70 block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Rahman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 sm:px-3.5 py-2.5 rounded-xl bg-base-100 border border-base-content/15 text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-solid)] transition-colors min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-base-content/70 block mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Unilever / BAT / bKash"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3 sm:px-3.5 py-2.5 rounded-xl bg-base-100 border border-base-content/15 text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-solid)] transition-colors min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-base-content/70 block mb-1">
                      Professional Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-3.5 py-2.5 rounded-xl bg-base-100 border border-base-content/15 text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-solid)] transition-colors min-h-[44px]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-base-content/70 block mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about the role, timelines, or your questions for Tasnim..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 sm:px-3.5 py-2.5 rounded-xl bg-base-100 border border-base-content/15 text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-solid)] transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-95 shadow-md shadow-[var(--accent-glow)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 min-h-[46px] active:scale-98"
                  >
                    <FiSend className="w-4 h-4 shrink-0" />
                    <span>Send Message to Tasnim</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
