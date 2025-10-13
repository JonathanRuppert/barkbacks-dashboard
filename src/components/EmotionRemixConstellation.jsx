// EmotionRemixConstellation.jsx — Map long-term emotional remix influence across the creator ecosystem

import React from 'react';

const EmotionRemixConstellation = () => {
  const imageUrl = '/emotional_remix_constellation.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Constellation</h3>
      <p>This chart maps long-term emotional remix influence across the creator ecosystem using stars, arcs, and golden rings.</p>
      <img src={imageUrl} alt="Emotion Remix Constellation Chart" style={styles.image} />
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

export default EmotionRemixConstellation;
