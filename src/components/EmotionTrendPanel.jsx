// EmotionTrendPanel.jsx — Line chart of monthly remix trends by emotion

import React from 'react';

const EmotionTrendPanel = () => {
  const imageUrl = '/monthly_emotion_trends.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>📈 Emotion Remix Trends</h3>
      <p>This chart shows how remix story counts for each emotion evolved over the year.</p>
      <img src={imageUrl} alt="Emotion Remix Trends" style={styles.image} />
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

export default EmotionTrendPanel;
