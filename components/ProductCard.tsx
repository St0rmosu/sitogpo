'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

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
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="bg-cream-dark rounded-2xl overflow-hidden border border-sand/30 hover:border-terracotta/50 transition-all duration-300">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.dopo}
              alt={product.nome}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-cream/90 backdrop-blur-sm text-midnight text-[10px] font-medium rounded-full">
                {product.categoria}
              </span>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-base font-serif font-semibold text-midnight leading-tight mb-1 truncate">
              {product.nome}
            </h3>
            <div className="flex items-center gap-1.5 text-midnight/40 text-xs mb-3">
              <span className="truncate">{product.provenienza}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-serif font-semibold text-terracotta">
                €{product.prezzo}
              </span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-sage text-xs">
                  <Leaf className="w-3 h-3" />
                  <span>-{product.co2_risparmiato}kg</span>
                </div>
                <span className="w-7 h-7 flex items-center justify-center bg-midnight text-cream rounded-full group-hover:bg-terracotta transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}