'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, Home } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
    tipo: 'privato' as 'privato' | 'azienda',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-sage/20 border border-sage/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/30 flex items-center justify-center">
          <Send className="w-8 h-8 text-sage-dark" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-midnight mb-2">Grazie!</h3>
        <p className="text-midnight/60">
          Il tuo messaggio è stato inviato. Ti ricontatteremo entro 24-48 ore.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-midnight/70 font-medium mb-2">Nome Completo</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30" />
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all"
              placeholder="Il tuo nome"
            />
          </div>
        </div>

        <div>
          <label className="block text-midnight/70 font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all"
              placeholder="tua@email.it"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-midnight/70 font-medium mb-2">Tipo di Richiesta</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, tipo: 'privato' })}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
              formData.tipo === 'privato'
                ? 'border-terracotta bg-terracotta/10 text-terracotta'
                : 'border-sand/30 text-midnight/60 hover:border-terracotta/30'
            }`}
          >
            <Home className="w-5 h-5" />
            Privato
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, tipo: 'azienda' })}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
              formData.tipo === 'azienda'
                ? 'border-terracotta bg-terracotta/10 text-terracotta'
                : 'border-sand/30 text-midnight/60 hover:border-terracotta/30'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Azienda
          </button>
        </div>
      </div>

      <div>
        <label className="block text-midnight/70 font-medium mb-2">Messaggio</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-midnight/30" />
          <textarea
            required
            rows={5}
            value={formData.messaggio}
            onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
            className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all resize-none"
            placeholder="Descrivi il tuo mobile o il progetto..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-terracotta text-cream font-medium rounded-xl hover:bg-terracotta-light transition-all hover:shadow-lg hover:shadow-terracotta/20"
      >
        Invia Richiesta
      </button>
    </form>
  );
}