export interface ProjectEntry {
  title: string;
  category: string;
  tools: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  knowMoreUrl?: string;
  link?: string;
  video?: string;
  detailKey: string;
}

export const referenceProjects: ProjectEntry[] = [
  {
    title: "Obrix",
    category: "AI-Powered Geospatial Location Intelligence Platform",
    tools: "React, Django REST Framework, PostgreSQL, PostGIS, Leaflet",
    image: "/images/obrix-cover.webp",
    githubUrl: "https://github.com/Yash19k/Obrix-Location-Intelligence-Platform",
    liveUrl: "https://obrix-frontend.onrender.com/",
    link: "https://github.com/Yash19k/Obrix-Location-Intelligence-Platform",
    detailKey: "obrix"
  },
  {
    title: "Quibble",
    category: "Real-Time Multiplayer Quiz Game on Serverless AWS",
    tools: "AWS Lambda, API Gateway WebSockets, DynamoDB, S3, CloudWatch, IAM, Node.js",
    image: "/images/quibble-cover.webp",
    githubUrl: "https://github.com/Yash19k/quibble",
    liveUrl: "https://quibble-frontendbucket-xbdspxx14ytn.s3.ap-south-1.amazonaws.com/index.html",
    link: "https://github.com/Yash19k/quibble",
    detailKey: "quibble"
  },
  {
    title: "DropVault",
    category: "Serverless Secure File Sharing on AWS",
    tools: "React, AWS Lambda (Python), S3, DynamoDB, API Gateway, SES, KMS, Terraform",
    image: "/images/dropvault-cover.webp",
    githubUrl: "https://github.com/Yash19k/dropvault",
    liveUrl: "https://dropvault.d1m5hv4o1y7mm2.amplifyapp.com",
    link: "https://github.com/Yash19k/dropvault",
    detailKey: "dropvault"
  },
  {
    title: "AgriSmart AI",
    category: "AI Crop Disease Detection & Farm Advisory (SIH 2026)",
    tools: "PyTorch (ConvNeXt-Tiny), Scikit-learn, XGBoost, Django REST, React, Groq LLM",
    image: "/images/agrismart-cover.webp",
    githubUrl: "https://github.com/Yash19k/Agrismart-AI",
    liveUrl: "https://agrismart-ai-mu.vercel.app",
    link: "https://github.com/Yash19k/Agrismart-AI",
    detailKey: "agrismart"
  }
];

export interface ProjectDetailEntry {
  overview: string;
  features: string[];
  technologies: string;
  contribution: string;
}

export const projectDetails: Record<string, ProjectDetailEntry> = {
  obrix: {
    overview:
      "An AI-powered geospatial platform that analyzes candidate locations and produces site-readiness insights from accessibility, infrastructure and surrounding-area data.",
    features: [
      "Multi-factor site suitability scoring",
      "Radius catchment & amenity proximity analysis",
      "Interactive Leaflet / OpenStreetMap layers",
      "AI-generated location insights"
    ],
    technologies:
      "React, Django REST Framework, PostgreSQL, PostGIS, Leaflet",
    contribution:
      "Full-stack development, geospatial integration, frontend architecture and API integration."
  },

  quibble: {
    overview:
      "A live multiplayer quiz where a host shares a 6-character code and up to 250 players race the same countdown from their phones, with no servers to manage.",
    features: [
      "WebSocket gameplay for 250 players per game",
      "Server-authoritative timing & speed scoring",
      "Reconnect-safe games, 5 question types, QR join",
      "Admin console, CloudWatch metrics & alarms"
    ],
    technologies:
      "API Gateway (WebSocket + HTTP), Lambda (Node.js 22), DynamoDB, S3, CloudWatch, IAM, AWS SAM",
    contribution:
      "Serverless architecture, contention-free DynamoDB data model, real-time game engine and frontend."
  },

  dropvault: {
    overview:
      "Share files with links that expire. Browsers upload straight to S3, and every link has its own lifetime, download limit and stats.",
    features: [
      "Resumable multipart uploads direct to S3",
      "Expiring links by email, URL or QR code",
      "Download limits, stats & instant link revocation",
      "Per-user KMS encryption, quotas & admin panel"
    ],
    technologies:
      "React 19, Vite, Tailwind, Python Lambdas, API Gateway, S3, DynamoDB, SES, KMS, Terraform, GitHub Actions",
    contribution:
      "Infrastructure as code with Terraform, Lambda backend, auth and the React web app."
  },

  agrismart: {
    overview:
      "A farmer-first agriculture platform that pairs leaf-image disease detection with live weather, irrigation and crop advice.",
    features: [
      "ConvNeXt-Tiny classifier: 38 classes, 98.1% macro-F1",
      "Crop recommendation (Random Forest)",
      "Smart irrigation scheduling (XGBoost)",
      "Multilingual AI agronomist (EN / HI / GU)"
    ],
    technologies:
      "PyTorch, Scikit-learn, XGBoost, Django REST Framework, React 19, Open-Meteo, Groq LLM",
    contribution:
      "Model training & evaluation, ML pipelines, Django API and React frontend."
  }
};
