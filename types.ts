
export type View = 'onboarding' | 'dashboard' | 'plan' | 'modules' | 'score' | 'checklist' | 'ebook' | 'tools' | 'community' | 'profile' | 'mindmap';

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface DayMission {
  day: number;
  title: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  completed: boolean;
}

export interface ChecklistItem {
  id: string;
  chapter: string;
  label: string;
  description: string;
  linkedTopicId?: string;
}

export interface ModuleTopic {
  id: string;
  title: string;
  completed: boolean;
  content?: string;
  chapterContext?: string;
}

export interface EducationalModule {
  id: number;
  title: string;
  subtitle: string;
  topics: ModuleTopic[];
}

export interface UserProfile {
  name: string;
  photo: string;
  initialScore: number;
  currentScore: number;
  targetScore: number;
  completedDays: number[];
  completedTopics: string[];
  completedChecklist: string[];
  scoreHistory: { date: string; value: number }[];
}

export interface ScoreMyth {
  id: number;
  title: string;
  description: string;
  isMyth: boolean;
}
