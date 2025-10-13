// RemixChronoMilestone.jsx — Visual timeline of BarkBacks emotional module deployments

import React from 'react';

const RemixChronoMilestone = () => {
  const imageUrl = '/barkbacks_deployment_timeline.png'; // Place this image in your public/ folder

  return (
    <div style={styles.panel}>
      <h3>🚀 BarkBacks Deployment Timeline</h3>
      <p>This chart visualizes the emotional milestones of BarkBacks’ module deployments — each breakthrough mapped in time.</p>
      <img src={imageUrl} alt="BarkBacks Deployment Timeline Chart" style={styles.image} />
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

export default RemixChronoMilestone;
