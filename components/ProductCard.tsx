'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    nome: string;
    slug: string;
    prezzo: number;
    misure: string;
    provenienza: string;
    co2_risparmiato: number;
    categoria: string;
    dopo: string;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.dopo}
          alt={product.nome}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
          {product.categoria}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-800 mb-2">
          {product.nome}
        </h3>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">
          {product.provenienza}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">
            €{product.prezzo}
          </span>
          <span className="text-stone-400 text-sm">
            {product.misure}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-stone-600 mb-4">
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
            -{product.co2_risparmiato}kg CO₂
          </span>
        </div>

        <Link
          href={`/shop/${product.slug}`}
          className="flex items-center justify-center gap-2 w-full py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
        >
          Vedi Dettagli
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}