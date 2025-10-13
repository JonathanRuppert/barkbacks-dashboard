// RemixCosmos.jsx — Visualize the full emotional universe and remix constellation

import React from 'react';

const RemixCosmos = () => {
  const imageUrl = '/barkbacks_emotional_universe.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 BarkBacks Emotional Universe</h3>
      <p>This chart visualizes the full remix constellation — creators, emotions, and modules orbiting in expressive harmony.</p>
      <img src={imageUrl} alt="BarkBacks Emotional Universe Chart" style={styles.image} />
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

export default RemixCosmos;
