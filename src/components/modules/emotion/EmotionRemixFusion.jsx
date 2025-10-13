import React from 'react';
import { motion } from 'framer-motion';

const fusionEmotions = [
  { label: 'Hope + Nostalgia', colors: ['#34D399', '#A78BFA'] },
  { label: 'Joy + Gratitude', colors: ['#FBBF24', '#60A5FA'] },
  { label: 'Love + Wonder', colors: ['#F87171', '#FBBF24'] },
  { label: 'Reflection + Resilience', colors: ['#60A5FA', '#34D399'] },
  { label: 'Curiosity + Calm', colors: ['#F87171', '#A78BFA'] }
];

const EmotionRemixFusion = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🧬 EmotionRemixFusion — Hybrid Emotional States</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {fusionEmotions.map((fusion, index) => (
          <motion.div
            key={fusion.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              background: `linear-gradient(135deg, ${fusion.colors[0]}, ${fusion.colors[1]})`,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '12px',
              minWidth: '160px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {fusion.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixFusion;
