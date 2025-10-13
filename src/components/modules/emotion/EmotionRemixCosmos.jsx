import React from 'react';
import { motion } from 'framer-motion';

const cosmosModules = [
  { name: 'Aurora', color: '#FBBF24', x: -100, y: -60 },
  { name: 'Echo', color: '#A78BFA', x: 80, y: -80 },
  { name: 'PulseSync', color: '#34D399', x: -120, y: 40 },
  { name: 'ChronoPulse', color: '#60A5FA', x: 100, y: 60 },
  { name: 'Nebula', color: '#F87171', x: 0, y: 0 },
  { name: 'Fusion', color: '#FBBF24', x: -60, y: 120 },
  { name: 'Cascade', color: '#A78BFA', x: 60, y: 140 },
  { name: 'OrbitTrail', color: '#34D399', x: -140, y: -120 },
  { name: 'Map', color: '#60A5FA', x: 140, y: -140 },
  { name: 'Tide', color: '#F87171', x: -160, y: 160 },
  { name: 'Nova', color: '#FBBF24', x: 160, y: 160 },
  { name: 'Depth', color: '#A78BFA', x: -180, y: -180 },
  { name: 'ChronoMilestone', color: '#34D399', x: 180, y: -180 },
  { name: 'AuroraLegend', color: '#60A5FA', x: -200, y: 200 }
];

const EmotionRemixCosmos = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🌌 EmotionRemixCosmos — Unified Emotional Constellation</h2>
      <div style={{ position: 'relative', height: '500px', marginTop: '2rem' }}>
        {cosmosModules.map((mod, index) => (
          <motion.div
            key={mod.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${mod.x}px)`,
              top: `calc(50% + ${mod.y}px)`,
              backgroundColor: mod.color,
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {mod.name}
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
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          BarkBacks Core
        </div>
      </div>
    </div>
  );
};

export default EmotionRemixCosmos;
