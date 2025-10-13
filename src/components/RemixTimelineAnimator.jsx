// RemixTimelineAnimator.jsx — Animate remix evolution over time by emotion

import React from 'react';

const RemixTimelineAnimator = () => {
  const imageUrl = '/remix_timeline.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>⏳ Remix Timeline Animator</h3>
      <p>This animation shows how remix stories evolved over time, colored by emotion.</p>
      <img src={imageUrl} alt="Remix Timeline Animation" style={styles.image} />
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

export default RemixTimelineAnimator;
