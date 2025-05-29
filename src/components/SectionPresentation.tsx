'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SectionPresentation = () => {
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'TypeScript', icon: '📘' },
  ];

  return (
    <section id="presentation" className="min-h-screen bg-apple-gray flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-apple-black">
            BOUYOUMBA S. Clark
          </h1>
          <p className="text-xl text-gray-600 italic">
            "J'écris du code le jour, je shoote à 3 points la nuit."
          </p>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-96 mx-auto">
            <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform rotate-3" />
            <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform -rotate-3" />
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/portrait.jpg"
                alt="Portrait de stephane"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionPresentation; 