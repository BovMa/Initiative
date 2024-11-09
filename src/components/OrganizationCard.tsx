import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Organization } from '../types';

interface OrganizationCardProps {
  organization: Organization;
}

export default function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={organization.imageUrl}
          alt={organization.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{organization.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{organization.headquarters}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{organization.size} employees</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{organization.description}</p>
        
        <div className="space-y-2">
          <Link 
            to={`/organizations/${organization.id}`}
            className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Learn More
          </Link>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://donate.stripe.com/demo', '_blank');
            }}
            className="block w-full text-center border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            Make a Donation
          </a>
        </div>
      </div>
    </div>
  );
}