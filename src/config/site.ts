import { TechItem, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Yash Kshatriya',
  firstName: 'Yash',
  lastName: 'Kshatriya',
  headline: 'FULL-STACK • REACT • AWS • AHMEDABAD',
  role: 'Full-Stack Developer',
  subrole: 'Computer Science Engineering Student',
  statement: 'Building intelligent software, exploring AI, and turning ideas into real-world products.',
  email: import.meta.env.VITE_EMAIL || 'kshatriyayash19@gmail.com',
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'Yash19k',
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/Yash_Kshatriya_Resume.pdf',
  socials: {
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Yash19k',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/yashkshatriya19/',
    email: `mailto:${import.meta.env.VITE_EMAIL || 'kshatriyayash19@gmail.com'}`,
  },
};

export const aboutContent = {
  subtitle: "Computer Science student at LJ University. I learn by building things and putting them online.",
  fullText: "I build full-stack web apps: React front ends, Node and Python backends, serverless AWS and the ML models behind them.",
  highlightedWords: ["full-stack", "React", "Node", "Python", "serverless", "AWS", "ML"],
  secondParagraph:
    "Lately that has meant a quiz game that runs 250 players at once with no servers, a file-sharing service whose links expire on schedule, and a crop-disease classifier that reaches 98% macro-F1.",
  subBio:
    "I'm a full-stack developer and B.Tech Computer Science student at LJ University (LJIET) in Ahmedabad. I work as a Frontend Developer Intern at Kiara TechX and I'm a core member of the technical team at the AWS Student Builder Group, LJIET, where I help run AWS sessions and workshops and maintain the group's website.",
  focusAreas: [
    {
      title: "Full-stack web",
      body: "React and TypeScript on the front end, Django or Node APIs and PostgreSQL behind them.",
      seenIn: "Obrix, DropVault",
    },
    {
      title: "Serverless on AWS",
      body: "Lambda, API Gateway, DynamoDB and S3, with the infrastructure written as code in Terraform and SAM.",
      seenIn: "Quibble, DropVault",
    },
    {
      title: "Machine learning",
      body: "Training and evaluating models in PyTorch and scikit-learn, then serving them behind an API.",
      seenIn: "AgriSmart AI",
    },
    {
      title: "Geospatial data",
      body: "PostGIS queries and Leaflet maps for scoring and comparing real-world locations.",
      seenIn: "Obrix",
    },
  ],
};

export const techStackData: TechItem[] = [
  // Languages
  { name: 'Python', category: 'languages', role: 'ML • Data • Backend', iconName: 'python', highlight: true },
  { name: 'Java', category: 'languages', role: 'OOP • Core Architecture', iconName: 'java' },
  { name: 'C', category: 'languages', role: 'Systems • Algorithms', iconName: 'c' },
  { name: 'JavaScript', category: 'languages', role: 'Frontend • Interactive Web', iconName: 'javascript' },
  { name: 'TypeScript', category: 'languages', role: 'Type-Safe Applications', iconName: 'typescript', highlight: true },
  { name: 'SQL', category: 'languages', role: 'Relational Queries • PostGIS', iconName: 'sql', highlight: true },

  // AI / ML
  { name: 'PyTorch', category: 'aiml', role: 'Deep Learning • Neural Nets', iconName: 'pytorch', highlight: true },
  { name: 'TensorFlow', category: 'aiml', role: 'Model Training • ML', iconName: 'tensorflow' },
  { name: 'Scikit-learn', category: 'aiml', role: 'Classical ML • Pipelines', iconName: 'scikitlearn', highlight: true },
  { name: 'Pandas', category: 'aiml', role: 'Data Manipulation', iconName: 'pandas' },
  { name: 'NumPy', category: 'aiml', role: 'Numerical Computing', iconName: 'numpy' },

  // Web
  { name: 'React', category: 'web', role: 'Interactive SPAs • UI', iconName: 'react', highlight: true },
  { name: 'Django', category: 'web', role: 'Full-Stack Backend', iconName: 'django', highlight: true },
  { name: 'Django REST Framework', category: 'web', role: 'API Engineering', iconName: 'drf' },
  { name: 'Tailwind CSS', category: 'web', role: 'Modern UI Styling', iconName: 'tailwind', highlight: true },
  { name: 'Three.js / WebGL', category: 'web', role: '3D Graphics & Particles', iconName: 'threejs', highlight: true },
  { name: 'HTML5 & CSS3', category: 'web', role: 'Modern Web Standards', iconName: 'htmlcss' },

  // Data / GIS
  { name: 'PostgreSQL', category: 'datagis', role: 'Relational Database', iconName: 'postgresql', highlight: true },
  { name: 'PostGIS', category: 'datagis', role: 'Spatial Database Extension', iconName: 'postgis', highlight: true },
  { name: 'Leaflet / OSM', category: 'datagis', role: 'Interactive Mapping', iconName: 'leaflet', highlight: true },
  { name: 'QGIS', category: 'datagis', role: 'Spatial Data Analysis', iconName: 'qgis' },
  { name: 'Google Earth Engine', category: 'datagis', role: 'Planetary Geospatial Data', iconName: 'gee' },
  { name: 'GDAL & Rasterio', category: 'datagis', role: 'Geospatial Raster/Vector', iconName: 'gdal' },

  // Tools / DevOps
  { name: 'Git', category: 'tools', role: 'Version Control', iconName: 'git', highlight: true },
  { name: 'GitHub', category: 'tools', role: 'CI/CD & Collaboration', iconName: 'github', highlight: true },
  { name: 'Docker', category: 'tools', role: 'Containerization', iconName: 'docker', highlight: true },
  { name: 'VS Code', category: 'tools', role: 'Primary Development IDE', iconName: 'vscode' },
  { name: 'Figma', category: 'tools', role: 'UI / UX Prototyping', iconName: 'figma' },
];

export const techCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages' },
  { id: 'aiml', label: 'AI / ML' },
  { id: 'web', label: 'Web & 3D' },
  { id: 'datagis', label: 'Data & GIS' },
  { id: 'tools', label: 'Tools & DevOps' },
] as const;
