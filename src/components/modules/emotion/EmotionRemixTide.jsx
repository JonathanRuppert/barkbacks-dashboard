import React from 'react';
import { motion } from 'framer-motion';

const tideWaves = [
  { emotion: 'Anticipation', color: '#FBBF24', delay: 0 },
  { emotion: 'Connection', color: '#34D399', delay: 0.3 },
  { emotion: 'Vulnerability', color: '#F87171', delay: 0.6 },
  { emotion: 'Comfort', color: '#A78BFA', delay: 0.9 },
  { emotion: 'Renewal', color: '#60A5FA', delay: 1.2 }
];

const EmotionRemixTide = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🌊 EmotionRemixTide — Ebb and Flow</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '200px', marginTop: '2rem' }}>
        {tideWaves.map((wave, index) => (
          <motion.div
            key={wave.emotion}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: wave.delay
            }}
            style={{
              backgroundColor: wave.color,
              color: '#fff',
              width: '60px',
              margin: '0 0.5rem',
              borderRadius: '8px 8px 0 0',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              fontWeight: 'bold',
              paddingBottom: '0.5rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {wave.emotion}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixTide;
