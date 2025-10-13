// EmotionRemixGalaxy.jsx — Cluster creators into emotional remix galaxies

import React from 'react';

const EmotionRemixGalaxy = () => {
  const imageUrl = '/emotional_remix_galaxy_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Galaxy</h3>
      <p>This chart clusters creators into emotional remix galaxies based on remix style and intensity.</p>
      <img src={imageUrl} alt="Emotion Remix Galaxy Chart" style={styles.image} />
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

export default EmotionRemixGalaxy;
