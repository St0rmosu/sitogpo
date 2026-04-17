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
        className="bg-green-100 border border-green-300 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-stone-800 mb-2">Grazie!</h3>
        <p className="text-stone-600">
          Il tuo messaggio è stato inviato. Ti ricontatteremo entro 24-48 ore.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-stone-700 font-medium mb-2">Nome Completo</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full pl-12 pr-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Il tuo nome"
            />
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="tua@email.it"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-stone-700 font-medium mb-2">Tipo di Richiesta</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, tipo: 'privato' })}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
              formData.tipo === 'privato'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-stone-200 text-stone-600 hover:border-stone-300'
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
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-stone-200 text-stone-600 hover:border-stone-300'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Azienda
          </button>
        </div>
      </div>

      <div>
        <label className="block text-stone-700 font-medium mb-2">Messaggio</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-stone-400" />
          <textarea
            required
            rows={5}
            value={formData.messaggio}
            onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
            className="w-full pl-12 pr-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
            placeholder="Descrivi il tuo mobile o il progetto..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]"
      >
        Invia Richiesta
      </button>
    </form>
  );
}