// EmotionRemixSupernova.jsx — Spotlight remix moments that explode with emotional impact

import React from 'react';

const EmotionRemixSupernova = () => {
  const imageUrl = '/emotion_remix_supernova.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌟 Emotion Remix Supernova</h3>
      <p>This chart spotlights remix moments that exploded with emotional impact.</p>
      <img src={imageUrl} alt="Emotion Remix Supernova Chart" style={styles.image} />
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

export default EmotionRemixSupernova;
