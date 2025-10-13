// EmotionRemixWaveform.jsx — Visualize remix amplitude and frequency like an emotional soundscape

import React from 'react';

const EmotionRemixWaveform = () => {
  const imageUrl = '/remix_waveform_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎶 Emotion Remix Waveform</h3>
      <p>This chart visualizes remix amplitude and frequency across creators using smooth curves and color-coded emotion segments.</p>
      <img src={imageUrl} alt="Emotion Remix Waveform Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0fff0',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #b7eb8f',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixWaveform;
