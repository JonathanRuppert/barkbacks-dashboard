import React from 'react';
import { motion } from 'framer-motion';

const constellationNodes = [
  { name: 'Aurora', color: '#FBBF24', x: -100, y: -60, symbol: '🌈' },
  { name: 'Echo', color: '#A78BFA', x: 80, y: -80, symbol: '🔁' },
  { name: 'PulseSync', color: '#34D399', x: -120, y: 40, symbol: '💓' },
  { name: 'ChronoPulse', color: '#60A5FA', x: 100, y: 60, symbol: '🕰️' },
  { name: 'Nebula', color: '#F87171', x: 0, y: 0, symbol: '🌌' },
  { name: 'Fusion', color: '#FBBF24', x: -60, y: 120, symbol: '🧬' },
  { name: 'Cascade', color: '#A78BFA', x: 60, y: 140, symbol: '🏛️' },
  { name: 'OrbitTrail', color: '#34D399', x: -140, y: -120, symbol: '🪐' },
  { name: 'Map', color: '#60A5FA', x: 140, y: -140, symbol: '🗺️' },
  { name: 'Tide', color: '#F87171', x: -160, y: 160, symbol: '🌊' },
  { name: 'Nova', color: '#FBBF24', x: 160, y: 160, symbol: '💥' },
  { name: 'Depth', color: '#A78BFA', x: -180, y: -180, symbol: '🪨' },
  { name: 'ChronoMilestone', color: '#34D399', x: 180, y: -180, symbol: '📍' },
  { name: 'AuroraLegend', color: '#60A5FA', x: -200, y: 200, symbol: '🧭' },
  { name: 'Cosmos', color: '#111827', x: 0, y: -200, symbol: '✨' }
];

const EmotionRemixConstellationMap = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>🌠 EmotionRemixConstellationMap — Interactive Emotional Universe</h2>
      <div style={{ position: 'relative', height: '600px', marginTop: '2rem' }}>
        {constellationNodes.map((node, index) => (
          <motion.div
            key={node.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${node.x}px)`,
              top: `calc(50% + ${node.y}px)`,
              backgroundColor: node.color,
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              cursor: 'pointer'
            }}
            title={`${node.name} — ${node.symbol}`}
          >
            {node.symbol} {node.name}
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
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          BarkBacks Core
        </div>
      </div>
    </div>
  );
};

export default EmotionRemixConstellationMap;
