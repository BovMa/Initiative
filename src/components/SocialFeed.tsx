import React from 'react';

interface SocialFeedProps {
  handle: string;
  platform: 'instagram' | 'tiktok';
}

export default function SocialFeed({ handle, platform }: SocialFeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold mb-4">Latest {platform === 'instagram' ? 'Instagram' : 'TikTok'} Posts</h3>
      <div className="aspect-square w-full">
        {platform === 'instagram' ? (
          <iframe
            src={`https://www.instagram.com/${handle}/embed`}
            className="w-full h-full border-none"
            loading="lazy"
          />
        ) : (
          <iframe
            src={`https://www.tiktok.com/embed/${handle}`}
            className="w-full h-full border-none"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}