// EmotionRemixPulseMap.jsx — Animate remix intensity over time

import React from 'react';

const EmotionRemixPulseMap = () => {
  const imageUrl = '/emotion_pulse_map.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>❤️‍🔥 Emotion Remix Pulse Map</h3>
      <p>This chart animates remix intensity over time using emotion-colored lines and timestamped pulses.</p>
      <img src={imageUrl} alt="Emotion Remix Pulse Map" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff1f0',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffa39e',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixPulseMap;
