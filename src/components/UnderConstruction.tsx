import React from 'react';
import { Construction } from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div className="bg-yellow-50 border-b border-yellow-400 p-4">
      <div className="flex items-center justify-center">
        <Construction className="h-5 w-5 text-yellow-400 mr-2" />
        <p className="text-sm text-yellow-700">
          🚧 This site is currently under construction. Some features may not be fully functional.
        </p>
      </div>
    </div>
  );
}