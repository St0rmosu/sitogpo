'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream to-midnight pointer-events-none" />
        
        <section className="py-20 md:py-24 bg-midnight text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 md:mb-6">
                Hai un Mobile da Rigenerare?
              </h2>
              <p className="text-base md:text-lg text-cream/80 mb-8 md:mb-10 max-w-2xl mx-auto">
                Contattaci per una consulenza gratuita. Ti proporremo un progetto di restyling personalizzato.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="/su-misura"
                  className="px-6 md:px-8 py-3 md:py-4 bg-cream text-midnight font-medium rounded-full hover:bg-cream-dark transition-colors"
                >
                  Servizio Su Misura
                </Link>
                <Link
                  href="/shop"
                  className="px-6 md:px-8 py-3 md:py-4 bg-midnight/30 text-cream font-medium rounded-full hover:bg-midnight/50 transition-colors"
                >
                  Scopri la Collezione
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}