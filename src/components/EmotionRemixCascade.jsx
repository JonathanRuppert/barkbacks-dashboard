// EmotionRemixCascade.jsx — Visualize remix layering and emotional descent

import React from 'react';

const EmotionRemixCascade = () => {
  const imageUrl = '/cascade_remix_layering_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎶 Emotion Remix Cascade</h3>
      <p>This chart visualizes remix layering and emotional descent using vertical bars and emotion-colored tiers.</p>
      <img src={imageUrl} alt="Emotion Remix Cascade Chart" style={styles.image} />
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

export default EmotionRemixCascade;
