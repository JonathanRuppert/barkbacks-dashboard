// EmotionRemixPulse.jsx — Animate remix intensity over time like a heartbeat

import React from 'react';

const EmotionRemixPulse = () => {
  const imageUrl = '/remix_pulse_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎵 Emotion Remix Pulse</h3>
      <p>This chart animates remix intensity over time like a heartbeat, showing emotional tempo and expressive rhythm.</p>
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
