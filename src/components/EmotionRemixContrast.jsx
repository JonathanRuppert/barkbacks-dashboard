// EmotionRemixContrast.jsx — Compare emotional remix styles between two creators

import React from 'react';

const EmotionRemixContrast = () => {
  const imageUrl = '/emotion_remix_comparison.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔍 Emotion Remix Contrast</h3>
      <p>This chart compares emotional remix styles between Alice and Iris side by side.</p>
      <img src={imageUrl} alt="Emotion Remix Contrast Chart" style={styles.image} />
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

export default EmotionRemixContrast;
