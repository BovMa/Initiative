import React from 'react';
import { Book, Link as LinkIcon, Youtube, Instagram } from 'lucide-react';

export default function HumanitarianResources() {
  const resources = {
    books: [
      {
        title: "Humanitarian Aid Work: A Critical Approach",
        author: "Carlos Martin Beristain",
        description: "A comprehensive guide to understanding humanitarian work and its challenges.",
        link: "#"
      },
      {
        title: "Emergency Sex and Other Desperate Measures",
        author: "Kenneth Cain, Heidi Postlewait, and Andrew Thomson",
        description: "True stories from UN peacekeeping missions.",
        link: "#"
      }
    ],
    websites: [
      {
        name: "ReliefWeb",
        url: "https://reliefweb.int",
        description: "Leading humanitarian information source on global crises and disasters."
      },
      {
        name: "Humanitarian Practice Network",
        url: "https://odihpn.org",
        description: "Independent forum for humanitarian workers to share information."
      }
    ],
    youtubeChannels: [
      {
        name: "UNHCR",
        url: "https://www.youtube.com/user/unhcr",
        description: "Official channel of the UN Refugee Agency"
      },
      {
        name: "MSF International",
        url: "https://www.youtube.com/user/msf",
        description: "Doctors Without Borders' official channel"
      }
    ],
    socialMedia: [
      {
        platform: "Instagram",
        handle: "@MSF_USA",
        url: "https://www.instagram.com/msf_usa",
        description: "Doctors Without Borders USA"
      },
      {
        platform: "Instagram",
        handle: "@ICRC",
        url: "https://www.instagram.com/icrc",
        description: "International Committee of the Red Cross"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Humanitarian Resources</h1>

        {/* Books Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Book className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Essential Reading</h2>
          </div>
          <div className="grid gap-6">
            {resources.books.map((book) => (
              <div key={book.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-2">By {book.author}</p>
                <p className="text-gray-600">{book.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Websites Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <LinkIcon className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Useful Websites</h2>
          </div>
          <div className="grid gap-6">
            {resources.websites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">{site.name}</h3>
                <p className="text-gray-600">{site.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* YouTube Channels */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Youtube className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">YouTube Channels</h2>
          </div>
          <div className="grid gap-6">
            {resources.youtubeChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-red-600 mb-2">{channel.name}</h3>
                <p className="text-gray-600">{channel.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section>
          <div className="flex items-center mb-6">
            <Instagram className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Social Media</h2>
          </div>
          <div className="grid gap-6">
            {resources.socialMedia.map((social) => (
              <a
                key={social.handle}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-2">{social.handle}</h3>
                <p className="text-gray-600">{social.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}