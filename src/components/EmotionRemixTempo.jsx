// EmotionRemixTempo.jsx — Compare remix speed and rhythm across genres

import React from 'react';

const EmotionRemixTempo = () => {
  const imageUrl = '/remix_tempo_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🕒 Emotion Remix Tempo</h3>
      <p>This chart compares remix speed and rhythm across genres using a dual-axis format with color-coded bars and overlay line.</p>
      <img src={imageUrl} alt="Emotion Remix Tempo Chart" style={styles.image} />
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

export default EmotionRemixTempo;
