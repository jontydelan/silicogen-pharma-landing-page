import React from 'react';
import { motion } from 'motion/react';
import { FileText, Dna, Lightbulb, CheckCircle2, TestTube, Database, Palette } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "In Silico Drug Design and Development",
      icon: <TestTube className="w-8 h-8 text-brand-cyan" />,
      items: [
        "Structure-based drug design",
        "Molecular docking studies",
        "ADME and pharmacokinetic prediction",
        "Molecular dynamics simulations",
        "Traditional drug analysis"
      ]
    },
    {
      title: "Molecular Biology and Bioinformatics",
      icon: <Dna className="w-8 h-8 text-brand-emerald" />,
      items: [
        "Primer design",
        "In silico primer validation",
        "Sequence analysis"
      ]
    },
    {
      title: "Sequencing Data Analysis",
      icon: <Database className="w-8 h-8 text-teal-400" />,
      items: [
        "Next-generation sequencing (NGS) data analysis",
        "Basic genomic and bioinformatics analysis"
      ]
    },
    {
      title: "Scientific Writing and Editing",
      icon: <FileText className="w-8 h-8 text-brand-cyan" />,
      items: [
        "Research article writing",
        "Review article preparation",
        "Proofreading and copy editing",
        "BSc and MSc dissertation support"
      ]
    },
    {
      title: "Medical and Scientific Illustration",
      icon: <Palette className="w-8 h-8 text-brand-emerald" />,
      items: [
        "Graphical abstract design",
        "Conference poster preparation",
        "Scientific presentation and slide design"
      ]
    },
    {
      title: "Customized Research Support",
      icon: <Lightbulb className="w-8 h-8 text-teal-400" />,
      items: [
        "Tailored scientific analysis and research services",
        "Support for academic and industry research projects"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-white sm:text-4xl">
            High-level scientific support
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-400 mx-auto">
            Tailored for biotechnology startups, pharmaceutical firms, and academic institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 transition-colors"
            >
              <div className="bg-zinc-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-zinc-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-brand-emerald flex-shrink-0" />
                    <span className="text-zinc-300 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
