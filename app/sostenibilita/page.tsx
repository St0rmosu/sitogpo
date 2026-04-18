'use client';

import { motion } from 'framer-motion';
import SustainabilityCounter from '@/components/SustainabilityCounter';
import { Leaf, TreePine, Droplet, Recycle, Globe } from 'lucide-react';

const initiatives = [
  {
    icon: Recycle,
    title: 'Economia Circolare',
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
    impact: '2.700 kg CO₂ risparmiato',
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
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-sage pointer-events-none" />
        <div className="bg-sage text-cream py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3 md:mb-4"
            >
              La Nostra Sostenibilità
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-cream/80"
            >
              Ogni mobile rigenerato è un passo verso un futuro più verde
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sage to-cream-dark pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-midnight mb-3 md:mb-4">
                I Nostri Numeri
              </h2>
              <p className="text-base md:text-lg text-midnight/60">L&apos;impatto ambientale del nostro lavoro</p>
            </motion.div>
            <SustainabilityCounter />
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream-dark to-midnight pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-midnight text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3 md:mb-4">
                Le Nostre Iniziative
              </h2>
              <p className="text-base md:text-lg text-cream/60">Come contribuiamo alla sostenibilità</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream/5 rounded-xl md:rounded-2xl p-5 md:p-8 border border-cream/10 hover:border-terracotta/30 transition-colors"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="w-5 md:w-7 h-5 md:h-7 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-serif font-semibold mb-1 md:mb-2">{initiative.title}</h3>
                      <p className="text-cream/60 text-sm md:text-base mb-3 md:mb-4">{initiative.description}</p>
                      <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-sage/20 text-sage rounded-full text-xs md:text-sm font-medium">
                        {initiative.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-midnight to-cream pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-midnight mb-3 md:mb-4">
                Certificazioni
              </h2>
              <p className="text-base md:text-lg text-midnight/60">Standard e certificazioni che rispettiamo</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-5 md:px-6 py-3 md:py-4 bg-cream-dark rounded-lg md:rounded-xl text-midnight/70 font-medium text-sm md:text-base border border-sand/30"
                >
                  <span className="inline-block w-2 h-2 bg-sage rounded-full mr-2" />
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-terracotta pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-terracotta text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Leaf className="w-10 md:w-12 h-10 md:h-12 mx-auto mb-4 md:mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-3 md:mb-4">
                Il Futuro è Circolare
              </h2>
              <p className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto">
                Ogni scelta conta. Scegliere mobili rigenerati significa contribuire 
                a un&apos;economia più sostenibile e rispettosa dell&apos;ambiente.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}