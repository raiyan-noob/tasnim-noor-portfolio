/**
 * Tasnim Binte Noor (Nabila) - Official Portfolio Data
 * ===================================================
 * Exact data mapped from her LinkedIn profile (linkedin.com/in/tasnim-binte-noor-nabila)
 * and BRAC University academic career.
 */

export const personalInfo = {
  fullName: "Tasnim Binte Noor",
  preferredName: "Tasnim Binte Noor",
  nickname: "Nabila",
  title: "BBA Student in Finance & Creative Designer",
  headline: "Business student | Finance Major | Creative Designer",
  university: "BRAC University",
  businessSchool: "BRAC Business School (BBS)",
  completedSemesters: 6,
  totalSemesters: 8,
  cgpa: "3.80",
  maxCgpa: "4.00",
  major: "Finance",
  secondaryFocus: "Creative Graphic Design & Entrepreneurship",
  location: "Dhaka, Bangladesh",
  status: "Open for Corporate Internships, Campus Ambassador & Job Opportunities",
  tagline: "Bridging quantitative financial acumen with creative graphic design and dynamic campus leadership.",
  
  bio: "I am Tasnim Binte Noor, a business student majoring in Finance at BRAC University, with a strong ambition to turn my academic knowledge into a successful professional career. I have a keen interest in creative designing, as I enjoy working on projects that allow me to combine creativity with practical thinking. At the same time, I am confident in my ability to work with numbers, analyze data, and approach problems logically. Beyond academics and professional interests, I have a passion for culinary arts and cooking, which reflects my creativity and attention to detail in everyday life.",
  
  // Real Contact Info from LinkedIn
  email: "tasnimbinten@gmail.com",
  secondaryEmail: "tasnim.binte.noor@g.bracu.ac.bd",
  phone: "+880 1703-004827",
  whatsapp: "+8801700000000",
  linkedin: "https://www.linkedin.com/in/tasnim-binte-noor-nabila/",
  facebook: "https://www.facebook.com/tasnim.noor.7505468",
  
  // Real Profile Photo added by user
  avatar: "/nabila.jpeg",
  avatarFallback: "TN",
};

export const heroStats = [
  { label: "Academic Major", value: "Finance", detail: "Analytical & Quantitative", icon: "FiTrendingUp" },
  { label: "Campus Leadership", value: "3 Clubs", detail: "BUBEF • EDF • Mongol Tori", icon: "FiUsers" },
  { label: "Core Competency", value: "Creative", detail: "Graphic Design & Strategy", icon: "FiFeather" },
  { label: "Alma Mater", value: "VNSC", detail: "Viqarunnisa Noon School & College", icon: "FiAward" },
];

export const corePillars = [
  {
    title: "Financial Analysis & Numerical Acumen",
    description: "Approaching complex business challenges with logical problem-solving, financial statement evaluation, budgeting, and data-backed quantitative forecasting.",
    icon: "FiPieChart",
    badge: "Major: Finance"
  },
  {
    title: "Creative Designing & Visual Branding",
    description: "Translating strategic messages into eye-catching graphic assets, promotional seminar posters, and brand visuals that engage audiences and drive event turnout.",
    icon: "FiFeather",
    badge: "Graphic Design"
  },
  {
    title: "Entrepreneurship & Club Leadership",
    description: "Active Senior Executive at BUBEF and Graphic Designer at EDF, organizing premier university seminars and collaborating across student communities.",
    icon: "FiZap",
    badge: "Executive Leadership"
  },
  {
    title: "Article Writing & Communication",
    description: "Crafting structured business articles, analytical reports, and executive presentations that communicate quantitative concepts with clarity and persuasion.",
    icon: "FiTarget",
    badge: "Content & Writing"
  }
];

