// EmotionRemixGalaxy.jsx — Visualize remix constellations across modules and creators

import React from 'react';

const EmotionRemixGalaxy = () => {
  const imageUrl = '/emotion_remix_constellations.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Galaxy</h3>
      <p>This chart visualizes remix constellations across modules and creators using a radial layout with emotion-colored paths.</p>
      <img src={imageUrl} alt="Emotion Remix Galaxy Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f9f0ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #d3adf7',
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
