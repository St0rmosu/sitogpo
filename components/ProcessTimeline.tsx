'use client';

import { motion } from 'framer-motion';
import { Recycle, Sparkles, Palette, Hammer, CheckCircle } from 'lucide-react';
import processData from '@/lib/process.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  recycle: Recycle,
  sparkles: Sparkles,
  palette: Palette,
  hammer: Hammer,
  check: CheckCircle,
};

export default function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-midnight mb-3 md:mb-4">
            Il Nostro Processo
          </h2>
          <p className="text-base md:text-lg text-midnight/70 max-w-2xl mx-auto">
            5 fasi per trasformare un mobile dimenticato in un&apos;opera d&apos;arte
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-sand -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {processData.map((step, index) => {
              const Icon = iconMap[step.icona] || Recycle;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-cream rounded-xl md:rounded-2xl p-4 md:p-6 border border-sand/30 hover:border-terracotta/30 hover:shadow-lg hover:shadow-terracotta/5 transition-all">
                    <div className="w-10 md:w-14 h-10 md:h-14 mx-auto mb-3 md:mb-4 rounded-full bg-terracotta/10 flex items-center justify-center">
                      <Icon className="w-5 md:w-7 h-5 md:h-7 text-terracotta" />
                    </div>
                    
                    <div className="text-center">
                      <div className="w-7 md:w-8 h-7 md:h-8 mx-auto mb-2 md:mb-3 rounded-full bg-midnight text-cream flex items-center justify-center text-xs md:text-sm font-semibold">
                        {step.ordine}
                      </div>
                      <h3 className="text-sm md:text-lg font-serif font-semibold text-midnight mb-1 md:mb-2">
                        {step.titolo}
                      </h3>
                      <p className="text-xs md:text-sm text-midnight/60 leading-relaxed">
                        {step.descrizione}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}