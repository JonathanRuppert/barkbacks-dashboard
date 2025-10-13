import React from 'react';
import { motion } from 'framer-motion';

const pulsePairs = [
  { creator: 'Joy', pet: 'Excitement', color: '#FBBF24' },
  { creator: 'Comfort', pet: 'Trust', color: '#60A5FA' },
  { creator: 'Curiosity', pet: 'Playfulness', color: '#34D399' },
  { creator: 'Gratitude', pet: 'Affection', color: '#A78BFA' },
  { creator: 'Calm', pet: 'Contentment', color: '#F87171' }
];

const EmotionRemixPulseSync = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>💓 EmotionRemixPulseSync — Creator & Pet Emotional Rhythms</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {pulsePairs.map((pair, index) => (
          <motion.div
            key={`${pair.creator}-${pair.pet}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: pair.color,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '12px',
              minWidth: '180px',
              boxShadow: '0 0 12px rgba(0,0,0,0.2)',
              fontWeight: 'bold'
            }}
          >
            <div>👤 {pair.creator}</div>
            <div>🐾 {pair.pet}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixPulseSync;
