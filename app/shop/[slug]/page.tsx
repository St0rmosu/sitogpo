'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Ruler, Leaf, Package, Check, ArrowRight, Heart, Sparkles, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import products from '@/lib/products.json';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.slug === params.slug);
  const [activeImage, setActiveImage] = useState('dopo');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-midnight mb-4">Prodotto non trovato</h1>
          <Link href="/shop" className="text-terracotta hover:underline">
            Torna al catalogo
          </Link>
        </div>
      </div>
    );
  }

  const badges = [
    { icon: Leaf, label: 'Eco-Friendly', color: 'sage' },
    { icon: Award, label: 'Artigianato', color: 'terracotta' },
    { icon: Sparkles, label: 'Restaurato', color: 'midnight' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-midnight/50 hover:text-terracotta mb-6 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna al catalogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-dark mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={activeImage === 'dopo' ? product.dopo : product.prima}
                    alt={product.nome}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {badges.map((badge, i) => (
                    <span key={i} className={`px-3 py-1.5 bg-${badge.color}/90 backdrop-blur-sm text-cream text-xs font-medium rounded-full flex items-center gap-1.5`}>
                      <badge.icon className="w-3.5 h-3.5" />
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveImage('dopo')}
                  className={`relative aspect-square rounded-2xl overflow-hidden transition-all ${
                    activeImage === 'dopo' ? 'ring-2 ring-terracotta ring-offset-2' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={product.dopo} alt="Dopo" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-sage text-cream text-xs font-medium rounded-md">DOPO</div>
                </button>
                <button
                  onClick={() => setActiveImage('prima')}
                  className={`relative aspect-square rounded-2xl overflow-hidden transition-all ${
                    activeImage === 'prima' ? 'ring-2 ring-terracotta ring-offset-2' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={product.prima} alt="Prima" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-midnight text-cream text-xs font-medium rounded-md">PRIMA</div>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-sm font-medium rounded-full">
                  {product.categoria}
                </span>
                <span className="flex items-center gap-1 text-sage text-sm">
                  <Heart className="w-4 h-4" />
                  98% soddisfatti
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-midnight mb-3">
                {product.nome}
              </h1>
              <p className="text-4xl font-serif font-semibold text-terracotta">
                €{product.prezzo}
              </p>
            </div>

            <p className="text-midnight/70 leading-relaxed text-lg">
              {product.descrizione}
            </p>

            <div className="flex items-center gap-3 py-4 border-y border-sand/30">
              <span className="text-midnight/50 text-sm">Consegna stimata:</span>
              <span className="flex items-center gap-1.5 text-midnight font-medium">
                <Clock className="w-4 h-4 text-sage" />
                2-3 settimane
              </span>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6 border border-sand/30">
              <h2 className="text-lg font-serif font-semibold text-midnight mb-5 flex items-center gap-2">
                <Package className="w-5 h-5 text-terracotta" />
                Dettagli
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-sand/20">
                  <div className="flex items-center gap-2 text-midnight/60">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Provenienza</span>
                  </div>
                  <span className="text-midnight font-medium text-sm">{product.provenienza}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-sand/20">
                  <div className="flex items-center gap-2 text-midnight/60">
                    <Ruler className="w-4 h-4" />
                    <span className="text-sm">Misure</span>
                  </div>
                  <span className="text-midnight font-medium text-sm">{product.misure}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-sand/20">
                  <div className="flex items-center gap-2 text-midnight/60">
                    <Leaf className="w-4 h-4" />
                    <span className="text-sm">Materiali</span>
                  </div>
                  <span className="text-midnight font-medium text-sm">{product.materiali}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2 text-midnight/60">
                    <Check className="w-4 h-4 text-sage" />
                    <span className="text-sm">Impatto CO₂</span>
                  </div>
                  <span className="text-sage-dark font-medium text-sm">-{product.co2_risparmiato}kg risparmiati</span>
                </div>
              </div>
            </div>

            <div className="bg-sage/10 rounded-2xl p-5 border border-sage/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-sage-dark" />
                </div>
                <div>
                  <h3 className="text-midnight font-medium mb-1">Impatto Ambientale Positivo</h3>
                  <p className="text-midnight/60 text-sm">Questo mobile ha salvato {product.co2_risparmiato}kg di CO₂. Scegliere mobili restaurati significa ridurre l'impatto ambientale del 85% rispetto all'acquisto di mobili nuovi.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link 
                href="/su-misura"
                className="flex items-center justify-center gap-3 w-full py-4 bg-midnight text-cream font-medium rounded-xl hover:bg-midnight-light transition-all hover:shadow-lg hover:shadow-midnight/20"
              >
                Richiedi Informazioni
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-midnight/40 text-sm">Pagamento sicuro • Garanzia 2 anni</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}