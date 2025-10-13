import React from 'react';
import { motion } from 'framer-motion';

const cosmosLegend = [
  { module: 'Aurora', symbol: '🌈', meaning: 'Emotional transitions and radiant flows' },
  { module: 'Echo', symbol: '🔁', meaning: 'Reflections and emotional memory loops' },
  { module: 'PulseSync', symbol: '💓', meaning: 'Synchronized emotional rhythms' },
  { module: 'ChronoPulse', symbol: '🕰️', meaning: 'Emotional rhythms across time' },
  { module: 'Nebula', symbol: '🌌', meaning: 'Emotional clusters and cosmic themes' },
  { module: 'Fusion', symbol: '🧬', meaning: 'Hybrid emotional states' },
  { module: 'Cascade', symbol: '🏛️', meaning: 'Layered emotional architecture' },
  { module: 'OrbitTrail', symbol: '🪐', meaning: 'Emotional paths around core themes' },
  { module: 'Map', symbol: '🗺️', meaning: 'Mood atlas and emotional territories' },
  { module: 'Tide', symbol: '🌊', meaning: 'Emotional ebb and flow' },
  { module: 'Nova', symbol: '💥', meaning: 'Emotional surges and breakthroughs' },
  { module: 'Depth', symbol: '🪨', meaning: 'Vertical sentiment layering' },
  { module: 'ChronoMilestone', symbol: '📍', meaning: 'Emotional timeline milestones' },
  { module: 'AuroraLegend', symbol: '🧭', meaning: 'Symbolic meanings of Aurora emotions' },
  { module: 'Cosmos', symbol: '✨', meaning: 'Unified emotional constellation' }
];

const EmotionRemixCosmosLegend = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>✨ EmotionRemixCosmosLegend — Module Symbol Guide</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        {cosmosLegend.map((item, index) => (
          <motion.div
            key={item.module}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              backgroundColor: '#111827',
              color: '#fff',
              padding: '1rem',
              margin: '0.5rem',
              borderRadius: '12px',
              minWidth: '200px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>{item.symbol}</div>
            <div style={{ fontWeight: 'bold' }}>{item.module}</div>
            <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.meaning}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionRemixCosmosLegend;
