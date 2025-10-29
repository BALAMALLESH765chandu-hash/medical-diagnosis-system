
import React from 'react';
import Section from '../components/Section';
import type { Page } from '../types';

interface HomePageProps {
    navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-center">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{backgroundImage: "url('https://picsum.photos/seed/health-ai/1920/1080')"}}
        ></div>
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Medical Diagnosis System
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-slate-200">
            AI-powered health diagnosis for smarter care.
          </p>
          <button 
            onClick={() => navigate('how-it-works')}
            className="mt-8 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Try Diagnosis
          </button>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A New Era of Personal Health
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our system empowers you with instant, AI-driven insights into your health concerns. By simply describing your symptoms, you can receive a preliminary analysis that helps you make informed decisions about your well-being.
          </p>
           <button 
            onClick={() => navigate('features')}
            className="mt-8 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-teal-600"
          >
            Explore Features
          </button>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
