// EmotionRemixOrbit.jsx — Visualize remix gravity as creator orbits

import React from 'react';

const EmotionRemixOrbit = () => {
  const imageUrl = '/emotional_remix_orbit_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🪐 Emotion Remix Orbit</h3>
      <p>This chart visualizes remix gravity — showing which creators attract the most emotional remixes.</p>
      <img src={imageUrl} alt="Emotion Remix Orbit Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0f5ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #adc6ff',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixOrbit;
