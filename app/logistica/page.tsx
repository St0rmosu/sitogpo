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
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Logistica & Spedizioni
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-400"
          >
            Consegne sicure e sostenibili in tutta Italia
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
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Zone di Consegna</h2>
            <p className="text-xl text-stone-600">Serviamo tutta l'Italia con tempi e costi variabili</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-stone-800">{zone.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-600">
                    <Clock className="w-4 h-4" />
                    <span>{zone.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <Truck className="w-4 h-4" />
                    <span className="font-semibold text-green-600">{zone.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Packaging Ecologico</h2>
            <p className="text-xl text-stone-400">I mobili sono imballati con materiali 100% riciclati</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-stone-400">{feature.description}</p>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-stone-800 mb-8 text-center">
              Come Funziona la Consegna
            </h2>
            
            <div className="space-y-6">
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
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">{item.title}</h3>
                    <p className="text-stone-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Hai Domande sulla Consegna?</h2>
            <p className="text-xl text-green-100 mb-8">
              Contattaci per informazioni specifiche sulla tua zona
            </p>
            <a
              href="/su-misura"
              className="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Contattaci
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}