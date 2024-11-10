import React, { useState, useEffect, useRef } from 'react';
import { Filter, X } from 'lucide-react';

export interface FilterOptions {
  type: string;
  location: string;
  minDuration: string;
  compensation: string;
  theme: string;
}

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: string) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = {
    type: ['All', 'Full-time', 'Part-time', 'Contract', 'Volunteer'],
    location: ['All', 'Remote', 'Africa', 'Asia', 'Europe', 'Americas', 'Oceania'],
    minDuration: ['All', '1+ month', '3+ months', '6+ months', '1+ year'],
    compensation: ['All', 'Paid', 'Expenses covered', 'Volunteer'],
    theme: ['All', 'Education', 'Healthcare', 'Environment', 'Emergency', 'Development']
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== 'All').length;
  };

  return (
    <div className="relative" ref={filterRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-colors text-white"
      >
        <Filter className="w-5 h-5" />
        <span>Filters</span>
        {getActiveFiltersCount() > 0 && (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
            {getActiveFiltersCount()}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:bg-opacity-0 lg:relative lg:inset-auto">
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl lg:absolute lg:top-full lg:right-0 lg:mt-2 lg:w-screen lg:max-w-md lg:rounded-xl shadow-xl z-50 p-4 lg:bottom-auto lg:left-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] lg:max-h-[80vh] overflow-y-auto">
              {Object.entries(options).map(([key, values]) => (
                <div key={key} className="border-b pb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {values.map((value) => (
                      <button
                        key={value}
                        onClick={() => onFilterChange(key as keyof FilterOptions, value)}
                        className={`px-4 py-2 rounded-full text-sm ${
                          filters[key as keyof FilterOptions] === value
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t sticky bottom-0 bg-white">
              <button
                onClick={() => {
                  Object.keys(filters).forEach((key) => {
                    onFilterChange(key as keyof FilterOptions, 'All');
                  });
                }}
                className="text-gray-600 hover:text-gray-800"
              >
                Clear all
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}