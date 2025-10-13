// EmotionRemixChronoPulse.jsx — Visualize rhythmic fusion beats and emotional surges over time

import React from 'react';

const EmotionRemixChronoPulse = () => {
  const imageUrl = '/chrono_pulse_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🎵 Emotion Remix Chrono Pulse</h3>
      <p>This chart visualizes rhythmic fusion beats and emotional surges over time using vertical emotion-colored pulses.</p>
      <img src={imageUrl} alt="Emotion Remix Chrono Pulse Chart" style={styles.image} />
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

export default EmotionRemixChronoPulse;
