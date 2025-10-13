// RemixInfluenceMap.jsx — Visualize remix lineage and creator influence

import React from 'react';

const RemixInfluenceMap = () => {
  const imageUrl = '/remix_graph.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🔗 Remix Influence Map</h3>
      <p>This graph shows how remix stories spread from the original creator to others.</p>
      <img src={imageUrl} alt="Remix Influence Map" style={styles.image} />
    </div>
  );
};

const styles = {
  panel: {
    background: '#f6ffed',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #b7eb8f',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '6px',
    border: '1px solid #d9d9d9',
  },
};

export default RemixInfluenceMap;
