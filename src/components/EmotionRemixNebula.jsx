// EmotionRemixNebula.jsx — Visualize emerging emotional remix clusters

import React from 'react';

const EmotionRemixNebula = () => {
  const imageUrl = '/emotional_remix_nebula_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌫️ Emotion Remix Nebula</h3>
      <p>This chart visualizes emerging emotional remix clusters before they fully form.</p>
      <img src={imageUrl} alt="Emotion Remix Nebula Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#e6f7ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #91d5ff',
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
