// RemixCosmos.jsx — Celebrate the full emotional constellation across all remix modules

import React from 'react';

const RemixCosmos = () => {
  const imageUrl = '/emotional_constellation_overview.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Remix Cosmos</h3>
      <p>This chart celebrates the full emotional constellation across all remix modules — Aurora, Chrono, PulseField, Tide, Cascade, OrbitTrail, EchoDepth, Nova, and PulseSync — layered across creators in one expressive sweep.</p>
      <img src={imageUrl} alt="Emotional Constellation Overview Chart" style={styles.image} />
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
