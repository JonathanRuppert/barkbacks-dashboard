// EmotionRemixAurora.jsx — Visualize mood shifts and emotional transitions

import React from 'react';

const EmotionRemixAurora = () => {
  const imageUrl = '/aurora_mood_shift_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Aurora</h3>
      <p>This chart visualizes mood shifts and emotional transitions using aurora-style waves and emotion-colored gradients.</p>
      <img src={imageUrl} alt="Emotion Remix Aurora Chart" style={styles.image} />
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

export default EmotionRemixAurora;
