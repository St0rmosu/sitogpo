'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import products from '@/lib/products.json';

const categories = ['Tutti', 'Scrivanie', 'Comò', 'Librerie', 'Tavolini', 'Armadi'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');

  const filteredProducts = selectedCategory === 'Tutti'
    ? products
    : products.filter(p => p.categoria === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            La Nostra Collezione
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-400"
          >
            Pezzi unici rigenerati con cura artigianale
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">Nessun mobile in questa categoria</p>
          </div>
        )}
      </div>
    </div>
  );
}