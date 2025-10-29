
import React from 'react';
import Section from '../components/Section';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">About Our Mission</h1>
          <p className="mt-4 text-xl text-slate-600">
            We are dedicated to making healthcare more accessible and understandable through the power of artificial intelligence.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">How It Helps</h2>
            <p className="mt-4 text-lg text-slate-600">
              The Medical Diagnosis System is a sophisticated tool designed to assist users in understanding their health symptoms. By inputting their concerns, our AI model, trained on vast amounts of anonymized medical data, provides a list of potential conditions.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              This is not a replacement for a professional medical diagnosis but serves as a powerful preliminary step, helping to inform and prepare patients for consultations with healthcare providers. Our goal is to bridge the gap between symptom onset and professional medical advice.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="https://picsum.photos/seed/doctor-consult/600/500" alt="Doctor and patient consultation" className="w-full h-full object-cover"/>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Our team is composed of passionate experts in medicine, artificial intelligence, and software engineering.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
