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
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Il Nostro Processo</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            5 fasi per trasformare un mobile dimenticato in un'opera d'arte
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                        {step.ordine}
                      </div>
                      <h3 className="text-lg font-semibold text-stone-800 mb-2">
                        {step.titolo}
                      </h3>
                      <p className="text-stone-600 text-sm">
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