export const academicJourney = {
  institution: "BRAC University",
  school: "BRAC Business School",
  degree: "Bachelor of Business Administration (BBA)",
  field: "Business Administration and Management, General",
  major: "Finance",
  duration: "October 2024 - October 2028",
  cgpa: "3.80 / 4.00",
  honors: ["Academic Merit Standing", "Active Campus Leader"],

  previousEducation: [
    {
      institution: "Viqarunnisa Noon School and College",
      credential: "Higher Secondary Certificate (HSC)",
      location: "Dhaka, Bangladesh",
      detail: "Premier academic institution known for competitive discipline and holistic excellence."
    },
    {
      institution: "Viqarunnisa Noon School and College",
      credential: "Secondary School Certificate (SSC)",
      location: "Dhaka, Bangladesh",
      detail: "Graduated with top academic standing and active participation in school co-curriculars."
    }
  ],
  
  semesterMilestones: [
    {
      semester: "Semesters 1 - 2: Business Core & Quantitative Logic",
      focus: "Introduction to Business, Business Mathematics, Financial Accounting, and Microeconomics.",
      highlight: "Mastered core financial mechanics, ledger valuation, and quantitative problem-solving.",
      badge: "Foundation"
    },
    {
      semester: "Semesters 3 - 4: Corporate Finance & Data Analysis",
      focus: "Managerial Finance, Macroeconomics, Business Statistics, Organizational Behavior, and Management Information Systems.",
      highlight: "Conducted empirical data research, joined BUBEF as an executive, and honed financial modeling.",
      badge: "Core Finance"
    },
    {
      semester: "Semesters 5 - 6: Advanced Financial Analysis & Creative Strategy",
      focus: "Corporate Finance, Investment Analysis, Financial Markets, Business Communications, and Entrepreneurship.",
      highlight: "Completed 6th semester milestone; promoted to Senior Executive at BUBEF and Graphic Designer at EDF.",
      badge: "Specialization"
    },
    {
      semester: "Semesters 7 - 8 (Upcoming): Senior Capstone & Corporate Internship",
      focus: "Strategic Financial Management, Portfolio Theory, and Corporate Internship Placement.",
      highlight: "Actively seeking Spring/Summer Corporate Internships across Financial Services, FMCG, and MNCs.",
      badge: "Upcoming"
    }
  ],

  notableCourses: [
    { name: "Financial Environment & Banking", code: "FIN201", grade: "A-" },
    { name: "Business Law & Corporate Governance", code: "BUS204", grade: "A-" },
    { name: "Computer Applications in Business", code: "MSC221", grade: "A" },
    { name: "Business Communication", code: "BUS201", grade: "A" },
    { name: "Marketing Management", code: "MKT301", grade: "A-" },
    { name: "Financial Accounting", code: "ACT201", grade: "A" },
    { name: "Human Resource Management", code: "MGT301", grade: "A" },
    { name: "Elements Of Statistics & Probability", code: "STA201", grade: "A-" }
  ]
};

export const campusAndLeadershipExperience = [
  {
    role: "Senior Executive",
    organization: "BRAC University Business & Economics Forum (BUBEF)",
    period: "November 2025 - Present (1 year 1 month)",
    location: "BRAC University, Dhaka",
    badge: "Senior Executive",
    type: "Flagship University Club",
    responsibilities: [
      "Leading executive operations, planning flagship business and economics events, and coordinating inter-departmental student initiatives.",
      "Liaising with industry keynote speakers, economists, and corporate executives for campus panels and workshops.",
      "Spearheading on-ground logistics, hospitality, and event execution for large student gatherings and academic conferences.",
      "Mentoring junior executive members in project management, team collaboration, and professional stakeholder communication."
    ],
    metrics: [
      { label: "Duration", value: "1+ Year" },
      { label: "Events Coordinated", value: "6+" },
      { label: "Community", value: "BUBEF" }
    ]
  },
  {
    role: "Graphic Designer",
    organization: "BRAC University Entrepreneurship Development Forum (EDF)",
    period: "2025 - Present",
    location: "BRAC University, Dhaka",
    badge: "Creative Design",
    type: "University Club",
    responsibilities: [
      "Designed high-impact visual posters, banners, and digital promotional assets for club-organized entrepreneurship seminars and bootcamps.",
      "Collaborated with the core marketing committee to ensure consistent brand identity and visual storytelling across university digital channels.",
      "Created promotional materials that directly contributed to increased student registration and event turnout across semesters."
    ],
    metrics: [
      { label: "Design Projects", value: "Multiple" },
      { label: "Turnout Boost", value: "High Impact" },
      { label: "Focus", value: "EDF Forum" }
    ]
  },
  {
    role: "General Member",
    organization: "BRACU Mongol Tori",
    period: "July 2026 - Present",
    location: "BRAC University, Dhaka",
    badge: "Innovation & Tech",
    type: "Innovation Team",
    responsibilities: [
      "Active member of BRAC University's internationally recognized Mongol Tori rover team.",
      "Participating in cross-disciplinary team sessions, supporting community outreach, and celebrating student technological innovation."
    ],
    metrics: [
      { label: "Team", value: "Mongol Tori" },
      { label: "Domain", value: "Rover Innovation" },
      { label: "Tenure", value: "Ongoing" }
    ]
  }
];

