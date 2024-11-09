import React from 'react';
import { MapPin, Building2, Calendar, Clock } from 'lucide-react';
import { Job } from '../types';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={job.imageUrl}
          alt={job.organization}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${job.type === 'Full-time' ? 'bg-green-100 text-green-800' :
            job.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
            job.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
            'bg-orange-100 text-orange-800'}`}>
            {job.type}
          </span>
          <span className="text-sm text-gray-500">Posted {job.posted}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <Link to={`/organizations/${job.organization.toLowerCase().replace(/\s+/g, '-')}`} className="text-green-600 hover:underline">
              {job.organization}
            </Link>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Deadline: {job.deadline}</span>
          </div>
        </div>
        
        <Link 
          to={`/jobs/${job.id}`}
          className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}