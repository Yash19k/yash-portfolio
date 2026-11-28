export interface TechItem {
  name: string;
  category: 'languages' | 'aiml' | 'web' | 'datagis' | 'tools';
  role: string; // e.g. "ML • Data • Backend"
  iconName: string;
  level?: string;
  highlight?: boolean;
}

export interface SiteConfig {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  role: string;
  subrole: string;
  statement: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
  };
  githubUsername: string;
  resumeUrl: string;
}
