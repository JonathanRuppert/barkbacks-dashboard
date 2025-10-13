// EmotionRemixNova.jsx — Spotlight sudden remix bursts across the emotional ecosystem

import React from 'react';

const EmotionRemixNova = () => {
  const imageUrl = '/emotional_remix_supernova_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>💥 Emotion Remix Nova</h3>
      <p>This chart spotlights sudden remix bursts across the emotional ecosystem using glowing radial supernovas.</p>
      <img src={imageUrl} alt="Emotion Remix Nova Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff1f0',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffa39e',
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
