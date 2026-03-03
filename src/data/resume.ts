export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  bullets?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    company: "S&P Global",
    role: "Full Stack Developer",
    period: "October 2025 – Present",
    bullets: [
      "Added asynchronous drill down functionality to React Highchart components that enabled chart data drilling and enhanced load times by 45%.",
      "Refactored and improved reusable dropdown components to use React Portals instead of context, fixing numerous visualization bugs.",
      "Added React routing to multiple areas of the application – enhanced the user experience by improving shareability and user selection persistence.",
      "Added integration to internal AI tool (Spark AI) in Node.js to generate dynamic PDF summary documents that got autonomously attached to emails and sent to internal teams.",
      "Added Jira integration to automate manual processes in Node.js that included Epic creation & tracking.",
      "Added user collaboration features and real-time notifications using React, TypeScript, Node.js, and Socket.io.",
    ],
  },
  {
    company: "Tesla",
    role: "Software Development Engineer",
    period: "April 2024 – October 2025",
    bullets: [
      "Developed and launched a global dashboard from scratch using React, TypeScript and Node.js that is now used by 378 Tesla service centers worldwide, boosting capacity utilization by 38%.",
      "Architected and delivered a rich analytics dashboard with React and TypeScript that consumed data heavy endpoints and used Recharts for visualizations.",
      "Led the development of an AI agent chat bot UI in React, TypeScript and Node.js that automated technician reassignment, zone creation and customer query resolution – reducing operational costs by an estimated $3 million per quarter.",
      "Designed and built a dashboard used by 276 Tesla sales stores to manage, visualize and reassign extended demo drive appointments, cutting task management complexity by 40%.",
      "Built and published a reusable widget enabling different Tesla applications to integrate with the Tesla Scheduling System seamlessly.",
      "Optimized frontend component architecture and state management across React codebases, reducing development duplication by 32%.",
    ],
  },
  {
    company: "UnitedHealth Group",
    role: "Software Engineer",
    period: "May 2022 – March 2024",
    bullets: [
      "Engineered a high-performance dashboard that consumes data heavy APIs using React, TypeScript, and Node.js, built with Material UI data grids and react-chartjs-2 charts.",
      "Unified 22 disparate frontend applications into a single console using single-spa, reducing maintenance overhead across multiple teams.",
      "Developed an AI driven chat bot UI module with React, TypeScript and Node.js that answered user questions and surfaced live system status.",
      "Developed a customizable wrapper for the Material UI data filter component to handle specific business needs.",
      "Enhanced CI/CD pipelines for frontend deployments – reduced build times by 20% and lowered integration issues and rollbacks by 30%.",
      "Upgraded frontend error handling and monitoring to drive a 25% reduction in system downtime and 45% reduction in related operational costs.",
    ],
  },
  {
    company: "Randstad Technologies",
    role: "Sr. React Frontend Developer",
    period: "August 2021 – May 2022",
    bullets: [
      "Developed 20+ reusable React components, accelerating frontend development by 40%.",
      "Increased unit test coverage from 42% to 86% using Jest and React Testing Library, significantly improving code reliability.",
      "Shipped and debugged over 100,000 lines of React, TypeScript, and Node.js code, ensuring seamless feature rollouts.",
      "Engineered a fully reusable component library with React that accelerated team-wide delivery and scaled to serve multiple projects across business units.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Rutgers University",
    degree: "B.S.",
    period: "2014 – 2018",
  },
  {
    institution: "Springboard",
    degree: "Software Engineering Career Track, Certification",
    period: "2021",
    bullets: [
      "Completed a 9-month intensive boot-camp in Software Engineering methodologies and technologies.",
      "Mastered frontend development (HTML, CSS, JavaScript, React, Redux) and backend development (Node.js, Express, Python, Flask, SQL, PostgreSQL).",
      "Mastered Data Structures & Algorithms including Linked Lists, Stacks, Heaps, Queues, Graphs, Hash Tables, Binary Trees, and sorting algorithms.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "Redux",
      "React Query",
      "jQuery",
      "Material UI",
      "Recharts",
      "Highcharts",
      "Figma",
      "Enzyme",
      "React Testing Library",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Azure",
      "Hugging Face",
      "OpenAI",
      "Git",
      "Docker",
      "Kubernetes",
      "Kafka",
      "Jenkins",
    ],
  },
];

export const contactInfo = {
  email: "mostafa.nassr88@gmail.com",
  phone: "(732)318-9069",
  linkedin: "https://linkedin.com/in/mostafanassr",
  linkedinDisplay: "linkedin.com/in/mostafanassr",
};
