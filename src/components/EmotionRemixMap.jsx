// EmotionRemixMap.jsx — Display full remix topology across all emotional modules

import React from 'react';

const EmotionRemixMap = () => {
  const imageUrl = '/emotion_remix_topology.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🧭 Emotion Remix Map</h3>
      <p>This chart unifies all emotional visualization modules into one expressive remix topology — showing every creator, emotion, and remix flow.</p>
      <img src={imageUrl} alt="Emotion Remix Topology Chart" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #d9d9d9',
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
