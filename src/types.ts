export interface User {
  id: string;
  email: string;
  name: string;
  type: 'admin' | 'organization' | 'volunteer';
  applications?: Application[];
  createdAt: string;
}

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Volunteer';
  category: string;
  description: string;
  requirements: string[];
  posted: string;
  deadline: string;
  imageUrl: string;
  duration: string;
  compensation: string;
}

export interface Organization {
  id: string;
  name: string;
  headquarters: string;
  size: string;
  rating: number;
  reviewCount: number;
  description: string;
  imageUrl: string;
  categories: string[];
}

export interface Review {
  id: string;
  organizationId: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedDate: string;
}

export interface Stats {
  totalUsers: number;
  totalJobs: number;
  totalApplications: number;
  activeUsers: number;
  jobsByCategory: Record<string, number>;
  applicationsByStatus: Record<string, number>;
  userGrowth: Array<{ date: string; count: number }>;
}