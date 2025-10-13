import React from 'react';
import { motion } from 'framer-motion';

const emotions = [
  { label: 'Longing', color: '#A78BFA' },
  { label: 'Reflection', color: '#60A5FA' },
  { label: 'Melancholy', color: '#F87171' },
  { label: 'Resilience', color: '#34D399' },
  { label: 'Wonder', color: '#FBBF24' }
];

const EmotionRemixEcho = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>🔁 EmotionRemixEcho — Reflective Loops</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        {emotions.map((emotion, index) => (
          <motion.div
            key={emotion.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: emotion.color,
              color: '#fff',
              padding: '1rem',
              margin: '0 0.5rem',
              borderRadius: '8px',
              minWidth: '120px',
              textAlign: 'center',
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

export default EmotionRemixEcho;
