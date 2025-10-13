import React from 'react';
import { motion } from 'framer-motion';

const cascadeLayers = [
  { emotion: 'Curiosity', color: '#F87171' },
  { emotion: 'Connection', color: '#34D399' },
  { emotion: 'Comfort', color: '#A78BFA' },
  { emotion: 'Gratitude', color: '#60A5FA' },
  { emotion: 'Joy', color: '#FBBF24' }
];

const EmotionRemixCascade = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🏛️ EmotionRemixCascade — Layered Emotional Architecture</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        {cascadeLayers.map((layer, index) => (
          <motion.div
            key={layer.emotion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: layer.color,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem 0',
              borderRadius: '8px',
              width: '200px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {layer.emotion}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixCascade;
