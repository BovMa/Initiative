import React from 'react';
import { List, Map, Heart } from 'lucide-react';

export type ViewMode = 'list' | 'map' | 'swipe';

interface ViewModeSelectorProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function ViewModeSelector({ currentMode, onModeChange }: ViewModeSelectorProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-2 space-x-2">
      <button
        onClick={() => onModeChange('list')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
          currentMode === 'list' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
        }`}
      >
        <List className="w-5 h-5" />
        <span>List</span>
      </button>
      <button
        onClick={() => onModeChange('map')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
          currentMode === 'map' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
        }`}
      >
        <Map className="w-5 h-5" />
        <span>Map</span>
      </button>
      <button
        onClick={() => onModeChange('swipe')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
          currentMode === 'swipe' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
        }`}
      >
        <Heart className="w-5 h-5" />
        <span>Discover</span>
      </button>
    </div>
  );
}