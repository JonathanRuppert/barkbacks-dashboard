import React from 'react';
import { motion } from 'framer-motion';

const auroraLegend = [
  { emotion: 'Love', color: '#F87171', symbol: '❤️', meaning: 'Unconditional connection and warmth' },
  { emotion: 'Nostalgia', color: '#A78BFA', symbol: '🕰️', meaning: 'Echoes of cherished memories' },
  { emotion: 'Hope', color: '#34D399', symbol: '🌱', meaning: 'Belief in future possibilities' },
  { emotion: 'Gratitude', color: '#60A5FA', symbol: '🙏', meaning: 'Recognition of meaningful moments' },
  { emotion: 'Joy', color: '#FBBF24', symbol: '🌞', meaning: 'Radiant happiness and delight' }
];

const EmotionRemixAuroraLegend = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🧭 EmotionRemixAuroraLegend — Symbolic Meaning Guide</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {auroraLegend.map((item, index) => (
          <motion.div
            key={item.emotion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: item.color,
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '12px',
              minWidth: '180px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>{item.symbol}</div>
            <div style={{ fontWeight: 'bold' }}>{item.emotion}</div>
            <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.meaning}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixAuroraLegend;
