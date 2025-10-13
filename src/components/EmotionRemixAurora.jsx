// EmotionRemixAurora.jsx — Visualize remix mood shifts and emotional transitions

import React from 'react';

const EmotionRemixAurora = () => {
  const imageUrl = '/aurora_remix_mood_shifts.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Aurora</h3>
      <p>This chart visualizes remix mood shifts and emotional transitions using flowing aurora bands and emotion-colored gradients.</p>
      <img src={imageUrl} alt="Emotion Remix Aurora Chart" style={styles.image} />
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

export default EmotionRemixAurora;