export const flagshipProjects = [
  {
    id: "commercial-law-term-paper",
    title: "Corporate & Commercial Law: Contract, Misrepresentation, Fiduciary Duty & Agency",
    category: "Corporate Law & Commercial Disputes",
    tag: "BUS204 Term Paper",
    course: "BUS204: Business Law and Corporate Governance",
    faculty: "Mr. Faiyaz Iqbal",
    date: "September 2026",
    summary: "Comprehensive case-based legal research analyzing contract formation, the objective test of agreement, remedies for fraudulent and negligent misrepresentation under the 1967 Act, strict fiduciary obligations, and apparent agency authority.",
    challenge: "Synthesizing seminal English commercial authorities (RTS Flexible Systems, Smith New Court, Royscot Trust, FHR European Ventures, Freeman & Lockyer) into an actionable corporate governance and risk allocation framework.",
    strategy: [
      "Analyzed contract formation and the objective test when operations precede formal agreement execution (RTS Flexible Systems v Molkerei Alois Müller).",
      "Compared fraudulent vs. negligent misrepresentation damages rules and the statutory 'fiction of fraud' under the 1967 Act (Smith New Court, Royscot Trust v Rogerson).",
      "Evaluated strict fiduciary liability, the 'no-profit' & 'no-conflict' rules, and proprietary constructive trust remedies for secret commissions (Regal Hastings, Cook v Deeks, FHR European Ventures).",
      "Deconstructed actual vs. ostensible authority in corporate transactions, evaluating how institutional acquiescence binds principals (Freeman & Lockyer, Hely-Hutchinson)."
    ],
    results: [
      "Authored an in-depth 28+ page legal analysis praised for doctrinal clarity and research rigor.",
      "Established essential corporate risk takeaways: pre-performance contract execution, factual diligence, and independent governance consent.",
      "Achieved top academic evaluation in Business Law & Corporate Governance (BUS204)."
    ],
    tools: ["Case Law Analysis", "Corporate Risk Allocation", "Statutory Interpretation", "Fiduciary Governance"],
    metrics: { roi: "Academic Distinction", reach: "BRAC Business School", sample: "8 Landmark Cases" },
    gradient: "from-blue-600 via-indigo-600 to-cyan-500"
  },
  {
    id: "linkedin-personal-branding-paper",
    title: "Personal Branding Through LinkedIn: Strategic Positioning & Signaling",
    category: "Human Resource Management & Digital Identity",
    tag: "MGT301 Term Paper",
    course: "MGT301: Human Resource Management",
    faculty: "Ms. Shahreen Shabnam (Adjunct Faculty)",
    team: "The Midnight Munchers (Tasnim Binte Noor, Fahmid Shahriar, Sushnato Drobonti)",
    date: "September 2026",
    summary: "Strategic research on how university students cultivate an authentic professional identity on LinkedIn, navigate recruiter search algorithms, and leverage weak ties in a skills-based hiring market.",
    challenge: "Transforming the perception of LinkedIn from a passive digital CV into an active personal branding and career-building platform backed by behavioral economics and sociological theories.",
    strategy: [
      "Synthesized Ries & Trout's Positioning Theory and Goffman's Impression Management into high-converting headline and summary frameworks.",
      "Applied Michael Spence's Signaling Theory to showcase how academic projects and verifiable skills serve as credible proxies for competence.",
      "Incorporated Granovetter's Strength of Weak Ties and Social Capital Theory for high-value professional network expansion.",
      "Evaluated modern talent acquisition shifts toward skills-based hiring and AI-driven candidate screening (37% enterprise adoption)."
    ],
    results: [
      "Delivered a comprehensive 38+ page strategic report with practical positioning tables and engagement guidelines.",
      "Demonstrated that complete LinkedIn profiles achieve 21x more views and 36x higher recruiter direct-message rates.",
      "Formulated a 5-stage career opportunity framework linking skill building with targeted application strategies."
    ],
    tools: ["Positioning Theory", "Signaling Theory", "Social Capital Analysis", "Talent Acquisition / ATS"],
    metrics: { roi: "Research Distinction", reach: "HRM Department", sample: "Multi-Theory Synthesis" },
    gradient: "from-indigo-600 via-violet-600 to-purple-500"
  },
  {
    id: "cyberbullying-empirical-research",
    title: "Understanding Cyberbullying in the Digital Era: Empirical Research & Analysis",
    category: "Business Communication & Research",
    tag: "BUS201 Term Paper",
    course: "BUS201: Business Communication & Research",
    faculty: "Nadia Afroze Disha (Lecturer)",
    team: "Tasnim Binte Noor, Fariya Shahriyar, Zaima Rahman, Humaira Raisa, Samia Arifin",
    date: "May 2026",
    summary: "Comprehensive mixed-methods empirical study examining the prevalence, emotional trauma, institutional gaps, and social dynamics of cyberbullying among young adults in Bangladesh.",
    challenge: "Collecting and analyzing primary empirical survey data on a sensitive topic characterized by severe underreporting, bystander apathy, and cultural normalization.",
    strategy: [
      "Executed primary quantitative survey across Bangladeshi university students, cross-analyzed with global data from WHO, UNICEF, and OECD.",
      "Applied Bandura's Social Learning Theory, Suler's Online Disinhibition Effect, and Cohen & Felson's Routine Activity Theory (guardianship gap).",
      "Identified severe mental health outcomes: low self-esteem (47.8%), anxiety (26.1%), and universal agreement on impaired academic performance (100%).",
      "Structured a multi-stakeholder intervention framework spanning digital literacy education, policy enforcement, and platform accountability."
    ],
    results: [
      "Published an exhaustive term paper featuring 11 analytical comparison tables and 7 conceptual workflow figures.",
      "Uncovered critical local insights: 54.5% direct exposure, 61.9% Facebook prevalence, and 63.6% stranger/unidentifiable aggressors.",
      "Commended for robust research methodology, data visualization, and actionable multi-sectoral recommendations."
    ],
    tools: ["Primary Survey Methodology", "Statistical Analysis", "Psychological Frameworks", "Policy Design"],
    metrics: { roi: "100% Correlation", reach: "Youth in BD", sample: "Primary Survey + WHO Lit" },
    gradient: "from-rose-500 via-pink-600 to-purple-600"
  },
  {
    id: "edf-visual-branding-creative-suite",
    title: "Visual Branding, Corporate Posters & Creative Design Portfolio",
    category: "Graphic Design & Visual Communications",
    tag: "Creative Design Showcase",
    organization: "BRAC University Business & Economics Forum (BUBEF)",
    role: "Graphic Designer & Creative Executive",
    summary: "Official portfolio of corporate placement posters, event announcements, and digital brand identities designed for BRAC University Business & Economics Forum (BUBEF).",
    challenge: "Creating professional, on-brand promotional posters that celebrate member achievements, respect corporate brand guidelines (Grameenphone, Bata), and capture campus engagement.",
    strategy: [
      "Designed polished congratulatory creatives celebrating BUBEF executive corporate placements at multinational giants (Grameenphone, Bata).",
      "Engineered modern typography hierarchies, balancing brand logos, formal corporate typography, and portrait cutouts.",
      "Crafted the official celestial visual theme and invitation typography for BUBEF Team's Day 'Festara'.",
      "Ensured consistent brand aesthetics and high-resolution asset delivery for digital social channels."
    ],
    results: [
      "Published across official BUBEF digital channels with high engagement from university peers and faculty.",
      "Strengthened forum identity and celebrated student executive transitions into corporate careers.",
      "Established standardized design templates adopted for executive congratulations and forum activations."
    ],
    tools: ["Graphic Design", "Canva Pro", "Adobe Photoshop", "Visual Hierarchy", "Typography", "Brand Identity"],
    metrics: { roi: "3 Featured Designs", reach: "Campus-Wide", sample: "Official BUBEF Media" },
    gradient: "from-pink-500 via-rose-500 to-amber-500",
    gallery: [
      {
        id: "gp-nextern",
        title: "Corporate Placement Poster — Grameenphone Nextern",
        role: "Marketing Division Placement",
        client: "BRAC University Business & Economics Forum (BUBEF)",
        honoree: "Tasfia Musfirat Ruhie (Former Executive, CAE)",
        image: "/designs/bubef-grameenphone-nextern.jpg",
        description: "Official celebration poster designed for BUBEF Executive Tasfia Musfirat Ruhie on being appointed as a Nextern in Grameenphone's Marketing Division. Features clean corporate typography, dual institutional branding (BUBEF & Grameenphone), balanced photographic cutout, and modern visual hierarchy."
      },
      {
        id: "bata-intern",
        title: "Corporate Placement Poster — Bata Bangladesh Intern",
        role: "HR & Admin Division Placement",
        client: "BRAC University Business & Economics Forum (BUBEF)",
        honoree: "Nazmus Sakib (Former Executive, HR & Admin)",
        image: "/designs/bubef-bata-intern.jpg",
        description: "High-impact social media congratulatory creative for Nazmus Sakib securing an internship at Bata Bangladesh. Combines dynamic curved wave geometry in signature Bata red, dot patterns, clean modern typography, and branded BUBEF lanyard detail."
      },
      {
        id: "festara-teams-day",
        title: "Event Announcement Poster — BUBEF Team's Day 'Festara'",
        role: "Flagship Forum Gathering & Celebration",
        client: "BRAC University Business & Economics Forum (BUBEF)",
        honoree: "Forum Executive Team & Members",
        image: "/designs/bubef-festara-teams-day.jpg",
        description: "Official event poster for BRAC University Business & Economics Forum's Team's Day 'Festara'. Crafted on a deep midnight starry watercolor texture with elegant sparkling cursive script typography, minimalist calendar/location icons, and formal institutional header."
      }
    ]
  }
  
];

