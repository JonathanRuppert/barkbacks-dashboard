// EmotionRemixAurora.jsx — Visualize emotional remix shifts like northern lights

import React from 'react';

const EmotionRemixAurora = () => {
  const imageUrl = '/emotion_remix_aurora.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌈 Emotion Remix Aurora</h3>
      <p>This chart visualizes emotional remix shifts over time like northern lights.</p>
      <img src={imageUrl} alt="Emotion Remix Aurora Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0fffb',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #87e8de',
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
