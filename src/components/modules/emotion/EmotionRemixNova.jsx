import React from 'react';
import { motion } from 'framer-motion';

const novaBursts = [
  { emotion: 'Breakthrough', color: '#F87171', scale: 1.6 },
  { emotion: 'Elation', color: '#FBBF24', scale: 1.4 },
  { emotion: 'Clarity', color: '#34D399', scale: 1.3 },
  { emotion: 'Awe', color: '#60A5FA', scale: 1.5 },
  { emotion: 'Liberation', color: '#A78BFA', scale: 1.7 }
];

const EmotionRemixNova = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>💥 EmotionRemixNova — Emotional Surges</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {novaBursts.map((burst, index) => (
          <motion.div
            key={burst.emotion}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: burst.scale, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: burst.color,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            {burst.emotion}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixNova;
