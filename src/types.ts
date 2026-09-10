export type NavigationTab =
  | 'dashboard'
  | 'email-generator'
  | 'meeting-summarizer'
  | 'task-planner'
  | 'research-assistant'
  | 'chatbot';

export interface NavItem {
  id: NavigationTab;
  label: string;
  shortDesc: string;
  iconName: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  trend: string;
}

export interface ToolCardData {
  id: NavigationTab;
  title: string;
  description: string;
  category: string;
  iconName: string;
  accentColor: string;
  estimatedTime: string;
  sampleInput: string;
}
