# Tasnim Binte Noor (Nabila) - BBA Portfolio & Strategy Showcase

An executive-grade, modern, and eye-catching portfolio website tailored for **Tasnim Binte Noor**, a high-achieving BBA student at **BRAC Business School, BRAC University** (completed 6 semesters) actively seeking **internships, campus ambassador invitations, and management trainee opportunities**.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **DaisyUI 5**, and **React Icons**.

---

## 🌟 Key Features & Highlights

1. **Role Fit & Opportunity Matcher (Recruiter Feature)**
   - Interactive role selector: *Brand & Marketing Intern*, *Campus Ambassador / Youth Lead*, *Management Trainee*, and *HR & People Ops Intern*.
   - Dynamically displays match percentage (e.g. 98%), tailored elevator pitch, competency alignment, and links to recommended project evidence.
   - 1-click CTA prefills the contact inquiry form with the exact role!

2. **Executive Hero & Recruiter Snapshot**
   - Live availability badge: `🟢 Open to Spring/Summer 2025-2026 Internships & Campus Ambassador Roles`.
   - Recruiter at-a-glance metrics strip: 6 Semesters Completed, 3.82 CGPA, 4+ Case Comps, 3+ Campus Leadership Roles.
   - Interactive profile card with floating accomplishment pills and direct LinkedIn connection.

3. **Academic Roadmap & Milestones (BRAC University)**
   - 6-semester progression journey broken into foundational, core business, and advanced specialization milestones.
   - Key coursework grade showcase (Brand Management, Consumer Psychology, IMC, Business Statistics, HRM, Finance).

4. **Campus Ambassadorship & Club Leadership**
   - Highlighting real youth leadership impact (BUBaC Senior Executive, BUMA Content Associate, Campus Ambassador with 800+ student reach).
   - Filterable by: *Campus Ambassador*, *Club Leadership*, *Mentorship*.

5. **Applied Business Case Studies (Flagship Projects)**
   - **Aura Glow**: FMCG Sustainable Skincare Launch Strategy (*1st Runner Up - National Case Pitch*).
   - **Campus Pulse**: FinTech Student Adoption & Gamified Referral Blueprint.
   - **WorkVibe**: Strategic HR Onboarding & Hybrid Workplace Culture.
   - **EcoRide Dhaka**: Electric Micro-Mobility Commercial & Financial Feasibility Study.
   - Interactive modal popup with complete problem, strategy, and quantifiable KPI deep dives.

6. **Interactive ATS Resume Modal & Print Engine**
   - Full digital resume preview with clean `@media print` styling for 1-click export to PDF or printing.

7. **Theme Switcher & Dynamic Color Palettes**
   - Light / Dark mode toggle (Night, Light, Cupcake, Luxury).
   - 4 Dynamic Luxury Accent Palettes:
     - 🌹 **Rose Luxe** (Default executive aesthetic)
     - 💎 **Emerald Pro** (Corporate & ESG focus)
     - 🔮 **Royal Indigo** (Modern Tech & MNC focus)
     - 👑 **Warm Gold** (Sophisticated leadership)

8. **Contact & Direct Inquiry Form**
   - Role checkboxes, direct university email, phone, location (Dhaka, Bangladesh), and LinkedIn.
   - Zero-dependency celebratory particle confetti on message submission!

---

## 🛠️ How to Customize the Data

All text, statistics, courses, case studies, and contact details are organized in a single file:
👉 **`src/data/portfolioData.js`**

### 1. Update Contact & Social Info
Open `src/data/portfolioData.js` and modify `personalInfo`:
```javascript
export const personalInfo = {
  fullName: "Tasnim Binte Noor",
  nickname: "Nabila",
  cgpa: "3.82", // update if needed
  email: "your-email@g.bracu.ac.bd",
  phone: "+880 1700-000000",
  linkedin: "https://www.linkedin.com/in/tasnim-binte-noor-nabila/",
  // ...
};
```

### 2. Add Your Real Photo
Place a square profile picture in the `public/` directory (e.g. `public/profile.jpg`), then set `avatar: "/profile.jpg"` in `personalInfo`.

### 3. Update Courses or Case Studies
Edit `academicJourney`, `campusAndLeadershipExperience`, or `flagshipProjects` in `src/data/portfolioData.js`.

---

## 🚀 Running the Project Locally

```bash
# Navigate to the portfolio folder
cd tasnim-noor-portfolio

# Start the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

```bash
npm run build
npm run start
```
