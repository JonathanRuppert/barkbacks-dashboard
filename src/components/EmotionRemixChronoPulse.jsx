// EmotionRemixChronoPulse.jsx — Visualize remix rhythm and emotional timing

import React from 'react';

const EmotionRemixChronoPulse = () => {
  const imageUrl = '/chrono_pulse_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>⏱️ Emotion Remix Chrono Pulse</h3>
      <p>This chart visualizes remix rhythm and emotional timing using vertical emotion-colored pulses mapped hourly across creators.</p>
      <img src={imageUrl} alt="Emotion Remix Chrono Pulse Chart" style={styles.image} />
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

export default EmotionRemixChronoPulse;
