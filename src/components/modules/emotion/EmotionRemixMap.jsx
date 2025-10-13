import React from 'react';
import { motion } from 'framer-motion';

const emotionZones = [
  { label: 'Joy Zone', color: '#FBBF24', x: 20, y: 30 },
  { label: 'Calm Basin', color: '#A78BFA', x: 180, y: 60 },
  { label: 'Hope Ridge', color: '#34D399', x: 100, y: 150 },
  { label: 'Memory Valley', color: '#60A5FA', x: 40, y: 220 },
  { label: 'Wonder Peak', color: '#F87171', x: 160, y: 200 }
];

const EmotionRemixMap = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🗺️ EmotionRemixMap — Mood Atlas</h2>
      <div style={{ position: 'relative', width: '300px', height: '300px', margin: '2rem auto', background: '#F3F4F6', borderRadius: '12px' }}>
        {emotionZones.map((zone, index) => (
          <motion.div
            key={zone.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              position: 'absolute',
              left: `${zone.x}px`,
              top: `${zone.y}px`,
              backgroundColor: zone.color,
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            {zone.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixMap;
