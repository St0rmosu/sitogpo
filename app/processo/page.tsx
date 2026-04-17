'use client';

import { motion } from 'framer-motion';
import ProcessTimeline from '@/components/ProcessTimeline';
import { Play, Award, Users, Leaf } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Anni di Attività', icon: Award },
  { value: '500+', label: 'Mobili Rigenerati', icon: Users },
  { value: '100%', label: 'Soddisfazione Clienti', icon: Leaf },
];

export default function Processo() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Il Nostro Processo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-400"
          >
            Dalla raccolta alla consegna, ogni fase è curata nei minimi dettagli
          </motion.p>
        </div>
      </div>

      <ProcessTimeline />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Video del Processo</h2>
            <p className="text-xl text-stone-600">
              Guarda i nostri artigiani al lavoro
            </p>
          </motion.div>

          <div className="relative aspect-video bg-stone-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-stone-400">
                <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video timelapse in arrivo</p>
                <p className="text-sm">Mostra gli artigiani durante il restyling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}