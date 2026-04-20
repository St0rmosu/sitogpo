'use client';

import { motion } from 'framer-motion';
import ProcessTimeline from '@/components/ProcessTimeline';
import { Award, Users, Heart } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Anni di Attività', icon: Award },
  { value: '500+', label: 'Mobili Rigenerati', icon: Users },
  { value: '100%', label: 'Soddisfazione Clienti', icon: Heart },
];

export default function Processo() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-midnight pointer-events-none" />
        <div className="bg-midnight text-cream py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3 md:mb-4"
            >
              Il Nostro Processo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-cream/60"
            >
              Dalla raccolta alla consegna, ogni fase è curata nei minimi dettagli
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-midnight to-cream-dark pointer-events-none" />
        <ProcessTimeline />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream-dark to-midnight pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-midnight text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-midnight to-sage pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-sage text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 md:w-10 h-8 md:h-10 mx-auto mb-3 md:mb-4 text-cream/60" />
                  <div className="text-4xl md:text-5xl font-serif font-semibold text-cream mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-cream/80 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}