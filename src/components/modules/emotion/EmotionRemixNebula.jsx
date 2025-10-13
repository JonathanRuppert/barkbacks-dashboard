import React from 'react';
import { motion } from 'framer-motion';

const nebulaEmotions = [
  { label: 'Inspiration', color: '#FBBF24', x: -80, y: -40 },
  { label: 'Solitude', color: '#A78BFA', x: 60, y: -60 },
  { label: 'Joy', color: '#F87171', x: -50, y: 70 },
  { label: 'Gratitude', color: '#34D399', x: 80, y: 50 },
  { label: 'Mystery', color: '#60A5FA', x: 0, y: 0 }
];

const EmotionRemixNebula = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🌌 EmotionRemixNebula — Emotional Clusters</h2>
      <div style={{ position: 'relative', height: '300px', marginTop: '2rem' }}>
        {nebulaEmotions.map((emotion, index) => (
          <motion.div
            key={emotion.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${emotion.x}px)`,
              top: `calc(50% + ${emotion.y}px)`,
              backgroundColor: emotion.color,
              color: '#fff',
              padding: '1rem',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {emotion.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixNebula;
