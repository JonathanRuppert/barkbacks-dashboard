// EmotionRemixFusion.jsx — Visualize emotional blending in remix collaborations

import React from 'react';

const EmotionRemixFusion = () => {
  const imageUrl = '/remix_fusion_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎨 Emotion Remix Fusion</h3>
      <p>This chart visualizes emotional blending in remix collaborations using overlapping emotion-colored waves and fusion levels.</p>
      <img src={imageUrl} alt="Emotion Remix Fusion Chart" style={styles.image} />
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

export default EmotionRemixFusion;