export const skillCategories = [
  {
    name: "Finance, Data & Logical Analysis",
    icon: "FiPieChart",
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "Financial Statement & Ratio Analysis", tier: "Advanced", context: "DuPont, Liquidity & Solvency Diagnostics" },
      { name: "Working with Numbers & Data Modeling", tier: "Core Specialization", context: "Empirical Balance Sheets & Cash Flow" },
      { name: "Microsoft Excel (Financial Formulas)", tier: "Practical Mastery", context: "Formulas, Pivot Tables, Sensitivity Tables" },
      { name: "Logical Problem Solving", tier: "Analytical Core", context: "Quantitative Diagnostics & Case Structuring" },
      { name: "Budgeting & Cost Allocation", tier: "Applied Focus", context: "Portion Costing & Financial Planning" },
      { name: "Business Economics & Valuation", tier: "Academic Distinction", context: "Macro & Micro Decision Frameworks" }
    ]
  },
  {
    name: "Creative Designing & Visual Branding",
    icon: "FiFeather",
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "Graphic Designing & Event Posters", tier: "Expert Level", context: "Campus-Wide Seminar Visual Campaigns" },
      { name: "Visual Identity & Social Media Banners", tier: "Creative Focus", context: "Facebook, Instagram & Digital Displays" },
      { name: "Canva Pro & Layout Architecture", tier: "Advanced Mastery", context: "Multi-Format Promotional Suites" },
      { name: "Color Harmony & Aesthetic Presentation", tier: "Design Intuition", context: "Visual Hierarchy & Contrast Balance" },
      { name: "Typography & Brand Communications", tier: "Specialized", context: "Executive Slides & Editorial Styling" }
    ]
  },
  {
    name: "Entrepreneurship & Club Leadership",
    icon: "FiUsers",
    color: "from-purple-500 to-indigo-600",
    skills: [
      { name: "Executive Club Management (BUBEF)", tier: "Senior Executive", context: "Flagship Forum & Operations Leadership" },
      { name: "Entrepreneurship Development (EDF)", tier: "Creative Executive", context: "Seminar Planning & Student Engagement" },
      { name: "Event & Stage Logistics Coordination", tier: "Hands-On", context: "Large-Scale Summit Execution (300–500+)" },
      { name: "Cross-Functional Team Collaboration", tier: "Leadership", context: "Inter-Departmental Projects & Mentorship" },
      { name: "Industry Speaker & Guest Relations", tier: "Professional", context: "Corporate Dignitary Hospitality" }
    ]
  },
  {
    name: "Writing, Communication & AI Tools",
    icon: "FiTarget",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Academic & Business Article Writing", tier: "High Distinction", context: "Structured Term Papers & Research Reports" },
      { name: "Professional Business Pitching", tier: "Advanced", context: "Executive Presentation & Stakeholder Memos" },
      { name: "AI-Powered Communication & Productivity", tier: "Certified (GP Academy)", context: "AI-Assisted Research & Personal Branding" },
      { name: "Meticulous Attention to Detail", tier: "Core Strength", context: "Data Integrity & Precision Execution" },
      { name: "Adaptability & Strategic Thinking", tier: "Essential", context: "Fast-Paced Campus & Corporate Challenges" }
    ]
  }
];

