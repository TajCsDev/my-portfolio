export type Project = {
  id: string;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  category: string;
  status: string;
  note?: string;
  images: { src: string; alt: string }[];
};

export const profile = {
  name: "Taj Almusawi",
  role: "Computer Science student",
  email: "almusawi.tajcs@gmail.com",
  github: "https://github.com/TajCsDev",
  linkedin: "https://linkedin.com/in/taj-almusawi",
  resume: "/documents/Taj_Almusawi_ATS_CV.pdf",
  bio: "Based in Saudi Arabia, I’m a Computer Science student focused on systems development, data analysis, and AI integration. I have practical experience in HR process automation, internal training systems, and web development. I enjoy turning operational needs into useful applications.",
};

export const skills = [
  {
    title: "Systems & interfaces",
    label: "01 / DEVELOPMENT",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Flutter & Dart",
    ],
    description:
      "Building web applications, responsive interfaces, and workflows around real operational needs.",
  },
  {
    title: "Data into understanding",
    label: "02 / DATA",
    items: ["Python", "SQL", "Data analysis", "Dashboard reporting"],
    description:
      "Connecting data with useful dashboards, filtered reports, and practical insights.",
  },
  {
    title: "Connected intelligence",
    label: "03 / INTEGRATION",
    items: ["Firebase", "REST APIs", "OpenAI API", "Git & GitHub"],
    description:
      "Bringing applications together through APIs, conversational tools, and connected services.",
  },
];

export const projects: Project[] = [
  {
    id: "industrial-training",
    title: "Industrial Training System",
    description:
      "An internal training management and tracking system for industrial factories. Training targets, course schedules, providers, compliance indicators, and CSV reporting in one place.",
    contribution:
      "Developing the dashboard interface and training-management workflows: factory filters, employee and course management, scheduling, and attendance. Working with training data to summarize KPIs, compare progress against targets, and provide filtered reports.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Data analysis"],
    category: "Systems",
    status: "In progress",
    note: "Ongoing cooperative-training project at Alrashed Industrial.",
    images: [
      {
        src: "/images/training.png",
        alt: "Training dashboard with KPIs, compliance progress, and pending actions",
      },
      {
        src: "/images/employees.png",
        alt: "Employee training targets by factory",
      },
      { src: "/images/courses.png", alt: "Searchable courses and schedules" },
      { src: "/images/providers.png", alt: "Trainer and provider management" },
      {
        src: "/images/reports.png",
        alt: "Filtered training reports and CSV export",
      },
    ],
  },
  {
    id: "vista",
    title: "Vista — AI Tourism Guide",
    description:
      "A team graduation project helping visitors discover Saudi Arabia through conversational recommendations, destination information, and photos.",
    contribution:
      "Developed the user interface, worked on the database, and integrated the chatbot using the OpenAI API as part of the graduation-project team.",
    technologies: ["FlutterFlow", "Dart", "Firebase", "OpenAI API"],
    category: "AI & Data",
    status: "Completed",
    note: "Live demo unavailable: the API is currently inactive.",
    images: [
      {
        src: "/images/vista.jpeg",
        alt: "Vista home screen with destinations and travel-interest categories",
      },
      {
        src: "/images/vista-destination.jpeg",
        alt: "Al Qarah Mountain destination information and photos",
      },
      {
        src: "/images/vista-chatbot.jpeg",
        alt: "Vista AI guide conversation about a destination",
      },
    ],
  },
  {
    id: "truthguard",
    title: "TruthGuard AI",
    description:
      "A Python dashboard combining news summaries, topic-based briefings, and API-supplied weather conditions. Explore source links and create a personalized news digest.",
    contribution:
      "Developed the dashboard and integrated the weather API using AI-assisted development.",
    technologies: ["Python", "LLMs", "Weather API", "AI-assisted development"],
    category: "AI & Data",
    status: "Project showcase",
    images: [
      {
        src: "/images/weather.png",
        alt: "TruthGuard weather dashboard with Riyadh conditions",
      },
      {
        src: "/images/digest.png",
        alt: "Personalized news digest based on selected interests",
      },
      {
        src: "/images/news.png",
        alt: "News briefing with summarized information",
      },
      {
        src: "/images/social.png",
        alt: "Collected social sources and original links",
      },
    ],
  },
];
