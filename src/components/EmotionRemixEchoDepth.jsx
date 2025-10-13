// EmotionRemixEchoDepth.jsx — Visualize remix resonance and emotional amplification

import React from 'react';

const EmotionRemixEchoDepth = () => {
  const imageUrl = '/echo_depth_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔊 Emotion Remix Echo Depth</h3>
      <p>This chart visualizes remix resonance and emotional amplification using echo-style ripples and emotion-colored depth rings.</p>
      <img src={imageUrl} alt="Emotion Remix Echo Depth Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff0f6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffadd2',
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
