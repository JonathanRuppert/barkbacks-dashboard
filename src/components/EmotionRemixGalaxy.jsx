// EmotionRemixGalaxy.jsx — Visualize remix constellations and emotional clusters

import React from 'react';

const EmotionRemixGalaxy = () => {
  const imageUrl = '/remix_galaxy_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Galaxy</h3>
      <p>This chart visualizes remix constellations and emotional clusters across creators using expressive galaxies grouped by emotion.</p>
      <img src={imageUrl} alt="Emotion Remix Galaxy Chart" style={styles.image} />
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

export default EmotionRemixGalaxy;
