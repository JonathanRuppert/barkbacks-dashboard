import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { time: 'Morning', emotion: 'Anticipation', color: '#FBBF24' },
  { time: 'Midday', emotion: 'Connection', color: '#34D399' },
  { time: 'Afternoon', emotion: 'Reflection', color: '#60A5FA' },
  { time: 'Evening', emotion: 'Comfort', color: '#A78BFA' },
  { time: 'Night', emotion: 'Wonder', color: '#F87171' }
];

const EmotionRemixChronoPulse = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>🕰️ EmotionRemixChronoPulse — Rhythms Over Time</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
        {timeline.map((entry, index) => (
          <motion.div
            key={entry.time}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: entry.color,
              color: '#fff',
              padding: '1rem',
              borderRadius: '12px',
              width: '120px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{entry.time}</div>
            <div>{entry.emotion}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixChronoPulse;
