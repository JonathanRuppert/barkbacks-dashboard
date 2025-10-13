// EmotionRemixFrequency.jsx — Show how often each emotion appears across genres and creators

import React from 'react';

const EmotionRemixFrequency = () => {
  const imageUrl = '/emotion_frequency_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>📊 Emotion Remix Frequency</h3>
      <p>This chart shows how often each emotion appears across genres and creators using grouped stacked bars.</p>
      <img src={imageUrl} alt="Emotion Remix Frequency Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f9f0ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #d3adf7',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixFrequency;
