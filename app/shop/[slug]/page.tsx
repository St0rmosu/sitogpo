'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Ruler, Leaf, Package, Check } from 'lucide-react';
import Link from 'next/link';
import products from '@/lib/products.json';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Prodotto non trovato</h1>
          <Link href="/shop" className="text-green-600 hover:underline">
            Torna al catalogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-stone-600 hover:text-green-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna al catalogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-200 mb-4">
              <img
                src={product.dopo}
                alt={product.nome}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-200">
              <img
                src={product.prima}
                alt={`${product.nome} - Prima`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded">
                PRIMA
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {product.categoria}
              </span>
              <h1 className="text-4xl font-bold text-stone-800 mt-4">{product.nome}</h1>
              <p className="text-3xl font-bold text-green-600 mt-2">€{product.prezzo}</p>
            </div>

            <p className="text-stone-600 text-lg">{product.descrizione}</p>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-green-600" />
                Carta d'Identità
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="text-stone-500 text-sm">Provenienza</span>
                    <p className="text-stone-800 font-medium">{product.provenienza}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="text-stone-500 text-sm">Misure</span>
                    <p className="text-stone-800 font-medium">{product.misure}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="text-stone-500 text-sm">Materiali Utilizzati</span>
                    <p className="text-stone-800 font-medium">{product.materiali}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="text-stone-500 text-sm">Risparmio CO₂</span>
                    <p className="text-stone-800 font-medium text-green-600">
                      {product.co2_risparmiato} kg di CO₂ non immesso in atmosfera
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]">
              Contattaci per questo mobile
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}