'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Y2K File Sorter',
    description: 'Cette application permet d\'organiser automatiquement vos fichiers par catégories selon leurs extensions.',
    technologies: ['python', 'tkinter'],
    codeLink: 'https://github.com/yoa27/y2k-file-sorter.git',
  },
  {
    title: 'Site-ecommerce',
    description: 'Site-ecommerce presentation de produits',
    technologies: ['html', 'css', 'tailwind'],
    
    codeLink: 'https://github.com/yoa27/site-ecommerce.git',
  },
  
];

const SectionTravaux = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/250798974920', '_blank'); // Remplacez par votre numéro WhatsApp
  };

  return (
    <section id="travaux" className="min-h-screen bg-apple-gray py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Mes Travaux
        </motion.h2>

        <div className="relative">
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max px-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="w-[350px] bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-apple-blue to-basketball-orange" />
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-apple-gray rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.codeLink}
                        className="flex-1 border border-apple-blue text-apple-blue text-center py-2 rounded-lg hover:bg-apple-blue hover:text-white transition-colors"
                      >
                        Code source
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Bouton WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: projects.length * 0.2 }}
                whileHover={{ y: -10 }}
                className="w-[350px] bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">➕</div>
                  <h3 className="text-2xl font-bold mb-2">Ajouter votre projet</h3>
                  <p className="text-gray-600">Discutons de votre projet sur WhatsApp</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTravaux; 