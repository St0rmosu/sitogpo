'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Hammer, Building2, Home, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Privati',
    description: 'Hai un vecchio mobile in soffitta? Inviaci una foto e ti proponiamo un progetto di restyling personalizzato.',
  },
  {
    icon: Building2,
    title: 'Aziende & Uffici',
    description: 'Rinnoviamo il look dei tuoi uffici usando i tuoi stessi mobili. Risparmio economico e maggiore sostenibilità.',
  },
  {
    icon: Hammer,
    title: 'Progetti Speciali',
    description: 'Realizziamo mobili su commissione, completamenti d\'arredo e pezzi unici per ambienti specifici.',
  },
];

const steps = [
  { number: 1, title: 'Contatto', description: 'Inviaci foto e descrizione' },
  { number: 2, title: 'Preventivo', description: 'Ti inviamo un progetto e prezzo' },
  { number: 3, title: 'Conferma', description: 'Approvazione e inizio lavoro' },
  { number: 4, title: 'Consegna', description: 'Ricevi il mobile rigenerato' },
];

export default function SuMisura() {
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
              Servizio Su Misura
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-cream/60"
            >
              Progetti personalizzati per privati e aziende
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-terracotta/10 rounded-full mb-4 md:mb-6">
                  <Sparkles className="w-3.5 md:w-4 h-3.5 md:h-4 text-terracotta" />
                  <span className="text-xs md:text-sm font-medium text-terracotta">Personalizzazione Totale</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-midnight mb-4 md:mb-6">
                  Raccontaci la tua idea
                </h2>
                <p className="text-base md:text-lg text-midnight/70 mb-6 md:mb-10 leading-relaxed">
                  Che tu sia un privato con un mobile da rigenerare o un&apos;azienda che vuole 
                  rinnovare gli uffici, siamo pronti a creare qualcosa di unico per te.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3 md:gap-4 p-4 md:p-6 bg-cream-dark rounded-xl md:rounded-2xl border border-sand/30 hover:border-terracotta/20 transition-colors"
                    >
                      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 md:w-6 h-5 md:h-6 text-terracotta" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-serif font-semibold text-midnight mb-1 md:mb-2">
                          {service.title}
                        </h3>
                        <p className="text-midnight/70 text-sm md:text-base">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-cream-dark rounded-xl md:rounded-2xl p-6 md:p-8 border border-sand/30"
            >
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-midnight mb-4 md:mb-6">
                Inviaci una Richiesta
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-midnight pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-midnight text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-3 md:mb-4">Come Funziona</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 md:w-14 h-12 md:h-14 mx-auto mb-3 md:mb-4 rounded-full bg-terracotta/20 flex items-center justify-center text-lg md:text-xl font-semibold text-terracotta">
                    {step.number}
                  </div>
                  <h3 className="font-serif font-semibold mb-1 md:mb-2 text-sm md:text-base">{step.title}</h3>
                  <p className="text-cream/50 text-xs md:text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}