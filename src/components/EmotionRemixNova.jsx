// EmotionRemixNova.jsx — Visualize remix bursts and sudden emotional surges

import React from 'react';

const EmotionRemixNova = () => {
  const imageUrl = '/nova_remix_burst_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌟 Emotion Remix Nova</h3>
      <p>This chart visualizes remix bursts and sudden emotional surges using emotion-colored radial spikes and burst intensity.</p>
      <img src={imageUrl} alt="Emotion Remix Nova Chart" style={styles.image} />
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

export default EmotionRemixNova;