export const softwareTools = [
  { name: "MS Excel", category: "Financial Modeling", proficiency: "Advanced" },
  { name: "Graphic Design", category: "Creative Visuals", proficiency: "Expert" },
  { name: "Canva Pro", category: "Posters & Banners", proficiency: "Expert" },
  { name: "MS PowerPoint", category: "Executive Pitching", proficiency: "Expert" },
  { name: "MS Word", category: "Article Writing", proficiency: "Expert" },
  { name: "Financial Ratios", category: "Data Analysis", proficiency: "Advanced" },
  { name: "Team Logistics", category: "Event Management", proficiency: "Experienced" },
  { name: "Google Workspace", category: "Collaboration", proficiency: "Advanced" }
];

export const recruiterMatcherRoles = [
  {
    id: "finance-intern",
    roleName: "Finance & Financial Analyst Intern",
    matchPercentage: 99,
    targetDepartments: ["Corporate Finance", "Financial Advisory", "Commercial Banking", "Treasury"],
    headline: "Finance Major at BRACU with Strong Numerical Logic & Data Acumen",
    pitch: "As a business student majoring in Finance at BRAC University who has completed 6 semesters, I combine confidence in working with numbers, financial analysis, and logical problem-solving with a relentless commitment to accuracy.",
    keySkills: ["Financial Analysis", "Working with Numbers", "Financial Statement Ratios", "MS Excel", "Logical Problem Solving"],
    recommendedProject: "Corporate Capital Structure & Financial Feasibility Modeling",
    recommendedProjectLink: "#financial-valuation-case",
    actionPrompt: "Interview for Finance Internship"
  },
  {
    id: "creative-design-intern",
    roleName: "Creative Design & Brand Communications Intern",
    matchPercentage: 96,
    targetDepartments: ["Marketing Communications", "Creative Agency", "Brand Design", "Social Media"],
    headline: "Proven Graphic Designer with Real Experience in Campus Organizations",
    pitch: "Having served as Graphic Designer for the BRAC University Entrepreneurship Development Forum (EDF), I excel at creating posters, banners, and digital assets that combine visual creativity with practical commercial thinking.",
    keySkills: ["Graphic Designing", "Poster & Banner Design", "Visual Branding", "Canva Pro", "Creative Thinking"],
    recommendedProject: "Entrepreneurship Seminar & Forum Visual Branding Campaign",
    recommendedProjectLink: "#edf-seminar-branding",
    actionPrompt: "Review Creative Portfolio & Connect"
  },
  {
    id: "campus-ambassador",
    roleName: "Campus Ambassador & Student Representative",
    matchPercentage: 98,
    targetDepartments: ["Youth Marketing", "Brand Activation", "Student Community", "EdTech / FinTech"],
    headline: "Senior Executive at BUBEF & Active Leader Across BRAC University",
    pitch: "As a Senior Executive at the BRAC University Business & Economics Forum (BUBEF) with over a year of active service and member of Mongol Tori, I have strong campus networks, event management experience, and peer influence to represent your brand with prestige.",
    keySkills: ["Campus Activation", "Event Organization", "BUBEF Leadership", "Student Engagement", "Public Relations"],
    recommendedProject: "BUBEF Annual Business & Economics Forum Operations",
    recommendedProjectLink: "#bubef-business-summit",
    actionPrompt: "Invite Tasnim as Campus Ambassador"
  },
  {
    id: "management-trainee",
    roleName: "Business Development & Operations Associate",
    matchPercentage: 94,
    targetDepartments: ["Business Operations", "Strategic Planning", "Project Management", "Consulting"],
    headline: "Holistic BBA Student Combining Analytical Rigor & Executive Discipline",
    pitch: "With an educational foundation from Viqarunnisa Noon School & College and 6 completed semesters at BRAC Business School, I bring structured organization, article writing skills, and high attention to detail to operations and corporate growth.",
    keySkills: ["Entrepreneurship Development", "Article Writing", "Project Management", "Attention to Detail", "Team Coordination"],
    recommendedProject: "BUBEF Annual Business & Economics Forum Operations",
    recommendedProjectLink: "#bubef-business-summit",
    actionPrompt: "Discuss Management / Operations Role"
  }
];

