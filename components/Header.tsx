
import React, { useState } from 'react';
import type { Page } from '../types';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink: React.FC<{ page: Page; name: string }> = ({ page, name }) => (
    <button
      onClick={() => {
        navigate(page);
        setIsMenuOpen(false);
      }}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        currentPage === page
          ? 'text-white bg-primary'
          : 'text-slate-700 hover:bg-sky-100'
      }`}
    >
      {name}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => navigate('home')} className="flex-shrink-0 flex items-center gap-2">
              <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-xl text-slate-800">MDS</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map(link => (
                <NavLink key={link.page} page={link.page} name={link.name} />
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button className="text-slate-700 hover:bg-slate-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">Login</button>
            <button className="bg-secondary text-white hover:bg-teal-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">Register</button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {NAV_LINKS.map(link => (
              <NavLink key={link.page} page={link.page} name={link.name} />
            ))}
            <div className="pt-4 flex items-center space-x-2">
                <button className="text-slate-700 hover:bg-slate-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">Login</button>
                <button className="bg-secondary text-white hover:bg-teal-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">Register</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
