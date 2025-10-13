// EmotionRemixMap.jsx — Visualize the full emotional universe and remix constellation

import React from 'react';

const EmotionRemixMap = () => {
  const imageUrl = '/emotion_remix_map_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🗺️ Emotion Remix Map</h3>
      <p>This chart visualizes the full emotional universe and remix constellation across creators and modules.</p>
      <img src={imageUrl} alt="Emotion Remix Map Chart" style={styles.image} />
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

export default EmotionRemixMap;
