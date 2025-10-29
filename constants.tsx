
import React from 'react';
import type { NavLink, Feature, TeamMember, HowItWorksStep } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', page: 'home' },
  { name: 'About', page: 'about' },
  { name: 'Features', page: 'features' },
  { name: 'How It Works', page: 'how-it-works' },
  { name: 'Contact', page: 'contact' },
];

export const FEATURES: Feature[] = [
  {
    icon: <SymptomCheckIcon />,
    title: 'Intelligent Symptom Input',
    description: 'Our intuitive interface allows you to easily input your symptoms using natural language.',
  },
  {
    icon: <AIPredictionIcon />,
    title: 'Advanced AI Prediction',
    description: 'Leveraging cutting-edge machine learning models to provide accurate potential diagnoses.',
  },
  {
    icon: <ReportIcon />,
    title: 'Medical Report Generation',
    description: 'Receive a comprehensive, easy-to-understand report summarizing the potential diagnosis.',
  },
  {
    icon: <UserFriendlyIcon />,
    title: 'User-Friendly Interface',
    description: 'A clean, modern, and accessible design ensures a seamless experience for all users.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Dr. Evelyn Reed', role: 'Lead AI Researcher', imageUrl: 'https://picsum.photos/seed/evelyn/300/300' },
  { name: 'Mark Chen', role: 'Senior Software Engineer', imageUrl: 'https://picsum.photos/seed/mark/300/300' },
  { name: 'Dr. Aisha Khan', role: 'Medical Consultant', imageUrl: 'https://picsum.photos/seed/aisha/300/300' },
  { name: 'Ben Carter', role: 'UX/UI Designer', imageUrl: 'https://picsum.photos/seed/ben/300/300' },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        step: 1,
        title: 'Sign Up & Login',
        description: 'Create your secure personal account to get started. Your privacy is our top priority.',
        icon: <UserPlusIcon />
    },
    {
        step: 2,
        title: 'Input Your Symptoms',
        description: 'Use our guided, interactive form to describe your symptoms in detail. The more info, the better.',
        icon: <SymptomInputIcon />
    },
    {
        step: 3,
        title: 'AI-Powered Analysis',
        description: 'Our system analyzes your input against a vast database of medical knowledge to identify potential conditions.',
        icon: <AIAnalysisIcon />
    },
    {
        step: 4,
        title: 'Receive Your Report',
        description: 'Get a detailed, personalized health report with potential diagnoses and next steps. Always consult a doctor.',
        icon: <ViewReportIcon />
    }
];

// Icons
function SymptomCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function AIPredictionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function UserFriendlyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function UserPlusIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
    );
}

function SymptomInputIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    );
}

function AIAnalysisIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1m0 0a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    );
}

function ViewReportIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );
}
