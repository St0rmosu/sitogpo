'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Hammer, Building2, Home } from 'lucide-react';

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

export default function SuMisura() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Servizio Su Misura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-400"
          >
            Progetti personalizzati per privati e aziende
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-6">
                Raccontaci la tua idea
              </h2>
              <p className="text-stone-600 text-lg mb-8">
                Che tu sia un privato con un mobile da rigenerare o un'azienda che vuole 
                rinnovare gli uffici, siamo pronti a creare qualcosa di unico per te.
              </p>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-stone-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-stone-800 mb-6">
              Inviaci una Richiesta
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Come Funziona</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Contatto</h3>
                <p className="text-stone-400 text-sm">Inviaci foto e descrizione</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Preventivo</h3>
                <p className="text-stone-400 text-sm">Ti inviamo un progetto e prezzo</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Conferma</h3>
                <p className="text-stone-400 text-sm">Approvazione e inizio lavoro</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Consegna</h3>
                <p className="text-stone-400 text-sm">Ricevi il mobile rigenerato</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}