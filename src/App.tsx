import React from 'react';
import { FeatureCard } from './components/FeatureCard';
import { AccessCard } from './components/AccessCard';

function App() {
  const features = [
    {
      title: 'Multimodal Capabilities',
      description: 'Can understand and process text, images, video, audio, and code simultaneously',
      icon: '🎯'
    },
    {
      title: 'Advanced Reasoning',
      description: 'Sophisticated problem-solving and analytical capabilities across various domains',
      icon: '🧠'
    },
    {
      title: 'Performance',
      description: 'Outperforms previous models in various benchmarks, especially in STEM fields',
      icon: '⚡'
    }
  ];

  const accessPoints = [
    {
      title: 'Google Bard',
      description: 'Try Gemini Pro through Google\'s Bard chatbot interface',
      link: 'https://bard.google.com'
    },
    {
      title: 'Google AI Studio',
      description: 'Access Gemini directly through Google\'s developer platform',
      link: 'https://makersuite.google.com'
    },
    {
      title: 'Google Cloud Vertex AI',
      description: 'Enterprise access to Gemini through Google Cloud',
      link: 'https://cloud.google.com/vertex-ai'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Google Gemini
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Google's most capable and versatile AI model, designed to understand and process multiple types of information simultaneously
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Released in December 2023 as Google's answer to GPT-4
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Available in three sizes: Ultra, Pro, and Nano
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Integrated into various Google products and services
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Trained on a diverse range of data sources and formats
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Where to Access Gemini</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {accessPoints.map((point, index) => (
              <AccessCard
                key={index}
                title={point.title}
                description={point.description}
                link={point.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;