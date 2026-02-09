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
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "New York, NY",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to implement pixel-perfect UIs.",
    achievements: [
      "Built 15+ production applications",
      "Reduced bug reports by 50%",
      "Implemented automated testing suite",
    ],
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions",
    period: "2018 - 2020",
    location: "Austin, TX",
    description:
      "Specialized in React development and responsive web design. Created reusable component libraries and optimized web performance.",
    achievements: [
      "Created component library used across 10+ projects",
      "Improved page load times by 35%",
      "Mentored 3 junior developers",
    ],
  },

  {
    title: "Intern - Web Development",
    company: "TechInterns Co.",
    period: "2017 - 2018",
    location: "Remote",
    description:
      "Assisted in development of client websites and internal tools. Gained experience in HTML, CSS, and JavaScript.",
    achievements: [
      "Contributed to 5+ client projects",
      "Learned modern web development practices",
      "Participated in code reviews and team meetings",
    ],
  },
];
