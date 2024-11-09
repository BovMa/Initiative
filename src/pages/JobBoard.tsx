import React, { useState, useMemo } from 'react';
import { jobs } from '../data/jobs';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import JobMap from '../components/JobMap';
import SwipeView from '../components/SwipeView';
import ViewModeSelector, { ViewMode } from '../components/ViewModeSelector';
import Filters, { FilterOptions } from '../components/Filters';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function JobBoard() {
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const { isAuthenticated } = useAuth();
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'All',
    location: 'All',
    minDuration: 'All',
    compensation: 'All',
    theme: 'All'
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSwipe = (jobId: string, direction: 'left' | 'right' | 'save') => {
    if (!isAuthenticated) {
      toast.error('Please login to save jobs');
      return;
    }
    // Handle swipe action
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.organization.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase());
      
      const matchesType = filters.type === 'All' || job.type === filters.type;
      const matchesLocation = filters.location === 'All' || job.location === filters.location;
      const matchesMinDuration = filters.minDuration === 'All' || 
        (filters.minDuration === '1+ month' && job.duration.includes('month')) ||
        (filters.minDuration === '3+ months' && parseInt(job.duration) >= 3) ||
        (filters.minDuration === '6+ months' && parseInt(job.duration) >= 6) ||
        (filters.minDuration === '1+ year' && job.duration.includes('year'));
      const matchesCompensation = filters.compensation === 'All' || job.compensation === filters.compensation;
      const matchesTheme = filters.theme === 'All' || job.category === filters.theme;
      
      return matchesSearch && matchesType && matchesLocation && 
             matchesMinDuration && matchesCompensation && matchesTheme;
    });
  }, [query, filters]);

  const renderJobView = () => {
    switch (viewMode) {
      case 'map':
        return (
          <div className="h-[calc(100vh-300px)]">
            <JobMap jobs={filteredJobs} />
          </div>
        );
      case 'swipe':
        return <SwipeView jobs={filteredJobs} onSwipe={handleSwipe} />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        );
    }
  };

  return (
    <div>
      {/* Hero Section with Search and Filters */}
      <div className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-4xl font-bold mb-4">Find Your Purpose in Humanitarian Work</h2>
              <p className="text-green-100 text-lg">Discover meaningful opportunities to make a difference globally</p>
            </div>
            <div className="w-full max-w-4xl flex items-center space-x-4">
              <div className="flex-grow">
                <SearchBar query={query} setQuery={setQuery} />
              </div>
              <Filters filters={filters} onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-center">
          <ViewModeSelector currentMode={viewMode} onModeChange={setViewMode} />
        </div>

        {renderJobView()}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No jobs found matching your criteria</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}