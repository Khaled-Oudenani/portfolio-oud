export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}
