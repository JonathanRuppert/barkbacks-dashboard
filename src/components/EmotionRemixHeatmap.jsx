// EmotionRemixHeatmap.jsx — Visualize remix density by emotion and month

import React from 'react';

const EmotionRemixHeatmap = () => {
  const imageUrl = '/emotion_remix_heatmap.png'; // Render will serve this if placed in public folder

  return (
    <div style={styles.panel}>
      <h3>🔥 Emotion Remix Heatmap</h3>
      <p>This heatmap shows remix story density by emotion across months.</p>
      <img src={imageUrl} alt="Emotion Remix Heatmap" style={styles.image} />
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

export default EmotionRemixHeatmap;
