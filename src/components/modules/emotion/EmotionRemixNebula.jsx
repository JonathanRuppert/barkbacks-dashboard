import React from 'react';
import { motion } from 'framer-motion';

const nebulaClusters = [
  {
    theme: 'Radiance',
    emotions: ['Joy', 'Wonder', 'Excitement'],
    color: '#FBBF24'
  },
  {
    theme: 'Reflection',
    emotions: ['Nostalgia', 'Gratitude', 'Comfort'],
    color: '#60A5FA'
  },
  {
    theme: 'Momentum',
    emotions: ['Curiosity', 'Hope', 'Liberation'],
    color: '#34D399'
  },
  {
    theme: 'Depth',
    emotions: ['Resilience', 'Calm', 'Trust'],
    color: '#A78BFA'
  },
  {
    theme: 'Bond',
    emotions: ['Love', 'Affection', 'Connection'],
    color: '#F87171'
  }
];

const EmotionRemixNebula = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🌌 EmotionRemixNebula — Cosmic Emotional Clusters</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {nebulaClusters.map((cluster, index) => (
          <motion.div
            key={cluster.theme}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: cluster.color,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '12px',
              minWidth: '200px',
              boxShadow: '0 0 12px rgba(0,0,0,0.2)',
              fontWeight: 'bold'
            }}
          >
            <div style={{ fontSize: '1.2rem' }}>{cluster.theme}</div>
            <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {cluster.emotions.join(', ')}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixNebula;
