// EmotionRemixFusion.jsx — Visualize remix blends where multiple emotions converge

import React from 'react';

const EmotionRemixFusion = () => {
  const imageUrl = '/emotion_remix_fusion_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎨 Emotion Remix Fusion</h3>
      <p>This chart visualizes remix blends where multiple emotions converge using overlapping emotion circles and blend strength labels.</p>
      <img src={imageUrl} alt="Emotion Remix Fusion Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fefefe',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #d9d9d9',
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
