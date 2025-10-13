import React from 'react';
import { motion } from 'framer-motion';

const orbitThemes = [
  { core: 'Belonging', orbit: 'Trust', color: '#34D399', radius: 60 },
  { core: 'Discovery', orbit: 'Curiosity', color: '#F87171', radius: 90 },
  { core: 'Memory', orbit: 'Nostalgia', color: '#A78BFA', radius: 120 },
  { core: 'Growth', orbit: 'Resilience', color: '#60A5FA', radius: 150 },
  { core: 'Connection', orbit: 'Empathy', color: '#FBBF24', radius: 180 }
];

const EmotionRemixOrbitTrail = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🪐 EmotionRemixOrbitTrail — Emotional Paths Around Core Themes</h2>
      <div style={{ position: 'relative', height: '400px', marginTop: '2rem' }}>
        {orbitThemes.map((theme, index) => (
          <motion.div
            key={theme.orbit}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${theme.radius * Math.cos(index)}px)`,
              top: `calc(50% + ${theme.radius * Math.sin(index)}px)`,
              backgroundColor: theme.color,
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
            {theme.orbit}
          </motion.div>
        ))}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#111827',
            color: '#fff',
            padding: '1rem',
            borderRadius: '12px',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}
        >
          Core Themes
        </div>
      </div>
    </div>
  );
};

export default EmotionRemixOrbitTrail;
