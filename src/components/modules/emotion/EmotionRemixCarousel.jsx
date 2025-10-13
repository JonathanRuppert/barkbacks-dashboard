import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmotionContext } from './EmotionContext';

const modules = [
  { name: 'Aurora', color: '#FBBF24', symbol: '🌈' },
  { name: 'Echo', color: '#A78BFA', symbol: '🔁' },
  { name: 'PulseSync', color: '#34D399', symbol: '💓' },
  { name: 'ChronoPulse', color: '#60A5FA', symbol: '🕰️' },
  { name: 'Nebula', color: '#F87171', symbol: '🌌' },
  { name: 'Fusion', color: '#FBBF24', symbol: '🧬' },
  { name: 'Cascade', color: '#A78BFA', symbol: '🏛️' },
  { name: 'OrbitTrail', color: '#34D399', symbol: '🪐' },
  { name: 'Map', color: '#60A5FA', symbol: '🗺️' },
  { name: 'Tide', color: '#F87171', symbol: '🌊' },
  { name: 'Nova', color: '#FBBF24', symbol: '💥' },
  { name: 'Depth', color: '#A78BFA', symbol: '🪨' },
  { name: 'ChronoMilestone', color: '#34D399', symbol: '📍' },
  { name: 'AuroraLegend', color: '#60A5FA', symbol: '🧭' },
  { name: 'Cosmos', color: '#111827', symbol: '✨' }
];

const EmotionRemixCarousel = () => {
  const [index, setIndex] = useState(0);
  const { emotionData } = useContext(EmotionContext);
  const current = modules[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % modules.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>Current Mood: {emotionData.mood}</h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: current.color,
            color: '#fff',
            padding: '2rem',
            marginTop: '2rem',
            borderRadius: '16px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}
        >
          <div style={{ fontSize: '2rem' }}>{current.symbol}</div>
          {current.name}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EmotionRemixCarousel;
