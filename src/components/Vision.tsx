import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-zinc-950 relative border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Quote className="w-16 h-16 text-zinc-800 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-12">
            "To bridge the gap between complex biological data and actionable insights, empowering life science innovation through elite academic expertise—without the overhead of a traditional lab."
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-emerald mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
