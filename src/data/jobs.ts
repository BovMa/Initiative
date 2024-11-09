import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Emergency Response Coordinator',
    organization: 'Global Relief Initiative',
    location: 'Kenya',
    type: 'Full-time',
    category: 'Emergency',
    description: 'Lead emergency response operations in East Africa, coordinating with local partners and international NGOs.',
    requirements: [
      '5+ years humanitarian experience',
      'Experience in emergency response',
      'Strong leadership skills',
      'Fluent in English and Swahili'
    ],
    posted: '2024-03-10',
    deadline: '2024-04-10',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    duration: '1+ year',
    compensation: 'Paid'
  },
  {
    id: '2',
    title: 'Public Health Specialist',
    organization: 'Doctors Without Borders',
    location: 'Lebanon',
    type: 'Contract',
    category: 'Healthcare',
    description: 'Support refugee health programs in Lebanon, focusing on primary healthcare and vaccination campaigns.',
    requirements: [
      'MPH or equivalent',
      '3+ years field experience',
      'Experience in refugee healthcare',
      'Arabic language skills preferred'
    ],
    posted: '2024-03-08',
    deadline: '2024-04-05',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    duration: '6-12 months',
    compensation: 'Expenses covered'
  },
  {
    id: '3',
    title: 'Water & Sanitation Engineer',
    organization: 'UNICEF',
    location: 'Bangladesh',
    type: 'Full-time',
    category: 'Development',
    description: 'Design and implement water and sanitation projects in refugee camps and rural communities.',
    requirements: [
      'Civil Engineering degree',
      'WASH experience in developing countries',
      'Project management skills',
      'Experience with community engagement'
    ],
    posted: '2024-03-05',
    deadline: '2024-04-15',
    imageUrl: 'https://images.unsplash.com/photo-1541959833400-049d37f98ccd?auto=format&fit=crop&q=80',
    duration: '1+ year',
    compensation: 'Paid'
  }
];