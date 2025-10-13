// RemixCosmosLegend.jsx — Visual key to BarkBacks emotional universe

import React from 'react';

const RemixCosmosLegend = () => {
  const imageUrl = '/remix_cosmos_legend_chart.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🧭 Remix Cosmos Legend</h3>
      <p>This chart provides a visual key to decode BarkBacks’ emotional universe — emotion colors, module rings, and creator tiers.</p>
      <img src={imageUrl} alt="Remix Cosmos Legend Chart" style={styles.image} />
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

export default RemixCosmosLegend;
