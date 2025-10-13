// EmotionRemixSpectrum.jsx — Compare emotional remix balance across creators

import React from 'react';

const EmotionRemixSpectrum = () => {
  const imageUrl = '/emotional_remix_balance_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>📊 Emotion Remix Spectrum</h3>
      <p>This chart compares emotional remix balance across creators using stacked horizontal bars.</p>
      <img src={imageUrl} alt="Emotion Remix Spectrum Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f6ffed',
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
