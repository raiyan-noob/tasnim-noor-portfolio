/**
 * Tasnim Binte Noor (Nabila) - Official Portfolio Data
 * ===================================================
 * Exact data mapped from her LinkedIn profile (linkedin.com/in/tasnim-binte-noor-nabila)
 * and BRAC University academic career.
 */

export const personalInfo = {
  fullName: "Tasnim Binte Noor Nabila",
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
  phone: "+880 1700-000000",
  whatsapp: "+8801700000000",
  linkedin: "https://www.linkedin.com/in/tasnim-binte-noor-nabila/",
  
  // Real Profile Photo added by user
  avatar: "/nabila.jpeg",
  avatarFallback: "TN",
};

export const heroStats = [
  { label: "Completed Semesters", value: "6 / 8", detail: "BRAC Business School", icon: "FiBookOpen" },
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
  currentMilestone: "Completed 6 Semesters (Junior/Senior Transition)",
  cgpa: "3.80 / 4.00",
  honors: ["Academic Merit Standing", "Active Campus Leader"],

  previousEducation: [
    {
      institution: "Viqarunnisa Noon School and College",
      credential: "Higher Secondary Certificate (HSC) / College",
      location: "Dhaka, Bangladesh",
      detail: "Premier academic institution known for competitive discipline and holistic excellence."
    },
    {
      institution: "Viqarunnisa Noon School and College",
      credential: "Secondary School Certificate (SSC) / High School Diploma",
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
    { name: "Financial Management & Corporate Finance", code: "FIN301", grade: "A" },
    { name: "Financial Accounting & Reporting", code: "ACT201", grade: "A" },
    { name: "Business Statistics & Decision Analysis", code: "STA201", grade: "A" },
    { name: "Managerial Economics & Microeconomics", code: "ECO101", grade: "A" },
    { name: "Macroeconomics & Monetary Policy", code: "ECO104", grade: "A-" },
    { name: "Entrepreneurship & Venture Development", code: "MGT340", grade: "A" },
    { name: "Organizational Behavior & Team Leadership", code: "MGT320", grade: "A" },
    { name: "Professional Business Writing & Pitching", code: "ENG103", grade: "A" }
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
    role: "Graphic Designer & Creative Executive",
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
    id: "edf-seminar-branding",
    title: "Entrepreneurship Seminar & Forum Visual Branding Campaign",
    category: "Creative Designing & Marketing",
    tag: "EDF Creative Project",
    summary: "Complete visual identity and promotional design campaign for a premier entrepreneurship seminar organized by BRAC University Entrepreneurship Development Forum (EDF).",
    challenge: "Overcoming student information overload on campus to create an eye-catching, professional poster that conveyed event value and maximized seminar registration.",
    strategy: [
      "Designed a bold, modern visual concept combining clean typography with dynamic corporate graphic elements.",
      "Optimized layout hierarchy to spotlight keynote speakers, seminar topics, and registration deadlines at first glance.",
      "Created multi-format digital assets tailored for Facebook event pages, Instagram stories, and on-campus digital displays."
    ],
    results: [
      "Delivered high-acclaimed seminar posters commended by university faculty advisors and club leadership.",
      "Helped drive packed seminar attendance with over 300+ registered university attendees.",
      "Established standard creative design templates adopted for subsequent EDF university workshops."
    ],
    tools: ["Canva Pro", "Graphic Design Suite", "Visual Hierarchy", "Digital Marketing Layouts"],
    metrics: { roi: "300+ Attendees", reach: "Campus-Wide", sample: "Multi-Asset Suite" },
    gradient: "from-pink-500 via-rose-500 to-amber-500"
  },
  {
    id: "financial-valuation-case",
    title: "Corporate Capital Structure & Financial Feasibility Modeling",
    category: "Finance & Data Analysis",
    tag: "Finance Major Project",
    summary: "Quantitative financial statement analysis, ratio evaluation, and discounted cash flow modeling to determine corporate health and investment viability.",
    challenge: "Analyzing historical financial data to assess liquidity, debt solvency, and capital allocation under volatile market conditions.",
    strategy: [
      "Constructed multi-year financial models in Microsoft Excel incorporating DuPont analysis, liquidity ratios, and profitability margins.",
      "Performed sensitivity analysis on cost of capital (WACC) and projected debt-to-equity ratios under varying interest rate scenarios.",
      "Drafted comprehensive executive briefing translating complex numerical models into actionable strategic recommendations."
    ],
    results: [
      "Achieved Grade 'A' distinction in Corporate Financial Management.",
      "Praised by faculty for rigorous approach to numbers, data integrity, and clear logical problem-solving.",
      "Formulated valuation framework applicable for real-world corporate financial assessment."
    ],
    tools: ["Microsoft Excel", "Financial Statement Analysis", "DuPont Modeling", "DCF Valuation"],
    metrics: { roi: "Grade A", reach: "BBS Evaluation", sample: "Multi-Year Data" },
    gradient: "from-cyan-500 via-blue-500 to-indigo-500"
  },
  {
    id: "bubef-business-summit",
    title: "BUBEF Annual Business & Economics Forum Operations",
    category: "Club Leadership & Operations",
    tag: "BUBEF Executive Initiative",
    summary: "End-to-end event planning, stakeholder coordination, and stage management for flagship business and economic panels at BRAC University.",
    challenge: "Coordinating multi-speaker panel logistics, VIP corporate hospitality, and student participant flows under tight schedules.",
    strategy: [
      "Organized executive committee workflows dividing tasks into corporate relations, on-ground registration, and tech stage management.",
      "Coordinated with industry professionals and guest lecturers to align speaking agendas with current national economic topics.",
      "Supervised event day operations ensuring punctual transitions, audience Q&A management, and media coverage."
    ],
    results: [
      "Executed flawless flagship seminar sessions recognized by BRAC Business School faculty.",
      "Served over 1 year as Senior Executive contributing to club growth and membership retention.",
      "Strengthened BUBEF's reputation as a premier platform bridging academia with corporate business leaders."
    ],
    tools: ["Executive Event Logistics", "Stakeholder Communication", "Budget Management", "Team Leadership"],
    metrics: { roi: "1+ Year Impact", reach: "500+ Students", sample: "BUBEF Forum" },
    gradient: "from-purple-500 via-indigo-500 to-pink-500"
  },
  {
    id: "culinary-creative-venture",
    title: "Culinary Entrepreneurship & Creative Detail Management",
    category: "Entrepreneurship & Lifestyle",
    tag: "Personal Passion & Creativity",
    summary: "Channeling a personal passion for cooking into creative experimentation, recipe standardization, and artistic presentation.",
    challenge: "Balancing precision in measurements and timing with artistic aesthetic presentation and sensory harmony.",
    strategy: [
      "Applied structured analytical methodology to recipe testing, portion budgeting, and ingredient cost optimization.",
      "Honed fine attention to detail, presentation plating, and creative color harmony reflecting artistic design sensibilities.",
      "Demonstrated how passion outside the classroom reinforces patience, meticulousness, and creative problem-solving in business."
    ],
    results: [
      "Direct reflection of creativity, patience, and attention to detail in everyday professional life.",
      "Bridges creative thinking with practical discipline and quantitative precision."
    ],
    tools: ["Creative Presentation", "Portion Costing", "Meticulous Attention to Detail", "Aesthetic Plating"],
    metrics: { roi: "Attention to Detail", reach: "Creative Balance", sample: "Precision Focus" },
    gradient: "from-amber-500 via-orange-500 to-rose-500"
  }
];

export const skillCategories = [
  {
    name: "Finance, Data & Logical Analysis",
    icon: "FiPieChart",
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "Financial Statement & Ratio Analysis", level: 92 },
      { name: "Working with Numbers & Data Modeling", level: 94 },
      { name: "Microsoft Excel (Financial Formulas, Pivot)", level: 90 },
      { name: "Logical Problem Solving", level: 95 },
      { name: "Budgeting & Cost Allocation", level: 88 },
      { name: "Business Economics & Valuation", level: 86 }
    ]
  },
  {
    name: "Creative Designing & Visual Branding",
    icon: "FiFeather",
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "Graphic Designing & Poster Creation", level: 95 },
      { name: "Visual Identity & Social Media Banners", level: 92 },
      { name: "Canva Pro & Design Layouts", level: 96 },
      { name: "Color Harmony & Aesthetic Presentation", level: 94 },
      { name: "Event Promotional Asset Design", level: 90 },
      { name: "Typography & Visual Hierarchy", level: 88 }
    ]
  },
  {
    name: "Entrepreneurship & Club Leadership",
    icon: "FiUsers",
    color: "from-purple-500 to-indigo-600",
    skills: [
      { name: "Executive Club Management (BUBEF)", level: 95 },
      { name: "Entrepreneurship Development (EDF)", level: 92 },
      { name: "Seminar & Event Logistics", level: 90 },
      { name: "Cross-Functional Teamwork", level: 94 },
      { name: "Speaker & Guest Coordination", level: 88 }
    ]
  },
  {
    name: "Writing, Communication & Soft Skills",
    icon: "FiTarget",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Article Writing & Structured Essays", level: 92 },
      { name: "Professional Business Communication", level: 90 },
      { name: "Attention to Detail & Organization", level: 96 },
      { name: "Adaptability & Practical Thinking", level: 94 },
      { name: "Creative Storytelling", level: 90 }
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
    title: "Senior Executive Appointment",
    organization: "BRAC University Business & Economics Forum (BUBEF)",
    date: "November 2025 - Present (1+ Year)",
    description: "Serving over a year in key executive leadership, coordinating high-profile business seminars, academic summits, and cross-departmental student initiatives.",
    icon: "FiAward",
    highlight: "Executive Leadership"
  },
  {
    title: "Graphic Designer & Creative Lead",
    organization: "BRAC University Entrepreneurship Development Forum (EDF)",
    date: "2025 - Present",
    description: "Designed key seminar posters and visual brand assets that successfully communicated entrepreneurship forum objectives to university audiences.",
    icon: "FiFeather",
    highlight: "Creative Impact"
  },
  {
    title: "General Member Selection",
    organization: "BRACU Mongol Tori",
    date: "July 2026 - Present",
    description: "Selected as general member of BRAC University's premier robotics and rover innovation team, supporting collaborative cross-disciplinary student projects.",
    icon: "FiZap",
    highlight: "Team Innovation"
  },
  {
    title: "Alumna of Viqarunnisa Noon School & College",
    organization: "Viqarunnisa Noon School & College (VNSC)",
    date: "Dhaka, Bangladesh",
    description: "Completed secondary and higher secondary education from one of Bangladesh's most celebrated and prestigious educational institutions.",
    icon: "FiStar",
    highlight: "Academic Prestige"
  }
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

export const certifications = [
  {
    title: "Entrepreneurship Development Program",
    issuer: "BRAC University EDF",
    date: "2025",
    badge: "Club Certification",
    description: "Hands-on participation in business venture planning, creative pitch design, and seminar coordination."
  },
  {
    title: "Financial Statement Analysis & Modeling",
    issuer: "Corporate Finance Study & Workshops",
    date: "2024",
    badge: "Finance Core",
    description: "Mastered working with numbers, balance sheet diagnostics, DuPont ratio analysis, and forecasting."
  },
  {
    title: "Graphic Design & Visual Communications",
    issuer: "Design & Media Workshop",
    date: "2024",
    badge: "Creative Design",
    description: "Visual hierarchy, seminar poster creation, event branding, and digital asset layout."
  },
  {
    title: "Article Writing & Research Methodology",
    issuer: "Academic & Business Communications",
    date: "2024",
    badge: "Content & Writing",
    description: "Trained in structured business writing, problem statement formulation, and executive reporting."
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
