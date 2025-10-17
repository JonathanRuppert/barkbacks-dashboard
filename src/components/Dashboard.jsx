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
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐾 BarkBacks Dashboard</h1>
      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Explore your emotional remix chains and storytelling rhythms.
      </p>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>🔬 EchoDepth</h2>
        <EchoDepthVisualizer creatorId={creatorId} />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>🔄 PulseSync</h2>
        <PulseSyncVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>🌊 Cascade</h2>
        <CascadeVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>🪐 OrbitTrail (Joy)</h2>
        <OrbitTrailVisualizer emotion="Joy" />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>🌟 Nova</h2>
        <NovaVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>💥 Fusion</h2>
        <FusionVisualizer />
      </section>

      <section style={{ marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>📈 ChronoPulse</h2>
        <ChronoPulseVisualizer />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#333' }}>🌈 Aurora</h2>
        <AuroraVisualizer />
      </section>
    </main>
  );
};

export default Dashboard;
