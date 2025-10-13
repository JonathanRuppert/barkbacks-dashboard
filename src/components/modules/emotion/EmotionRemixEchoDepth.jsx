import React from 'react';
import { motion } from 'framer-motion';

const echoLayers = [
  { emotion: 'Curiosity', depth: 1, color: '#F87171' },
  { emotion: 'Connection', depth: 2, color: '#34D399' },
  { emotion: 'Comfort', depth: 3, color: '#A78BFA' },
  { emotion: 'Gratitude', depth: 4, color: '#60A5FA' },
  { emotion: 'Joy', depth: 5, color: '#FBBF24' }
];

const EmotionRemixEchoDepth = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🪨 EmotionRemixEchoDepth — Layered Emotional Echoes</h2>
      <div style={{ position: 'relative', height: '400px', marginTop: '2rem' }}>
        {echoLayers.map((layer, index) => (
          <motion.div
            key={layer.emotion}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${1 + layer.depth * 0.2})`,
              backgroundColor: layer.color,
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '50%',
              fontWeight: 'bold',
              boxShadow: '0 0 12px rgba(0,0,0,0.2)',
              zIndex: echoLayers.length - index
            }}
          >
            {layer.emotion}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixEchoDepth;
