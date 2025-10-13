// EmotionRemixWave.jsx — Visualize remix momentum as flowing emotional waves

import React from 'react';

const EmotionRemixWave = () => {
  const imageUrl = '/remix_wave_plot.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌊 Emotion Remix Wave</h3>
      <p>This chart visualizes remix momentum as flowing waves across time, colored by emotion.</p>
      <img src={imageUrl} alt="Emotion Remix Wave Chart" style={styles.image} />
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

export default EmotionRemixWave;
