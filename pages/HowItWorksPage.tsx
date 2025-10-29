
import React from 'react';
import Section from '../components/Section';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">How It Works</h1>
          <p className="mt-4 text-xl text-slate-600">
            Getting your AI-powered health analysis is simple. Follow these four easy steps to get started.
          </p>
        </div>
        <div className="mt-20">
          <div className="relative">
            {/* Dotted line for desktop */}
            <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-slate-200"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {HOW_IT_WORKS_STEPS.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="relative z-10 bg-white p-2 rounded-full border-4 border-white mb-4">
                     <div className="bg-sky-100 rounded-full p-4">
                        {item.icon}
                     </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{item.step}. {item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorksPage;
