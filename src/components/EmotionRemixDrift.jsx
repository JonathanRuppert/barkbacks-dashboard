// EmotionRemixDrift.jsx — Visualize emotional remix flow between creators over time

import React from 'react';

const EmotionRemixDrift = () => {
  const imageUrl = '/emotional_remix_drift_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌬️ Emotion Remix Drift</h3>
      <p>This chart visualizes how remix emotion travels between creators over time using curved arrows and color-coded flows.</p>
      <img src={imageUrl} alt="Emotion Remix Drift Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f9f0ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #d3adf7',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixDrift;
