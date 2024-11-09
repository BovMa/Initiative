import { Organization } from '../types';

export const organizations: Organization[] = [
  {
    id: '1',
    name: 'Global Relief Initiative',
    headquarters: 'Geneva, Switzerland',
    size: '1000+',
    rating: 4.8,
    reviewCount: 156,
    description: 'Leading emergency response organization providing humanitarian aid in crisis situations worldwide. Specializing in disaster relief, healthcare, and community development.',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    categories: ['Emergency Response', 'Healthcare', 'Development']
  },
  {
    id: '2',
    name: 'Education Without Borders',
    headquarters: 'Paris, France',
    size: '500-1000',
    rating: 4.6,
    reviewCount: 89,
    description: 'International NGO focused on providing quality education to children in underserved communities and conflict zones.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80',
    categories: ['Education', 'Development']
  },
  {
    id: '3',
    name: 'Clean Water Alliance',
    headquarters: 'New York, USA',
    size: '100-500',
    rating: 4.7,
    reviewCount: 67,
    description: 'Dedicated to providing clean water access and improving sanitation facilities in developing regions worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1541959833400-049d37f98ccd?auto=format&fit=crop&q=80',
    categories: ['WASH', 'Development']
  }
];