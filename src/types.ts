export type ProjectCategory = 'All' | 'Electronics' | 'Full-Stack' | 'AI';

export interface ProjectReportDetails {
  reportTitle: string;
  reportType: string;
  institution: string;
  guide: string;
  regNo: string;
  period: string;
  abstractText: string;
  objectives: string[];
  keyParameters: { label: string; value: string }[];
  softwareHardware: string[];
  resultsSummary: string;
  pdfDownloadUrl?: string;
  externalLinkText?: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  dateLabel: string;
  projectType: 'B.Tech Electronics & Hardware' | 'Full-Stack & Web Software' | 'AI & Machine Learning';
  description: string;
  longDescription?: string;
  category: 'Electronics' | 'AI' | 'Web';
  isFullStack?: boolean;
  techStack: string[];
  githubUrl: string;
  isGithubPlaceholder?: boolean;
  demoUrl?: string;
  isDemoPlaceholder?: boolean;
  image?: string;
  featured?: boolean;
  highlights?: string[];
  documentUrl?: string;
  documentTitle?: string;
  academicBadge?: string;
  projectGuide?: string;
  academicInstitution?: string;
  regNo?: string;
  reportDetails?: ProjectReportDetails;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: 'experience' | 'education' | 'training';
  location: string;
  scoreOrRole?: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  scope: string;
  description: string;
  outcomes: string[];
}

export interface RoadmapItem {
  id: string;
  topic: string;
  category: string;
  status: 'In Progress' | 'Planned' | 'Advancing';
  description: string;
  focusAreas: string[];
  progressPercent: number;
}
