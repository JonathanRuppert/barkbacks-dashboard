// EmotionRemixCascade.jsx — Visualize remix layering and emotional depth

import React from 'react';

const EmotionRemixCascade = () => {
  const imageUrl = '/remix_cascade_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🪜 Emotion Remix Cascade</h3>
      <p>This chart visualizes remix layering and emotional depth using stacked horizontal bars and emotion-colored layers.</p>
      <img src={imageUrl} alt="Emotion Remix Cascade Chart" style={styles.image} />
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

export default EmotionRemixCascade;
