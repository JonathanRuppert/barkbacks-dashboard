// EmotionRemixRadar.jsx — Compare emotional remix balance across creators

import React from 'react';

const EmotionRemixRadar = () => {
  const imageUrl = '/emotional_remix_radar_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🕸️ Emotion Remix Radar</h3>
      <p>This chart compares emotional remix balance across creators.</p>
      <img src={imageUrl} alt="Emotion Remix Radar Chart" style={styles.image} />
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

export default EmotionRemixRadar;