export const achievements = [
  {
    id: "bubef-senior-executive-promotion",
    title: "Official Promotion: Senior Executive at BUBEF",
    organization: "BRAC University Business & Economics Forum (BUBEF)",
    date: "November 2025 – Present (1+ Year)",
    category: "Executive Leadership",
    highlight: "Senior Executive",
    description: "Officially elevated to Senior Executive at BUBEF in recognition of proven operational excellence, consistent dedication, event leadership, and peer collaboration across campus.",
    icon: "FiAward",
    linkedinUrl: "https://lnkd.in/p/g5kaVXrz",
    badge: "Official Promotion",
    keyTakeaway: "Demonstrated leadership growth and team stewardship across 1+ year of executive club management."
  },
  {
    id: "sme-foundation-entrepreneurship-cert",
    title: "3-Day Business Planning & Strategy Certification",
    organization: "Small & Medium Enterprise Foundation (SME Foundation) & BBS",
    date: "18–20 June 2026",
    category: "Entrepreneurship & Venture Strategy",
    highlight: "SME Foundation Certified",
    description: "Completed intensive 3-day boot camp on Strategic Business Planning Fundamentals, Business Model Canvas development, financial forecasting, and preparing bankable business proposals with SME industry leaders.",
    icon: "FiZap",
    linkedinUrl: "https://lnkd.in/p/gsMqPV9T",
    badge: "Government & Academic Certification",
    keyTakeaway: "Mastered building bankable business plans, financial models, and go-to-market strategies."
  },
  {
    id: "gp-academy-ai-masterclasses",
    title: "AI-Powered Communication & Personal Branding Masterclasses",
    organization: "Grameenphone Academy (GP Academy)",
    date: "2026",
    category: "AI & Digital Skills",
    highlight: "3 Masterclasses Completed",
    description: "Successfully completed 3 specialized masterclasses at Grameenphone Academy: AI-Powered Communication, Network Smarter with AI, and Personal Branding in the AI Era mentored by Nabeelah Enayet Prova.",
    icon: "FiCheckCircle",
    linkedinUrl: "https://lnkd.in/p/gbmZ2Fa3",
    badge: "AI Future-Ready Certified",
    keyTakeaway: "Leveraging generative AI tools for enhanced professional networking, messaging, and digital branding."
  },
  {
    id: "uddokta-101-volunteer-appreciation",
    title: "Certificate of Appreciation — 'Uddokta 101' Initiative",
    organization: "BRAC Bank PLC & BRAC Business School (BRAC University)",
    date: "July 2026",
    category: "Community Impact & Social Leadership",
    highlight: "Social Impact Honor",
    description: "Awarded Certificate of Appreciation for contributing as a dedicated volunteer at 'Uddokta 101', supporting entrepreneurship training and witnessing firsthand the drive of future innovators.",
    icon: "FiStar",
    linkedinUrl: "https://lnkd.in/p/geiu_cEF",
    badge: "BRAC Bank Recognition",
    keyTakeaway: "Fostered community entrepreneurship and empowered grassroots business development."
  },
  {
    id: "corporate-curveball-volunteer-honor",
    title: "Volunteer Recognition — 'Corporate Curveball: Navigate the Unexpected'",
    organization: "BRAC University Business & Economics Forum (BUBEF)",
    date: "2026",
    category: "Corporate Event Operations",
    highlight: "BUBEF Flagship Event",
    description: "Recognized for vital volunteer contribution supporting BUBEF's high-profile corporate event, including sessions like 'Data Decoded' alongside industry leaders such as Md. Azimuddin Khan.",
    icon: "FiAward",
    linkedinUrl: "https://lnkd.in/p/gqC5tWw5",
    badge: "Event Leadership",
    keyTakeaway: "Coordinated corporate dignitary logistics and live audience engagement."
  },
  
];

