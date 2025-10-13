// EmotionRemixPulseSync.jsx — Visualize remix synchronization and emotional alignment

import React from 'react';

const EmotionRemixPulseSync = () => {
  const imageUrl = '/remix_pulse_sync_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔁 Emotion Remix Pulse Sync</h3>
      <p>This chart visualizes remix synchronization and emotional alignment using overlapping waveforms and emotion-colored pulses.</p>
      <img src={imageUrl} alt="Emotion Remix Pulse Sync Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0ffff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #87e8de',
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
