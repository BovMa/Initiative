import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, type: 'volunteer' | 'organization') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Test accounts
const TEST_ACCOUNTS = {
  volunteer: {
    email: 'volunteer@test.com',
    password: 'volunteer123',
    name: 'Test Volunteer',
    type: 'volunteer'
  },
  organization: {
    email: 'org@test.com',
    password: 'org123',
    name: 'Test Organization',
    type: 'organization'
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      const { user } = JSON.parse(savedAuth);
      setUser(user);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      let mockUser: User;
      
      // Check test accounts
      if (email === TEST_ACCOUNTS.volunteer.email && password === TEST_ACCOUNTS.volunteer.password) {
        mockUser = {
          id: 'volunteer-test',
          email: TEST_ACCOUNTS.volunteer.email,
          name: TEST_ACCOUNTS.volunteer.name,
          type: 'volunteer',
          applications: [],
          createdAt: new Date().toISOString()
        };
        navigate('/dashboard');
      } else if (email === TEST_ACCOUNTS.organization.email && password === TEST_ACCOUNTS.organization.password) {
        mockUser = {
          id: 'org-test',
          email: TEST_ACCOUNTS.organization.email,
          name: TEST_ACCOUNTS.organization.name,
          type: 'organization',
          createdAt: new Date().toISOString()
        };
        navigate('/dashboard');
      } else if (email === 'admin@initiative.org' && password === 'admin123') {
        mockUser = {
          id: 'admin',
          email: 'admin@initiative.org',
          name: 'Admin User',
          type: 'admin',
          createdAt: new Date().toISOString()
        };
        navigate('/admin');
      } else {
        throw new Error('Invalid credentials');
      }

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ user: mockUser }));
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string, type: 'volunteer' | 'organization') => {
    try {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        type,
        applications: type === 'volunteer' ? [] : undefined,
        createdAt: new Date().toISOString()
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ user: mockUser }));
      toast.success('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Registration failed');
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}