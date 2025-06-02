export type UserRole = 'admin' | 'trainer' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileType: string;
  trainerId: string;
  createdAt: Date;
  updatedAt: Date;
  category: 'syllabus' | 'curriculum' | 'occupational_standards' | 'reference';
}

export interface TemplateParams {
  topic: string;
  learningOutcomes: string[];
  duration: string;
  level: string;
}

export interface AnalyticsData {
  studentPerformance: {
    labels: string[];
    data: number[];
  };
  contentEngagement: {
    labels: string[];
    data: number[];
  };
}