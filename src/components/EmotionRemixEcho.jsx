// EmotionRemixEcho.jsx — Trace emotional remix echoes across time and creators

import React from 'react';

const EmotionRemixEcho = () => {
  const imageUrl = '/remix_ripple_animation.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌀 Emotion Remix Echo</h3>
      <p>This ripple animation traces how one remix story echoed across time and creators.</p>
      <img src={imageUrl} alt="Emotion Remix Echo Ripple Chart" style={styles.image} />
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

export default EmotionRemixEcho;
