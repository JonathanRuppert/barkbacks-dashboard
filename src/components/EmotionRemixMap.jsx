// EmotionRemixMap.jsx — Unify all emotional visualization modules into one expressive topology

import React from 'react';

const EmotionRemixMap = () => {
  const imageUrl = '/unified_emotional_topology.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🌌 Emotion Remix Map</h3>
      <p>This chart unifies all emotional visualization modules into one expressive topology — showing how Aurora, Chrono, PulseField, Tide, Cascade, OrbitTrail, EchoDepth, and Nova interconnect across creators.</p>
      <img src={imageUrl} alt="Unified Emotional Topology Chart" style={styles.image} />
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
