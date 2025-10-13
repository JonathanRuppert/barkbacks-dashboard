import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { time: 'Day 1', emotion: 'Curiosity', color: '#F87171' },
  { time: 'Week 1', emotion: 'Connection', color: '#34D399' },
  { time: 'Month 1', emotion: 'Comfort', color: '#A78BFA' },
  { time: 'Month 3', emotion: 'Gratitude', color: '#60A5FA' },
  { time: 'Month 6', emotion: 'Joy', color: '#FBBF24' }
];

const EmotionRemixChronoMilestone = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>📍 EmotionRemixChronoMilestone — Emotional Timeline</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', background: '#E5E7EB', transform: 'translateY(-50%)' }} />
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.time}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              backgroundColor: milestone.color,
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              zIndex: 1
            }}
          >
            <div>{milestone.time}</div>
            <div>{milestone.emotion}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixChronoMilestone;
