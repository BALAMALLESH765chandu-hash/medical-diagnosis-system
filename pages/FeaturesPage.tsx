
import React from 'react';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { FEATURES } from '../constants';

const FeaturesPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">System Features</h1>
          <p className="mt-4 text-xl text-slate-600">
            Explore the powerful features that make our diagnosis system a leader in AI-driven healthcare.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default FeaturesPage;
