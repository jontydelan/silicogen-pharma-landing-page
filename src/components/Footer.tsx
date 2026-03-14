import React from 'react';
import { Hexagon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-brand-cyan" />
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-emerald">
                silicogen pharma
              </span>
            </div>
            <p className="text-zinc-500 mt-2 text-sm">
              Empowering life science innovation.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center md:text-left text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Silicogen Pharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
