// EmotionRemixGraph.jsx — Remix volume by emotion across creators

import React from 'react';

const EmotionRemixGraph = () => {
  const imageUrl = '/remix_volume_by_emotion.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>📊 Emotion Remix Graph</h3>
      <p>This chart shows remix volume by emotion across creators.</p>
      <img src={imageUrl} alt="Remix Volume by Emotion" style={styles.image} />
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

export default EmotionRemixGraph;
