export interface CareerEntry {
  position: string;
  company: string;
  period: string;
  description: string;
  side: "left" | "right";
}

export const careerData: CareerEntry[] = [
  {
    position: "Completed Class 12",
    company: "Anand Niketan Maninagar",
    period: "2024",
    description: "Completed my Class 12 education and began my journey toward Computer Science and technology.",
    side: "left"
  },
  {
    position: "Started B.Tech CSE",
    company: "LJ University",
    period: "2024",
    description: "Started my B.Tech in Computer Science & Engineering, building a foundation in programming, databases, data structures, and software development.",
    side: "right"
  },
  {
    position: "Full-Stack Development",
    company: "Web Development & Projects",
    period: "2025",
    description: "Started building practical full-stack applications while exploring frontend, backend, databases, APIs, and modern web technologies.",
    side: "left"
  },
  {
    position: "Started AI/ML Journey",
    company: "Artificial Intelligence & Machine Learning",
    period: "2025",
    description: "Began developing my skills in AI and Machine Learning through structured learning, experimentation, and hands-on projects.",
    side: "right"
  },
  {
    position: "Built Multiple Projects",
    company: "Projects & Real-World Development",
    period: "2026",
    description: "Built multiple projects across full-stack development, AI/ML, geospatial applications, and software engineering while applying my skills to practical problems.",
    side: "left"
  },
  {
    position: "Frontend Developer Intern",
    company: "Kiara TechX",
    period: "2026 – Present",
    description: "Currently working as a Frontend Developer Intern at Kiara TechX, building user interfaces as part of the development team.",
    side: "right"
  },
  {
    position: "Technical Team Core Member",
    company: "AWS Student Builder Group, LJIET",
    period: "2026 – Present",
    description: "Core member of the technical team. I help run AWS sessions and hands-on workshops for students and maintain the group's official website.",
    side: "left"
  }
];
