// EmotionRemixPulseMap.jsx — Animate remix activity across the creator network

import React from 'react';

const EmotionRemixPulseMap = () => {
  const imageUrl = '/emotion_remix_pulse_map.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🫀 Emotion Remix Pulse Map</h3>
      <p>This chart animates remix activity across the creator network, showing emotional spikes and remix flow in real time.</p>
      <img src={imageUrl} alt="Emotion Remix Pulse Map" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff7e6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffd591',
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
