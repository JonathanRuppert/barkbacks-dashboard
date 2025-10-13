import React from 'react';
import { motion } from 'framer-motion';

const pulses = [
  { emotion: 'Empathy', color: '#60A5FA' },
  { emotion: 'Trust', color: '#34D399' },
  { emotion: 'Excitement', color: '#FBBF24' },
  { emotion: 'Calm', color: '#A78BFA' },
  { emotion: 'Curiosity', color: '#F87171' }
];

const EmotionRemixPulseSync = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>💓 EmotionRemixPulseSync — Synchronized Rhythms</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        {pulses.map((pulse, index) => (
          <motion.div
            key={pulse.emotion}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
              delay: index * 0.3
            }}
            style={{
              backgroundColor: pulse.color,
              color: '#fff',
              padding: '1rem',
              margin: '0 0.5rem',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {pulse.emotion}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixPulseSync;
