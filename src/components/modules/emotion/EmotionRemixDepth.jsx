import React from 'react';
import { motion } from 'framer-motion';

const depthLayers = [
  { emotion: 'Surface Joy', color: '#FBBF24' },
  { emotion: 'Layer of Calm', color: '#A78BFA' },
  { emotion: 'Stratum of Nostalgia', color: '#60A5FA' },
  { emotion: 'Bedrock of Resilience', color: '#34D399' },
  { emotion: 'Core of Wonder', color: '#F87171' }
];

const EmotionRemixDepth = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🪨 EmotionRemixDepth — Sentiment Layers</h2>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', marginTop: '2rem' }}>
        {depthLayers.map((layer, index) => (
          <motion.div
            key={layer.emotion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: layer.color,
              color: '#fff',
              padding: '1rem',
              margin: '0.3rem 0',
              borderRadius: '8px',
              width: '220px',
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

export default EmotionRemixDepth;
