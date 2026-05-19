// ============================================================
//  Single Source of Truth — All portfolio content lives here
//  Edit this file to update anything on the site
// ============================================================

// ─── PERSONAL INFO ───────────────────────────────────────────
export const PERSONAL = {
  name: "Aditya Sanjay Shelke",
  shortName: "Aditya",
  title: "Full Stack Developer",
  tagline:
    "Results-driven Full Stack Developer with hands-on experience in designing and developing scalable web applications. Passionate about delivering efficient and user-centric solutions.",
  bio: "Results-driven Full Stack Developer with hands-on experience in designing and developing scalable web applications using React.js, Next.js, Node.js, Express.js, and SQL/NoSQL databases. Proficient in building responsive user interfaces, secure RESTful APIs, real-time systems, and AI-powered applications.",
  location: "Mumbai, Maharashtra",
  email: "adityasshelke02@gmail.com",
  phone: "+91 7499836847",
  cvUrl: "/Aditya_Shelke_Resume.pdf",
  cvDownloadName: "Aditya_Resume.pdf",
  heroImage: "/images/projects/Aditya.jpeg",
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIALS = {
  github: "https://github.com/aditya-shelke-18",
  linkedin: "https://www.linkedin.com/in/aditya-shelke-133256272/"
};

// ─── TYPEWRITER TITLES (Hero) ─────────────────────────────────
export const HERO_TITLES = [
  "Computer Engineer",
  "Software Developer",
];

// ─── HERO BADGES ─────────────────────────────────────────────
export const HERO_BADGES = [
  { label: "Experience", value: "1+ Yrs" },
  { label: "Projects Done", value: "5+" },
];

// ─── ABOUT — SKILL CATEGORIES ────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10 dark:bg-blue-400/10",
    border: "border-blue-500/20 dark:border-blue-400/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "React.js & Next.js", iconKey: "Globe" },
      { name: "JavaScript", iconKey: "Code2" },
      { name: "HTML5 & CSS3", iconKey: "Layers" },
      { name: "Tailwind CSS & MUI", iconKey: "Smartphone" },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    border: "border-emerald-500/20 dark:border-emerald-400/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Node.js & Express.js", iconKey: "Server" },
      { name: "REST APIs & JWT Auth", iconKey: "Code2" },
      { name: "Flask", iconKey: "Server" },
    ],
  },
  {
    title: "Database",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/10 dark:bg-violet-400/10",
    border: "border-violet-500/20 dark:border-violet-400/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "MySQL & MSSQL", iconKey: "Database" },
      { name: "MongoDB", iconKey: "Database" },
      { name: "PostgreSQL", iconKey: "Database" },
      { name: "Drizzle ORM", iconKey: "Database" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10 dark:bg-amber-400/10",
    border: "border-amber-500/20 dark:border-amber-400/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    skills: [
      { name: "Git & GitHub", iconKey: "GitBranch" },
      { name: "Docker", iconKey: "Award" },
      { name: "Postman & VS Code", iconKey: "Award" },
      { name: "Socket.IO & OpenAI API", iconKey: "Award" },
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
export const EXPERIENCES = [
  {
    type: "experience" as const,
    title: "Full Stack Developer",
    subtitle: "Uttam Infotech Global Ventures Pvt Ltd",
    duration: "Apr 2025 – Present",
    location: "Mumbai, India",
    description: [
      "Developing enterprise-level web applications including a Steel Flow Management System, Order Management System and E-commerce platform.",
      "Built responsive and cross-device compatible frontend interfaces using React.js, Next.js, Tailwind CSS, and MUI.",
      "Developed secure RESTful APIs with authentication and authorization using JWT.",
      "Integrated and optimized SQL and NoSQL databases for efficient data management and performance.",
      "Collaborated with cross-functional teams to deliver scalable and high-performance software solutions.",
    ],
  },
  {
    type: "experience" as const,
    title: "Web Development Intern",
    subtitle: "PHN Technology Pvt. Ltd.",
    duration: "2 Months Internship",
    location: "Mumbai, India",
    description: [
      "Worked on frontend web development using HTML, CSS, and JavaScript.",
      "Contributed to multiple projects focused on responsive design and user experience improvements.",
      "Strengthened understanding of modern web development practices and teamwork.",
    ],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
export const EDUCATIONS = [
  {
    type: "education" as const,
    title: "Bachelor of Engineering in Computer Engineering",
    subtitle: "Vishwaniketan's IMEET, Khalapur – University of Mumbai",
    duration: "2020 – 2024",
    location: "Mumbai, Maharashtra",
  },
];

// ─── PROJECTS ────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "AI Knowledge Base Chatbot",
    category: "Full Stack",
    description:
      "AI-powered chatbot with real-time conversational capabilities and secure knowledge-restricted responses for customer support.",
    tech: ["Next.js", "Vercel AI SDK", "PostgreSQL", "Drizzle ORM", "OpenAI API"],
    github: SOCIALS.github,
    live: "#",
    image: "/images/projects/ChatBot.webp",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "Real-Time Chat Application",
    category: "Full Stack",
    description:
      "Real-time chat app with JWT authentication, instant messaging, online user status, image sharing, and emoji reactions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    github: 'https://github.com/aditya-shelke-18/chatapp',
    live: "#",
    image: "/images/projects/ChatApp.webp",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Smart Agriculture System",
    category: "Full Stack",
    description:
      "IoT-based smart agriculture solution for crop monitoring and disease detection with KNN-based prediction models and real-time analytics dashboard.",
    tech: ["Next.js", "Flask", "Machine Learning", "IoT Sensors"],
    github: "",
    live: "#",
    image: "/images/projects/SAS.jpg",
    gradient: "from-emerald-500 to-teal-500",
  },
];

// ─── CONTACT INFO CARDS ───────────────────────────────────────
export const CONTACT_INFO = [
  {
    iconKey: "Phone",
    title: "Call Me",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
    color:
      "bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-400/20",
  },
  {
    iconKey: "Mail",
    title: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color:
      "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border-primary-500/20 dark:border-primary-400/20",
  },
  {
    iconKey: "MapPin",
    title: "Location",
    value: PERSONAL.location,
    href: "https://maps.google.com/?q=Mumbai",
    color:
      "bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 border-rose-500/20 dark:border-rose-400/20",
  },
];
