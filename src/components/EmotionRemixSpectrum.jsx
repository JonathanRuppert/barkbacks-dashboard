// EmotionRemixSpectrum.jsx — Visualize emotional range across all creators

import React from 'react';

const EmotionRemixSpectrum = () => {
  const imageUrl = '/emotional_range_spectrum_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌈 Emotion Remix Spectrum</h3>
      <p>This chart visualizes emotional range across all creators using horizontal bars color-coded by emotion.</p>
      <img src={imageUrl} alt="Emotion Remix Spectrum Chart" style={styles.image} />
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

export default EmotionRemixSpectrum;
