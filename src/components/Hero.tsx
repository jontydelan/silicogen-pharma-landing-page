import React from 'react';
import { motion } from 'motion/react';
import { MicroscopicAnimation } from './MicroscopicAnimation';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <MicroscopicAnimation />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            Empowering life science <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-emerald">
              innovation
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            The specialized 'brain trust' for biotech companies, turning rigorous scientific inquiry into the documents and strategies that move the industry forward.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-zinc-950 bg-white hover:bg-zinc-200 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white border border-zinc-700 hover:bg-zinc-800 transition-colors duration-200"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
