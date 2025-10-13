// EmotionRemixOrbit.jsx — Visualize creator movement between emotional remix galaxies

import React from 'react';

const EmotionRemixOrbit = () => {
  const imageUrl = '/emotion_orbit_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🪐 Emotion Remix Orbit</h3>
      <p>This chart visualizes how creators move between emotional remix galaxies over time using curved paths and color-coded emotion flows.</p>
      <img src={imageUrl} alt="Emotion Remix Orbit Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff0f6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffadd2',
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
