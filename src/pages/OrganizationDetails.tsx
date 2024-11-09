import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Globe, Mail, Phone, Bell, BellOff } from 'lucide-react';
import { organizations } from '../data/organizations';
import { jobs } from '../data/jobs';
import SocialFeed from '../components/SocialFeed';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function OrganizationDetails() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth();
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const organization = organizations.find(org => org.id === id);
  const orgJobs = jobs.filter(job => job.organization === organization?.name);

  const handleSubscribe = () => {
    if (!isAuthenticated) {
      toast.error('Please login to subscribe to organizations');
      return;
    }
    setIsSubscribed(!isSubscribed);
    toast.success(isSubscribed ? 'Unsubscribed from organization' : 'Subscribed to organization');
  };

  if (!organization) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Organization not found</h2>
          <Link to="/organizations" className="text-green-600 hover:text-green-700 mt-4 inline-block">
            Return to organizations
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
              src={organization.imageUrl}
              alt={organization.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{organization.name}</h1>
              {user?.type === 'volunteer' && (
                <button
                  onClick={handleSubscribe}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isSubscribed 
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <BellOff className="w-5 h-5" />
                      <span>Unsubscribe</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{organization.headquarters}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>{organization.size} employees</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2" />
                <span>{organization.categories.join(', ')}</span>
              </div>
            </div>

            <button
              onClick={() => window.open('https://donate.stripe.com/demo', '_blank')}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors mb-4"
            >
              Make a Donation
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-600 mb-6">{organization.description}</p>
              
              <h2 className="text-xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
              <div className="space-y-4">
                {orgJobs.map(job => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium
                        ${job.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                        job.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
                        job.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'}`}>
                        {job.type}
                      </span>
                    </div>
                  </Link>
                ))}
                {orgJobs.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No current opportunities available</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contact@{organization.name.toLowerCase().replace(/\s+/g, '')}.org</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Contact Organization
                </button>
              </div>
            </div>

            <SocialFeed handle={organization.name.toLowerCase().replace(/\s+/g, '')} platform="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}