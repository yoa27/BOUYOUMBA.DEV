'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const NavigationBallons = () => {
  const [activeSection, setActiveSection] = useState('presentation');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { id: 'presentation', label: 'Présentation' },
    { id: 'travaux', label: 'Mes Travaux' },
    { id: 'passions', label: 'Mes Passions' },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 md:flex flex-col gap-6 hidden">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <button
            onClick={() => scrollToSection(section.id)}
            className="w-12 h-12 rounded-full bg-basketball-orange shadow-lg 
                     flex items-center justify-center cursor-pointer
                     transition-all duration-300 hover:shadow-xl"
            aria-label={`Aller à la section ${section.label}`}
          >
            <div className="w-8 h-8 rounded-full bg-white/20" />
          </button>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 
                         bg-apple-black text-white px-3 py-1 rounded-full
                         opacity-0 group-hover:opacity-100 transition-opacity
                         text-sm whitespace-nowrap">
            {section.label}
          </span>
        </motion.div>
      ))}
    </nav>
  );
};

export default NavigationBallons; 