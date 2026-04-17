'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import SustainabilityCounter from '@/components/SustainabilityCounter';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import products from '@/lib/products.json';

const values = [
  { icon: Leaf, title: 'Sostenibilità', description: 'Riduciamo i rifiuti salvando mobili dalla discarica' },
  { icon: Heart, title: 'Artigianato', description: 'Ogni pezzo è unico, realizzato a mano con cura' },
  { icon: Sparkles, title: 'Qualità', description: 'Materiali bio e finiture di alta qualità' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <HeroCarousel />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-800 mb-4">La Nostra Missione</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Ogni mobile ha una storia da raccontare. Noi la riscriviamo, trasformando 
              pezzi dimenticati in opere d'arte uniche per la tua casa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-stone-50 rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Il Nostro Impatto</h2>
            <p className="text-xl text-stone-400">I numeri della nostra sostenibilità</p>
          </motion.div>
          <SustainabilityCounter />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-stone-800">I Nostri Pezzi Unici</h2>
              <p className="text-stone-600 mt-2">Scopri la nostra collezione di mobili rigenerati</p>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Vedi Tutti
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Vedi Tutti
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Hai un Mobile da Rigenerare?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita. Ti proporremo un progetto di restyling personalizzato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/su-misura"
                className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Servizio Su Misura
              </Link>
              <Link
                href="/shop"
                className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
              >
                Scopri la Collezione
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}