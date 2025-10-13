// EmotionRemixTide.jsx — Show remix flow across time zones and global creators

import React from 'react';

const EmotionRemixTide = () => {
  const imageUrl = '/global_remix_tide_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌊 Emotion Remix Tide</h3>
      <p>This chart shows remix flow across time zones and global creators using emotion-colored waves and timestamped paths.</p>
      <img src={imageUrl} alt="Emotion Remix Tide Chart" style={styles.image} />
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

export default EmotionRemixTide;
