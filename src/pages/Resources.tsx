import React from 'react';
import { BookOpen, DollarSign, MessageCircle, Wrench } from 'lucide-react';

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Organizations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Essential tools, guides, and resources to help humanitarian organizations operate effectively and maximize their impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Financing Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">Financing & Grants</h3>
          </div>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Grant Writing Guide</a>
              <p className="text-gray-600 text-sm">Complete guide to writing successful grant proposals</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Funding Opportunities Database</a>
              <p className="text-gray-600 text-sm">Curated list of grants and funding sources</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Financial Management Tools</a>
              <p className="text-gray-600 text-sm">Templates and tools for budget management</p>
            </li>
          </ul>
        </div>

        {/* Communication Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">Communication</h3>
          </div>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Social Media Toolkit</a>
              <p className="text-gray-600 text-sm">Templates and strategies for social media presence</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Impact Reporting Guide</a>
              <p className="text-gray-600 text-sm">How to effectively communicate your organization's impact</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Crisis Communication Plan</a>
              <p className="text-gray-600 text-sm">Templates and best practices for crisis management</p>
            </li>
          </ul>
        </div>

        {/* Training Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">Training & Development</h3>
          </div>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Volunteer Management Course</a>
              <p className="text-gray-600 text-sm">Free online course for volunteer coordinators</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Leadership Development</a>
              <p className="text-gray-600 text-sm">Resources for developing leadership skills</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Project Management Basics</a>
              <p className="text-gray-600 text-sm">Essential skills for humanitarian project management</p>
            </li>
          </ul>
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Wrench className="w-6 h-6 text-orange-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">Useful Tools</h3>
          </div>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Project Planning Templates</a>
              <p className="text-gray-600 text-sm">Ready-to-use templates for project management</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Impact Measurement Tools</a>
              <p className="text-gray-600 text-sm">Tools and frameworks for measuring program impact</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Collaboration Software Guide</a>
              <p className="text-gray-600 text-sm">Recommended tools for remote team collaboration</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}