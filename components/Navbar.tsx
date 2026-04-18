'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hammer } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Collezione' },
  { href: '/processo', label: 'Processo' },
  { href: '/su-misura', label: 'Su Misura' },
  { href: '/sostenibilita', label: 'Sostenibilità' },
  { href: '/logistica', label: 'Logistica' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-lg border-b border-sand/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
              <Hammer className="w-4 h-4 md:w-5 md:h-5 text-terracotta" />
            </div>
            <span className="text-lg md:text-2xl font-serif font-semibold text-midnight tracking-tight">
              L&apos;Impatto Visivo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-midnight/80 hover:text-terracotta transition-colors font-sans text-sm font-medium rounded-lg hover:bg-terracotta/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-midnight/80 hover:text-terracotta transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-dark/50 border-t border-sand/20"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-midnight/80 hover:text-terracotta transition-colors font-sans font-medium py-3 px-4 rounded-lg hover:bg-terracotta/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}