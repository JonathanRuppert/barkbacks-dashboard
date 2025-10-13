// EmotionRemixDivergence.jsx — Visualize emotional remix gaps between two creators

import React from 'react';

const EmotionRemixDivergence = () => {
  const imageUrl = '/emotional_remix_divergence_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔍 Emotion Remix Divergence</h3>
      <p>This chart visualizes emotional remix gaps between two creators using mirrored horizontal bars and color-coded emotion segments.</p>
      <img src={imageUrl} alt="Emotion Remix Divergence Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff7e6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffd591',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixDivergence;
