import React from 'react';
import { Heart, Globe, Users, Briefcase } from 'lucide-react';
import ForceGraph2D from 'react-force-graph-2d';

export default function About() {
  // Sample data for the community graph
  const graphData = {
    nodes: [
      // Organizations
      { id: 'org1', name: 'Global Relief Initiative', group: 'org' },
      { id: 'org2', name: 'Doctors Without Borders', group: 'org' },
      { id: 'org3', name: 'UNICEF', group: 'org' },
      // Volunteers
      { id: 'vol1', name: 'John Doe', group: 'volunteer' },
      { id: 'vol2', name: 'Jane Smith', group: 'volunteer' },
      { id: 'vol3', name: 'Mike Johnson', group: 'volunteer' },
      { id: 'vol4', name: 'Sarah Wilson', group: 'volunteer' },
      { id: 'vol5', name: 'Tom Brown', group: 'volunteer' }
    ],
    links: [
      { source: 'vol1', target: 'org1' },
      { source: 'vol1', target: 'org2' },
      { source: 'vol2', target: 'org1' },
      { source: 'vol3', target: 'org2' },
      { source: 'vol3', target: 'org3' },
      { source: 'vol4', target: 'org3' },
      { source: 'vol5', target: 'org1' },
      { source: 'vol5', target: 'org2' }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Initiative</h1>
          <p className="text-xl text-gray-600">
            Connecting passionate individuals with humanitarian organizations to create positive change worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Initiative was founded with a clear purpose: to bridge the gap between humanitarian organizations and individuals who want to make a difference. We believe that everyone has the potential to contribute to positive change, and our platform makes it easier than ever to find meaningful opportunities to do so.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through our platform, we aim to facilitate connections that lead to impactful humanitarian work, fostering a global community dedicated to making the world a better place.
          </p>
        </div>

        {/* Community Graph */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Community</h2>
          <div className="h-[400px] bg-gray-50 rounded-lg overflow-hidden">
            <ForceGraph2D
              graphData={graphData}
              nodeLabel="name"
              nodeColor={node => node.group === 'org' ? '#059669' : '#3B82F6'}
              nodeRelSize={6}
              linkColor={() => '#E5E7EB'}
              linkWidth={2}
              height={400}
              nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const label = node.name;
                const fontSize = 12/globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                const textWidth = ctx.measureText(label).width;
                const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fillRect(
                  node.x - bckgDimensions[0] / 2,
                  node.y - bckgDimensions[1] / 2,
                  bckgDimensions[0],
                  bckgDimensions[1]
                );

                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = node.group === 'org' ? '#059669' : '#3B82F6';
                ctx.fillText(label, node.x, node.y);
              }}
            />
          </div>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
              <span>Organizations</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
              <span>Volunteers</span>
            </div>
          </div>
        </div>

        {/* Rest of the About page content remains the same */}
      </div>
    </div>
  );
}