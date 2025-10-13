// EmotionRemixTide.jsx — Visualize emotional remix volume as flowing tides

import React from 'react';

const EmotionRemixTide = () => {
  const imageUrl = '/emotional_remix_tide_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌊 Emotion Remix Tide</h3>
      <p>This chart visualizes emotional remix volume as flowing waves across the day.</p>
      <img src={imageUrl} alt="Emotion Remix Tide Chart" style={styles.image} />
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

export default EmotionRemixTide;
