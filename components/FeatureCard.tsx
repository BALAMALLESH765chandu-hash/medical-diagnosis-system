
import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start space-x-6">
      <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-md">
        {feature.icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
        <p className="mt-2 text-slate-600">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
