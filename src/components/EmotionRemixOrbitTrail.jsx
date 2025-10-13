// EmotionRemixOrbitTrail.jsx — Visualize remix orbit paths and emotional trails

import React from 'react';

const EmotionRemixOrbitTrail = () => {
  const imageUrl = '/orbit_trail_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🪐 Emotion Remix Orbit Trail</h3>
      <p>This chart visualizes remix orbit paths and emotional trails using circular tiers and emotion-colored creator nodes.</p>
      <img src={imageUrl} alt="Emotion Remix Orbit Trail Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fffbe6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffe58f',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixOrbitTrail;