export const testimonials = [
  {
    quote: "Tasnim has a unique ability to bridge numerical logic with genuine creative flair. In BUBEF, her reliability, executive presence, and dedication to flawless event logistics have been invaluable.",
    author: "BUBEF Executive Committee",
    designation: "BRAC University Business & Economics Forum",
    avatar: "📈",
    badge: "Club Endorsement"
  },
  {
    quote: "Her design contributions for our entrepreneurship seminars were both aesthetically modern and purposeful. Tasnim understands how to capture student attention through clean visual hierarchy.",
    author: "EDF Project Lead",
    designation: "BRAC University Entrepreneurship Development Forum",
    avatar: "🎨",
    badge: "Creative Endorsement"
  },
  {
    quote: "Tasnim's disciplined work ethic and attention to detail reflect her solid foundations from Viqarunnisa Noon and BRAC University. She approaches both numbers and creativity with utmost enthusiasm.",
    author: "Academic Mentor",
    designation: "Department of Finance, BRAC Business School",
    avatar: "🎓",
    badge: "Faculty Endorsement"
  }
];



export const resumeDetails = {
  summary: "Motivated 6th-semester BBA student at BRAC University majoring in Finance with strong background from Viqarunnisa Noon School and College. Combines logical problem solving and numerical confidence with a proven passion for graphic design and executive club leadership at BUBEF and EDF. Seeking internship and ambassador opportunities in dynamic corporate and financial environments.",
  contact: {
    email: "tasnimbinten@gmail.com",
    phone: "+880 1700-000000",
    linkedin: "linkedin.com/in/tasnim-binte-noor-nabila",
    location: "Dhaka, Bangladesh"
  }
};
