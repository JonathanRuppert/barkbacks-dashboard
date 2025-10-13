// EmotionRemixOverlap.jsx — Show shared emotional remix moments between two creators

import React from 'react';

const EmotionRemixOverlap = () => {
  const imageUrl = '/emotional_overlap_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🤝 Emotion Remix Overlap</h3>
      <p>This chart shows shared emotional remix moments between two creators using a stacked bar format.</p>
      <img src={imageUrl} alt="Emotion Remix Overlap Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#e6fffb',
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

export default EmotionRemixOverlap;
