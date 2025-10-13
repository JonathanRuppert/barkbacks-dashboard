// EmotionRemixPulse.jsx — Animate emotional remix spikes in real time

import React from 'react';

const EmotionRemixPulse = () => {
  const imageUrl = '/emotion_remix_pulse_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>⚡ Emotion Remix Pulse</h3>
      <p>This animation shows emotional remix spikes in real time as new stories are remixed.</p>
      <img src={imageUrl} alt="Emotion Remix Pulse Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fffbe6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffe58f',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixPulse;
