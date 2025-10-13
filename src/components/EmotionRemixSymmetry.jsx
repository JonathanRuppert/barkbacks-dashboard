// EmotionRemixSymmetry.jsx — Highlight perfectly balanced emotional remix patterns between two creators

import React from 'react';

const EmotionRemixSymmetry = () => {
  const imageUrl = '/symmetry_emotion_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🧿 Emotion Remix Symmetry</h3>
      <p>This chart highlights perfectly balanced emotional remix patterns between two creators using mirrored horizontal bars.</p>
      <img src={imageUrl} alt="Emotion Remix Symmetry Chart" style={styles.image} />
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

export default EmotionRemixSymmetry;
