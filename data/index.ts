import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

export const skills = [
  { name: "JavaScript", icon: Code, level: 95 },
  { name: "TypeScript", icon: Code, level: 90 },
  { name: "React", icon: Code, level: 95 },
  { name: "Next.js", icon: Globe, level: 90 },
  { name: "Node.js", icon: Server, level: 85 },
  { name: "Python", icon: Code, level: 80 },
  { name: "PostgreSQL", icon: Database, level: 85 },
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "AWS", icon: Server, level: 75 },
  { name: "Docker", icon: Server, level: 70 },
];

export const projects = [
  {
    title: "AI Chat Assistant for your health",
    description:
      "An intelligent chat assistant powered by OpenAI's GPT API with custom training data and context-aware responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    github: "https://github.com/Rohiyadaop/Medical_ai_agent",
    live: "https://medical-ai-agent-ruddy.vercel.app/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Dinner Talk",
    description:
      "A conversational web application designed for casual discussions and real-time interaction. Focuses on smooth UI, responsive design, and user-friendly chat experience.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github: "",
    live: "https://dinnertalkplatform-rohit.vercel.app/dashboard",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce web application featuring product listings, user authentication, cart functionality, and secure checkout. Designed with a responsive UI and scalable backend architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Rohiyadaop/ecommerce_website", // update if needed
    live: "https://ecommercewebsitedevelopment-alpha.vercel.app/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging web app with user authentication and instant message delivery. Built to explore modern frontend frameworks and real-time communication concepts.",
    tech: ["React", "JavaScript", "Firebase", "CSS"],
    github: "https://github.com/Rohiyadaop/quick_chat_app",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },    
  {
    title: "Titan – AI Voice Assistant",
    description:
      "A desktop-based AI voice assistant capable of executing system commands, opening applications and websites, and having natural conversations using Generative AI.",
    tech: ["Python", "Speech Recognition", "Google Gemini API", "Automation"],
    github: "",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  
  {
    title: "AI Chatbot Interview Application",
    description:
      "An AI-powered interview preparation app built using Streamlit. Supports interactive question-answer sessions and was later migrated from OpenAI API to Google Gemini.",
    tech: ["Python", "Streamlit", "Google Gemini", "NLP"],
    github: "",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with user authentication, markdown support, and social sharing capabilities.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
];
export const experience = [
  {
    title: "AI Health Chat Assistant (Full Stack AI Project)",
    company: "Personal Project",
    period: "Jan 2026 – Present",
    location: "Remote",
    description:
      "Developed an AI-powered healthcare chatbot using FastAPI and React with real-time communication via WebSockets. Integrated OpenAI GPT API to provide context-aware medical responses.",
    achievements: [
      "Integrated OpenAI GPT API with custom medical prompt engineering",
      "Implemented real-time chat using WebSockets",
      "Built scalable backend using FastAPI (async)",
      "Designed responsive UI in React and deployed on Vercel",
      "Handled secure API key management and environment configuration"
    ]
  },
  {
    title: "Titan – Desktop Voice Assistant",
    company: "AI Automation Project",
    period: "Dec 2025 – Jan 2026",
    location: "Personal Development",
    description:
      "Built an intelligent desktop voice assistant in Python capable of executing system commands and generating AI-based responses using Google Generative AI (Gemini).",
    achievements: [
      "Implemented speech recognition and text-to-speech system",
      "Automated system commands (open apps, websites, diagnostics)",
      "Integrated Gemini AI for conversational capabilities",
      "Built modular command processing architecture",
      "Improved natural language handling using prompt engineering"
    ]
  },
  {
    title: "Smart Indoor Farm Control System",
    company: "Academic Project",
    period: "Nov 2025",
    location: "University Project",
    description:
      "Designed an intelligent environmental monitoring system for indoor farming to control temperature and humidity using sensor data processing and automation logic.",
    achievements: [
      "Implemented sensor data cleaning and validation",
      "Designed threshold-based automation logic",
      "Simulated IoT-based smart greenhouse model",
      "Optimized environmental decision algorithms",
      "Documented full system architecture and workflow"
    ]
  },
  {
    title: "Minimal Developer Portfolio (Next.js)",
    company: "Frontend Project",
    period: "Oct 2025",
    location: "Personal Project",
    description:
      "Created a sleek, high-performance portfolio website using Next.js to showcase projects, skills, and achievements with modern UI and optimized SEO.",
    achievements: [
      "Built fully responsive design using Tailwind CSS",
      "Optimized performance and SEO configuration",
      "Integrated project showcase sections dynamically",
      "Deployed production-ready app on Vercel",
      "Implemented modern UI with clean minimal aesthetics"
    ]
  },
  {
    title: "Competitive Programming & Problem Solving",
    company: "Self-Driven Learning",
    period: "2024 – Present",
    location: "Online",
    description:
      "Actively solving advanced algorithmic problems focusing on data structures, graph algorithms, dynamic programming, and optimization techniques.",
    achievements: [
      "Solved 300+ problems on LeetCode",
      "Strong understanding of Dijkstra, DP, Greedy & Graph theory",
      "Practicing GATE-level CS fundamentals",
      "Improved time & space complexity optimization skills",
      "Participated in competitive programming contests"
    ]
  }
  
];
