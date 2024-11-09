import React, { createContext, useContext, useState, useEffect } from 'react';
import { Stats } from '../types';

interface StatsContextType {
  stats: Stats | null;
  refreshStats: () => Promise<void>;
}

const StatsContext = createContext<StatsContextType | null>(null);

const mockStats: Stats = {
  totalUsers: 1250,
  totalJobs: 456,
  totalApplications: 3789,
  activeUsers: 892,
  jobsByCategory: {
    'Emergency': 145,
    'Healthcare': 98,
    'Education': 76,
    'Development': 89,
    'Environment': 48
  },
  applicationsByStatus: {
    'pending': 1234,
    'accepted': 1890,
    'rejected': 665
  },
  userGrowth: Array.from({ length: 12 }, (_, i) => ({
    date: `2024-${String(i + 1).padStart(2, '0')}-01`,
    count: Math.floor(Math.random() * 500) + 800
  }))
};

export function StatsProvider({ children }: { children: React.ReactNode }) {
  const [stats, setStats] = useState<Stats | null>(null);

  const refreshStats = async () => {
    // In a real app, this would fetch from an API
    setStats(mockStats);
  };

  useEffect(() => {
    refreshStats();
  }, []);

  return (
    <StatsContext.Provider value={{ stats, refreshStats }}>
      {children}
    </StatsContext.Provider>
  );
}

export function useStats() {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
}