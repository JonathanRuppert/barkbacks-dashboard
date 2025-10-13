// EmotionRemixCascade.jsx — Visualize remix chain reactions and emotional ripple effects

import React from 'react';

const EmotionRemixCascade = () => {
  const imageUrl = '/remix_chain_reactions_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌊 Emotion Remix Cascade</h3>
      <p>This chart visualizes remix chain reactions and emotional ripple effects using emotion-colored lines and cascading layout.</p>
      <img src={imageUrl} alt="Emotion Remix Cascade Chart" style={styles.image} />
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

export default EmotionRemixCascade;
