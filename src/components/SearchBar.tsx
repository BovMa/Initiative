import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search jobs, organizations, or locations..."
        className="w-full px-4 py-3 pl-12 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 border border-white/20 focus:border-white/30 focus:ring-2 focus:ring-white/30 transition-all"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
    </div>
  );
}