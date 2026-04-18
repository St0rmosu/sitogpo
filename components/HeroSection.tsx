'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Hammer } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-sage/10" />
        <div className="absolute top-20 -right-20 md:right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-terracotta/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 md:left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-sage/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-terracotta/10 rounded-full mb-4 md:mb-6">
              <Hammer className="w-3.5 h-3.5 text-terracotta" />
              <span className="text-xs md:text-sm font-medium text-terracotta">Restauro Artigianale</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-midnight leading-[1.15] mb-4 md:mb-6">
              Ogni mobile ha una{' '}
              <span className="text-gradient">storia da raccontare</span>
            </h1>
            
            <p className="text-base md:text-lg text-midnight/70 mb-6 md:mb-8 max-w-lg leading-relaxed">
              Diamo una seconda vita ai pezzi dimenticati. Trasformiamo mobili trascurati 
              in opere d&apos;arte uniche per la tua casa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-terracotta text-cream font-medium rounded-full hover:bg-terracotta-light transition-all hover:shadow-lg hover:shadow-terracotta/20 text-sm md:text-base"
              >
                Scopri la Collezione
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/processo"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-midnight/5 text-midnight font-medium rounded-full hover:bg-midnight/10 transition-colors text-sm md:text-base"
              >
                Il Nostro Processo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-[3/4] lg:aspect-[4/5] max-w-sm mx-auto lg:max-w-none rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1000&fit=crop"
                alt="Mobile restaurato"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-cream p-4 md:p-6 rounded-xl lg:rounded-2xl shadow-lg md:shadow-xl w-48 md:w-auto"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 rounded-full bg-sage/20 flex items-center justify-center">
                  <span className="text-xl md:text-2xl">🌱</span>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-midnight/60">CO₂ risparmiato</p>
                  <p className="text-lg md:text-xl font-serif font-semibold text-midnight">270 kg</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-16"
        >
          {[
            { number: '10+', label: 'Anni di esperienza' },
            { number: '500+', label: 'Mobili salvati' },
            { number: '100%', label: 'Artigianali' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-semibold text-terracotta">{stat.number}</p>
              <p className="text-xs md:text-sm text-midnight/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}