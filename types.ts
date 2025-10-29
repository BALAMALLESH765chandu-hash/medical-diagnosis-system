
import type React from 'react';

export type Page = 'home' | 'about' | 'features' | 'how-it-works' | 'contact';

export interface NavLink {
  name: string;
  page: Page;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
