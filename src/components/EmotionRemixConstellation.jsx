// EmotionRemixConstellation.jsx — Connect creators by shared emotional remix themes

import React from 'react';

const EmotionRemixConstellation = () => {
  const imageUrl = '/emotional_constellation.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Constellation</h3>
      <p>This chart connects creators by shared emotional remix themes, forming constellations of influence.</p>
      <img src={imageUrl} alt="Emotion Remix Constellation Chart" style={styles.image} />
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

export default EmotionRemixConstellation;
