import React, { useState } from 'react';
import { organizations } from '../data/organizations';
import OrganizationCard from '../components/OrganizationCard';
import ReviewModal from '../components/ReviewModal';

export default function Organizations() {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Humanitarian Organizations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover and learn about organizations making a difference worldwide. Read reviews from volunteers and find the right organization for your mission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {organizations.map(org => (
          <OrganizationCard
            key={org.id}
            organization={org}
            onReviewClick={() => {
              setSelectedOrg(org);
              setIsReviewModalOpen(true);
            }}
          />
        ))}
      </div>

      {selectedOrg && (
        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          organization={selectedOrg}
        />
      )}
    </div>
  );
}