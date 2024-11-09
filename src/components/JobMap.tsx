import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Job } from '../types';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface JobMapProps {
  jobs: Job[];
}

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mapping of locations to coordinates
const locationCoordinates: Record<string, [number, number]> = {
  'Kenya': [0.0236, 37.9062],
  'Lebanon': [33.8547, 35.8623],
  'Bangladesh': [23.6850, 90.3563],
  'Remote': [0, 0],
  'Africa': [0, 20],
  'Asia': [34.0479, 100.6197],
  'Europe': [54.5260, 15.2551],
  'Americas': [8.7832, -80.7821],
  'Oceania': [-25.2744, 133.7751]
};

export default function JobMap({ jobs }: JobMapProps) {
  const defaultCenter: [number, number] = [20, 0];
  const defaultZoom = 2;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {jobs.map((job) => {
        const coordinates = locationCoordinates[job.location] || defaultCenter;
        return (
          <Marker key={job.id} position={coordinates}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.organization}</p>
                <p className="text-sm text-gray-600 mb-2">{job.location}</p>
                <Link
                  to={`/jobs/${job.id}`}
                  className="text-green-600 hover:underline text-sm"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}