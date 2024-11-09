import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Briefcase, Clock, CheckCircle, XCircle, Plus } from 'lucide-react';
import AddJobForm from '../components/AddJobForm';

export default function UserDashboard() {
  const { user } = useAuth();
  const [showAddJobForm, setShowAddJobForm] = React.useState(false);

  const applications = [
    {
      id: '1',
      jobTitle: 'Emergency Response Coordinator',
      organization: 'Global Relief Initiative',
      status: 'pending',
      appliedDate: '2024-03-15'
    },
    {
      id: '2',
      jobTitle: 'Community Health Worker',
      organization: 'Doctors Without Borders',
      status: 'accepted',
      appliedDate: '2024-03-10'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  if (user?.type === 'organization') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Organization Dashboard</h2>
              <button
                onClick={() => setShowAddJobForm(!showAddJobForm)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Post New Job</span>
              </button>
            </div>

            {showAddJobForm ? (
              <AddJobForm />
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Active Job Listings</h3>
                  {/* Add your job listings here */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Applications</h3>
                  {/* Add your applications list here */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome, {user?.name}</h2>
        <div className="flex items-center text-gray-600">
          <Briefcase className="w-5 h-5 mr-2" />
          <span>{applications.length} Active Applications</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Applications</h3>
        <div className="space-y-4">
          {applications.map((application) => (
            <div
              key={application.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{application.jobTitle}</h4>
                  <p className="text-sm text-gray-500">{application.organization}</p>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(application.status)}
                  <span className="ml-2 text-sm capitalize">{application.status}</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Applied on {new Date(application.appliedDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}