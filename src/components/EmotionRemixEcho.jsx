// EmotionRemixEcho.jsx — Trace remix influence and emotional resonance between creators

import React from 'react';

const EmotionRemixEcho = () => {
  const imageUrl = '/remix_echo_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔁 Emotion Remix Echo</h3>
      <p>This chart traces remix influence and emotional resonance between creators using emotion-colored lines and circular layout.</p>
      <img src={imageUrl} alt="Emotion Remix Echo Chart" style={styles.image} />
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

export default EmotionRemixEcho;
