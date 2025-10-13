// EmotionRemixChrono.jsx — Animate remix evolution hour by hour across creators

import React from 'react';

const EmotionRemixChrono = () => {
  const imageUrl = '/remix_chrono_timeline.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🕒 Emotion Remix Chrono</h3>
      <p>This chart animates remix evolution hour by hour across creators using emotion-colored dots and remix count labels.</p>
      <img src={imageUrl} alt="Emotion Remix Chrono Timeline Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#e6f7ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #91d5ff',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default EmotionRemixChrono;
