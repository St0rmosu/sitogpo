'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  icon: string;
}

function Counter({ value, label, suffix = '', icon }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-center"
    >
      <div className="text-5xl font-bold text-green-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-stone-600 font-medium">{label}</div>
    </motion.div>
  );
}

export default function SustainabilityCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <Counter value={127} label="Mobili Salvati" icon="sofa" />
      <Counter value={2450} label="kg CO₂ Risparmiato" suffix=" kg" icon="leaf" />
      <Counter value={850} label="kg Legno Recuperato" suffix=" kg" icon="tree" />
      <Counter value={120} label="L Vernice Evitata" suffix=" L" icon="droplet" />
    </div>
  );
}