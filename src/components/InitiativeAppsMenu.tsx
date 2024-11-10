import React, { useEffect, useRef } from 'react';
import { Grid } from 'lucide-react';

export default function InitiativeAppsMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const initiatives = [
    {
      name: 'Initiative Solidaire',
      description: 'Humanitarian opportunities worldwide',
      icon: '🤝',
      url: '/',
      active: true,
    },
    {
      name: 'Initiative Démocratique',
      description: 'Co-construction of an alternative societal project',
      icon: '🗳️',
      url: 'https://github.com/Vincent-Initiative/Initiative-programme',
    },
    {
      name: 'Initiative Vitale',
      description: 'Bring more serenity to everyday life',
      icon: '🏥',
      url: 'https://medium.com/plaket-france/le-noyau-7884854431f2',
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-green-700 rounded-full transition-colors"
        aria-label="Initiative Apps Menu"
      >
        <Grid className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[280px] sm:w-80 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="grid grid-cols-1 gap-2">
            {initiatives.map((initiative) => (
              <a
                key={initiative.name}
                href={initiative.url}
                className={`flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                  initiative.active ? 'bg-green-50' : ''
                }`}
              >
                <span className="text-2xl mr-3">{initiative.icon}</span>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {initiative.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {initiative.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}