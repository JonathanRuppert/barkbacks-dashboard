// EmotionRemixOrbitTrail.jsx — Trace remix paths over time per creator

import React from 'react';

const EmotionRemixOrbitTrail = () => {
  const imageUrl = '/orbit_remix_trails.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🪐 Emotion Remix Orbit Trail</h3>
      <p>This chart traces remix paths over time per creator using emotion-colored orbit points and timestamp progression.</p>
      <img src={imageUrl} alt="Emotion Remix Orbit Trail Chart" style={styles.image} />
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

export default EmotionRemixOrbitTrail;
