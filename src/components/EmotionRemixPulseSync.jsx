// EmotionRemixPulseSync.jsx — Animate time-synced remix patterns across creators

import React from 'react';

const EmotionRemixPulseSync = () => {
  const imageUrl = '/pulse_sync_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔄 Emotion Remix Pulse Sync</h3>
      <p>This chart animates time-synced remix patterns across creators using emotion-colored pulse waves and sync level bars.</p>
      <img src={imageUrl} alt="Emotion Remix Pulse Sync Chart" style={styles.image} />
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

export default EmotionRemixPulseSync;
