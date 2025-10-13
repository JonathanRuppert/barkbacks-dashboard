// EmotionRemixAurora.jsx

import React from 'react';
import { motion } from 'framer-motion';

const emotions = [
  { name: 'Love', color: '#FF4C4C', glow: 5 },
  { name: 'Nostalgia', color: '#FF99CC', glow: 4 },
  { name: 'Hope', color: '#66CC99', glow: 3 },
  { name: 'Gratitude', color: '#66CCFF', glow: 2 },
  { name: 'Joy', color: '#FFD966', glow: 1 },
];

const EmotionRemixAurora = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #001F3F, #0074D9)', padding: '2rem', borderRadius: '1rem' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>🌠 EmotionRemixAurora — Glowing Transitions</h2>
      <svg width="100%" height="300">
        {emotions.map((emotion, index) => {
          const next = emotions[index + 1];
          if (!next) return null;
          return (
            <motion.line
              key={emotion.name}
              x1={index * 120 + 60}
              y1={150}
              x2={(index + 1) * 120 + 60}
              y2={150}
              stroke={emotion.color}
              strokeWidth={emotion.glow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          );
        })}
        {emotions.map((emotion, index) => (
          <circle
            key={emotion.name}
            cx={index * 120 + 60}
            cy={150}
            r={10}
            fill={emotion.color}
          />
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
        {emotions.map(emotion => (
          <div key={emotion.name} style={{ color: emotion.color, fontWeight: 'bold' }}>
            {emotion.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixAurora;
