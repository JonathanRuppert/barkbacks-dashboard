import React from 'react';
import EchoDepthVisualizer from './EchoDepthVisualizer';
import Aurora from './Aurora';
import OrbitTrail from './OrbitTrail';

const Fusion = () => {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h2>🔮 Fusion: Emotional Cosmos</h2>
      <p>Explore recursion, diversity, and remix reach in one unified view.</p>

      <div style={{ marginBottom: '3rem' }}>
        <EchoDepthVisualizer />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <Aurora />
      </div>

      <div>
        <OrbitTrail />
      </div>
    </section>
  );
};

export default Fusion;
