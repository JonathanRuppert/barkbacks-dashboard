// EmotionRemixEchoDepth.jsx — Visualize remix resonance tiers and emotional amplification

import React from 'react';

const EmotionRemixEchoDepth = () => {
  const imageUrl = '/echo_depth_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎯 Emotion Remix Echo Depth</h3>
      <p>This chart visualizes remix resonance tiers and emotional amplification using concentric ripple layers and emotion-colored creator nodes.</p>
      <img src={imageUrl} alt="Emotion Remix Echo Depth Chart" style={styles.image} />
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

export default EmotionRemixEchoDepth;
