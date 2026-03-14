import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Zap, TrendingUp } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: "PhD-Led Excellence",
      description: "Your projects are handled by doctoral-level researchers with deep domain knowledge.",
      icon: <GraduationCap className="w-6 h-6 text-brand-cyan" />
    },
    {
      title: "Asset-Light Efficiency",
      description: "Get the high-level expertise of an R&D department without the logistical delays of laboratory scheduling.",
      icon: <Zap className="w-6 h-6 text-brand-emerald" />
    },
    {
      title: "Scalable Support",
      description: "We act as an extension of your existing team, scaling our involvement based on your project deadlines.",
      icon: <TrendingUp className="w-6 h-6 text-teal-400" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-emerald blur-[100px] rounded-full transform scale-y-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-emerald uppercase mb-3">Why Choose Us?</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
              Elite academic expertise—without the overhead of a traditional lab.
            </h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              We bridge the gap between complex biological data and actionable insights, empowering life science innovation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-950 border border-zinc-800">
                    {reason.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
