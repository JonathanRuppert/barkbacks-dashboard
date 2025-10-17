import React from 'react';
import EchoDepthVisualizer from './EchoDepthVisualizer';
import PulseSyncVisualizer from './PulseSyncVisualizer';
import CascadeVisualizer from './CascadeVisualizer';
import OrbitTrailVisualizer from './OrbitTrailVisualizer';
import NovaVisualizer from './NovaVisualizer';
import FusionVisualizer from './FusionVisualizer';
import ChronoPulseVisualizer from './ChronoPulseVisualizer';
import AuroraVisualizer from './AuroraVisualizer';


const Dashboard = () => {
  const creatorId = 'jonathan';

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: 'red', fontSize: '2.5rem', marginBottom: '2rem' }}>
        🚨 DASHBOARD IS RENDERING 🚨
      </h1>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>🔬 EchoDepth</h2>
        <EchoDepthVisualizer creatorId={creatorId} />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>🔄 PulseSync</h2>
        <PulseSyncVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>🌊 Cascade</h2>
        <CascadeVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>🪐 OrbitTrail (Joy)</h2>
        <OrbitTrailVisualizer emotion="Joy" />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>🌟 Nova</h2>
        <NovaVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>💥 Fusion</h2>
        <FusionVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2>📈 ChronoPulse</h2>
        <ChronoPulseVisualizer />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🌈 Aurora</h2>
        <AuroraVisualizer />
      </section>
    </main>
  );
};

export default Dashboard;
