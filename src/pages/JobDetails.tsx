import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Building2, Calendar, Clock, BriefcaseIcon, CheckCircle } from 'lucide-react';
import { jobs } from '../data/jobs';
import { useAuth } from '../contexts/AuthContext';

export default function JobDetails() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
          <Link to="/" className="text-green-600 hover:text-green-700 mt-4 inline-block">
            Return to job listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-64 overflow-hidden">
            <img
              src={job.imageUrl}
              alt={job.organization}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${job.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                job.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
                job.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
                'bg-orange-100 text-orange-800'}`}>
                {job.type}
              </span>
              <span className="text-sm text-gray-500">Posted {job.posted}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Building2 className="w-5 h-5 mr-2" />
                <span>{job.organization}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Duration: {job.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>Deadline: {job.deadline}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 mb-6">{job.description}</p>
              
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="list-none space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Apply Now</h2>
              {isAuthenticated ? (
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Submit Application
                </button>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">Please log in to apply for this position</p>
                  <Link
                    to="/login"
                    className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Login to Apply
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center bg-white text-green-600 py-3 rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}