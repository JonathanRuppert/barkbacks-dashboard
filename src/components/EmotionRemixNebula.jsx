// EmotionRemixNebula.jsx — Visualize remix potential and emotional emergence

import React from 'react';

const EmotionRemixNebula = () => {
  const imageUrl = '/remix_potential_nebula_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌫️ Emotion Remix Nebula</h3>
      <p>This chart visualizes remix potential and emotional emergence using nebula-style blooms and emotion-colored clouds.</p>
      <img src={imageUrl} alt="Emotion Remix Nebula Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0f8ff',
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

export default EmotionRemixNebula;
