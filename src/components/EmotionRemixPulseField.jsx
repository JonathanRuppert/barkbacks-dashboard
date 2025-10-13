// EmotionRemixPulseField.jsx — Visualize remix intensity across creators and hours

import React from 'react';

const EmotionRemixPulseField = () => {
  const imageUrl = '/remix_pulse_field_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔊 Emotion Remix Pulse Field</h3>
      <p>This chart visualizes remix intensity across creators and hours using emotion-colored pulses and expressive terrain.</p>
      <img src={imageUrl} alt="Emotion Remix Pulse Field Chart" style={styles.image} />
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

export default EmotionRemixPulseField;
