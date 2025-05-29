'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SectionPassions = () => {
  const router = useRouter();
  return (
    <section id="passions" className="min-h-screen bg-apple-gray py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Mes Passions
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basket-ball */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer"
            onClick={() => router.push('/passions/basket')}
            tabIndex={0}
            role="button"
            aria-label="Voir la passion Basket-ball"
            onKeyDown={e => { if (e.key === 'Enter') router.push('/passions/basket'); }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
              <div className="relative h-64 bg-gradient-to-r from-apple-blue to-basketball-orange">
                <Image
                  src="/basketball.jpg"
                  alt="Basket-ball"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.error('Erreur de chargement de l\'image basketball.jpg');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Basket-ball</h3>
                <p className="text-gray-600">
                  Une passion qui m'accompagne depuis l'enfance, entre shoot à 3 points et défense agressive.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Photographie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => router.push('/passions/photographie')}
            tabIndex={0}
            role="button"
            aria-label="Voir la passion Photographie"
            onKeyDown={e => { if (e.key === 'Enter') router.push('/passions/photographie'); }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/photo.jpg"
                  alt="Photographie"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Photographie</h3>
                <p className="text-gray-600">
                  Capturer des moments uniques à travers mon objectif, de la street photography aux paysages urbains.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group cursor-pointer"
            onClick={() => router.push('/passions/tech')}
            tabIndex={0}
            role="button"
            aria-label="Voir la passion Tech & Innovation"
            onKeyDown={e => { if (e.key === 'Enter') router.push('/passions/tech'); }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Tech & Innovation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-apple-gray p-4 rounded-lg">
                    <span className="text-4xl">💻</span>
                    <p className="mt-2 text-sm">Développement Web</p>
                  </div>
                  <div className="bg-apple-gray p-4 rounded-lg">
                    <span className="text-4xl">🤖</span>
                    <p className="mt-2 text-sm">IA & ML</p>
                  </div>
                  <div className="bg-apple-gray p-4 rounded-lg">
                    <span className="text-4xl">📱</span>
                    <p className="mt-2 text-sm">Mobile</p>
                  </div>
                  <div className="bg-apple-gray p-4 rounded-lg">
                    <span className="text-4xl">🎮</span>
                    <p className="mt-2 text-sm">Gaming</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionPassions; 