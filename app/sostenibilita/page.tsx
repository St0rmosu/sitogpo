'use client';

import { motion } from 'framer-motion';
import SustainabilityCounter from '@/components/SustainabilityCounter';
import { Leaf, TreePine, Droplet, Recycle, TrendingUp, Globe } from 'lucide-react';

const initiatives = [
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Riduciamo i rifiuti salvando mobili dalla discarica e diamo loro una nuova vita.',
    impact: '127 mobili salvati',
  },
  {
    icon: TreePine,
    title: 'Risparmio Legno',
    description: 'Ogni mobile rigenerato significa meno alberi abbattuti.',
    impact: '850 kg di legno recuperato',
  },
  {
    icon: Droplet,
    title: 'Vernici Bio',
    description: 'Usiamo solo vernici ecologiche all\'acqua, senza tossine.',
    impact: '120 L di vernice tossica evitata',
  },
  {
    icon: Globe,
    title: 'Riduzione CO₂',
    description: 'La rigenerazione produce il 90% in meno di CO₂ rispetto a produrre nuovo.',
    impact: '2.450 kg CO₂ risparmiato',
  },
];

const certifications = [
  'Materiali Certificati FSC',
  'Vernici ECOLABEL',
  'Packaging 100% Riciclato',
  'Processo Carbon Neutral',
];

export default function Sostenibilita() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            La Nostra Sostenibilità
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100"
          >
            Ogni mobile rigenerato è un passo verso un futuro più verde
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-800 mb-4">I Nostri Numeri</h2>
            <p className="text-xl text-stone-600">L'impatto ambientale del nostro lavoro</p>
          </motion.div>
          <SustainabilityCounter />
        </div>
      </section>

      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Le Nostre Iniziative</h2>
            <p className="text-xl text-stone-400">Come contribuiamo alla sostenibilità</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-800 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                    <p className="text-stone-400 mb-4">{initiative.description}</p>
                    <span className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
                      {initiative.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Certificazioni</h2>
            <p className="text-xl text-stone-600">Standard e certificazioni che rispettiamo</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-4 bg-stone-100 rounded-xl text-stone-700 font-medium"
              >
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Il Futuro è Circolare</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Ogni scelta counts. Scegliere mobili rigenerati significa contribuire 
              a un'economia più sostenibile e rispettosa dell'ambiente.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}