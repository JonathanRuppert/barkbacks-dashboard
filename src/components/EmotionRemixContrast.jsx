// EmotionRemixContrast.jsx — Compare emotional remix differences between two creators

import React from 'react';

const EmotionRemixContrast = () => {
  const imageUrl = '/emotional_remix_contrast_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔍 Emotion Remix Contrast</h3>
      <p>This chart compares emotional remix differences between two creators using side-by-side bars and color-coded emotion segments.</p>
      <img src={imageUrl} alt="Emotion Remix Contrast Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff0f0',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffccc7',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixContrast;
