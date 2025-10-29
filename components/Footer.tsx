
import React from 'react';
import type { Page } from '../types';
import { NAV_LINKS } from '../constants';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">Medical Diagnosis System</h3>
            <p className="mt-2 text-sm text-slate-400">AI-powered health diagnosis for smarter care.</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider text-slate-300">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.page}>
                  <button onClick={() => navigate(link.page)} className="text-slate-400 hover:text-white transition-colors duration-300">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider text-slate-300">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider text-slate-300">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <SocialIcon href="#" icon={<TwitterIcon />} />
              <SocialIcon href="#" icon={<FacebookIcon />} />
              <SocialIcon href="#" icon={<LinkedInIcon />} />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Medical Diagnosis System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ href: string, icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} className="text-slate-400 hover:text-white transition-colors duration-300">
    {icon}
  </a>
);

const TwitterIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const LinkedInIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

export default Footer;
