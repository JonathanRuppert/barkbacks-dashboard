// EmotionRemixCascade.jsx — Visualize emotional remix chain reactions across creators

import React from 'react';

const EmotionRemixCascade = () => {
  const imageUrl = '/emotional_remix_cascade_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎯 Emotion Remix Cascade</h3>
      <p>This chart visualizes emotional remix chain reactions across creators using layered arrows and color-coded flows.</p>
      <img src={imageUrl} alt="Emotion Remix Cascade Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f6ffed',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #b7eb8f',
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
