import React from 'react';
import { motion } from 'framer-motion';

const fusionPairs = [
  { primary: 'Joy', secondary: 'Wonder', color: '#FBBF24', glow: '#FDE68A' },
  { primary: 'Comfort', secondary: 'Gratitude', color: '#60A5FA', glow: '#BFDBFE' },
  { primary: 'Curiosity', secondary: 'Hope', color: '#34D399', glow: '#A7F3D0' },
  { primary: 'Nostalgia', secondary: 'Resilience', color: '#A78BFA', glow: '#DDD6FE' },
  { primary: 'Love', secondary: 'Liberation', color: '#F87171', glow: '#FCA5A5' }
];

const EmotionRemixFusion = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🧬 EmotionRemixFusion — Hybrid Emotional States</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {fusionPairs.map((pair, index) => (
          <motion.div
            key={`${pair.primary}-${pair.secondary}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              background: `radial-gradient(circle at center, ${pair.glow}, ${pair.color})`,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)'
            }}
          >
            {pair.primary} + {pair.secondary}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixFusion;
