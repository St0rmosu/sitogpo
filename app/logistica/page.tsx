'use client';

import { motion } from 'framer-motion';
import { Package, Truck, MapPin, Clock, Shield, Leaf } from 'lucide-react';

const deliveryZones = [
  { name: 'Milano Città', time: '24-48h', price: 'Gratis' },
  { name: 'Milano Provincia', time: '48-72h', price: '€30' },
  { name: 'Lombardia', time: '3-5 giorni', price: '€50' },
  { name: 'Nord Italia', time: '5-7 giorni', price: '€80' },
  { name: 'Centro-Sud Italia', time: '7-10 giorni', price: '€120' },
  { name: 'Isole', time: '10-14 giorni', price: '€150' },
];

const packagingFeatures = [
  { icon: Package, title: 'Materiali Riciclati', description: 'Usiamo solo cartone e pluriball riciclati' },
  { icon: Shield, title: 'Protezione Extra', description: 'Angoli rinforzati e imbottitura antiurto' },
  { icon: Leaf, title: 'Zero Plastica', description: 'Nastro adesivo biodegradabile' },
];

export default function Logistica() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-midnight pointer-events-none z-10" />
        <div className="bg-midnight text-cream py-20 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3 md:mb-4"
            >
              Logistica & Spedizioni
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-cream/60"
            >
              Consegne sicure e sostenibili in tutta Italia
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-midnight to-cream-dark pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-midnight mb-3 md:mb-4">
                Zone di Consegna
              </h2>
              <p className="text-base md:text-lg text-midnight/60">Serviamo tutta l&apos;Italia con tempi e costi variabili</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {deliveryZones.map((zone, index) => (
                <motion.div
                  key={zone.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-xl md:rounded-2xl p-4 md:p-6 border border-sand/30 hover:border-terracotta/30 transition-colors"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <MapPin className="w-4 md:w-5 h-4 md:h-5 text-terracotta" />
                    <h3 className="text-base md:text-lg font-serif font-semibold text-midnight">{zone.name}</h3>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 text-midnight/60 text-sm md:text-base">
                      <Clock className="w-3.5 md:w-4 h-3.5 md:h-4" />
                      <span>{zone.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-midnight/60 text-sm md:text-base">
                      <Truck className="w-3.5 md:w-4 h-3.5 md:h-4" />
                      <span className="font-semibold text-sage-dark">{zone.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream-dark to-sage pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-sage text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3 md:mb-4">
                Packaging Ecologico
              </h2>
              <p className="text-base md:text-lg text-cream/60">I mobili sono imballati con materiali 100% riciclati</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {packagingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-cream/10 flex items-center justify-center">
                    <feature.icon className="w-6 md:w-8 h-6 md:h-8 text-cream" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-semibold mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-cream/60 text-sm md:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sage to-cream pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-midnight mb-8 md:mb-12 text-center">
                Come Funziona la Consegna
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Conferma Ordine',
                    description: 'Ricevi una conferma con i dettagli della consegna',
                  },
                  {
                    step: 2,
                    title: 'Preparazione',
                    description: 'Il mobile viene imballato con cura entro 2-3 giorni lavorativi',
                  },
                  {
                    step: 3,
                    title: 'Spedizione',
                    description: 'Ricevi il tracking number per monitorare la consegna',
                  },
                  {
                    step: 4,
                    title: 'Consegna',
                    description: 'Il mobile arriva direttamente a casa tua, su appuntamento',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 md:gap-6"
                  >
                    <div className="w-10 md:w-12 h-10 md:h-12 flex-shrink-0 rounded-full bg-terracotta text-cream flex items-center justify-center font-semibold text-sm md:text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-serif font-semibold text-midnight mb-0.5 md:mb-1">{item.title}</h3>
                      <p className="text-midnight/60 text-sm md:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-midnight pointer-events-none" />
        
        <section className="py-16 md:py-24 bg-midnight text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-4 md:mb-6">
                Hai Domande sulla Consegna?
              </h2>
              <p className="text-base md:text-lg text-cream/60 mb-6 md:mb-10">
                Contattaci per informazioni specifiche sulla tua zona
              </p>
              <a
                href="/su-misura"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-terracotta text-cream font-medium rounded-full hover:bg-terracotta-light transition-all hover:shadow-lg hover:shadow-terracotta/20"
              >
                Contattaci
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}