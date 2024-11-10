import React, { useState } from 'react';
import { Heart, X, Bookmark, Building2, MapPin, Clock } from 'lucide-react';
import { Job } from '../types';
import { Link } from 'react-router-dom';
import { organizations } from '../data/organizations';
import toast from 'react-hot-toast';

interface SwipeViewProps {
  jobs: Job[];
  onSwipe: (jobId: string, direction: 'left' | 'right' | 'save') => void;
}

export default function SwipeView({ jobs, onSwipe }: SwipeViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right' | 'save') => {
    if (currentIndex < jobs.length) {
      onSwipe(jobs[currentIndex].id, direction);
      if (direction === 'right') {
        toast.success('Added to favorites!');
      } else if (direction === 'save') {
        toast.success('Saved for later!');
      }
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (currentIndex >= jobs.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">No More Jobs</h3>
        <p className="text-gray-600 text-center mb-6">You've seen all available opportunities</p>
        <button
          onClick={() => setCurrentIndex(0)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  const currentJob = jobs[currentIndex];
  const organization = organizations.find(org => org.name === currentJob.organization);

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={currentJob.imageUrl}
          alt={currentJob.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{currentJob.title}</h3>
          <Link 
            to={`/organizations/${currentJob.organization.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-green-300 hover:text-green-200 transition-colors"
          >
            {currentJob.organization}
          </Link>
        </div>
      </div>

      <div className="p-6">
        {/* Organization Info */}
        {organization && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Building2 className="w-5 h-5 text-gray-600 mr-2" />
              <h4 className="font-bold text-gray-900">{organization.name}</h4>
            </div>
            <p className="text-gray-600 text-sm mb-2">{organization.description}</p>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{organization.headquarters}</span>
            </div>
          </div>
        )}

        {/* Job Info */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${currentJob.type === 'Full-time' ? 'bg-green-100 text-green-800' :
              currentJob.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
              currentJob.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
              'bg-orange-100 text-orange-800'}`}>
              {currentJob.type}
            </span>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">Posted {currentJob.posted}</span>
            </div>
          </div>
          <p className="text-gray-600 line-clamp-3">{currentJob.description}</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleSwipe('left')}
            className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => handleSwipe('save')}
            className="p-4 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <Bookmark className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="p-4 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          >
            <Heart className="w-6 h-6 text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
}