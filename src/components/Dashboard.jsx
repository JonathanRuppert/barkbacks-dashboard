import React from 'react';
import EchoDepth from './EchoDepthVisualizer';
import PulseSync from './PulseSync';
import Cascade from './Cascade';
import OrbitTrail from './OrbitTrail';
import Nova from './Nova';
import Fusion from './Fusion';
import ChronoPulse from './ChronoPulse';
import Aurora from './Aurora';
import ConstellationVisualizer from './ConstellationVisualizer';

const Dashboard = () => {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: 'red', fontSize: '2.5rem', marginBottom: '2rem' }}>
        🚨 DASHBOARD IS RENDERING 🚨
      </h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🔬 EchoDepth</h2>
        <EchoDepth creatorId="jonathan" debug />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🔄 PulseSync</h2>
        <PulseSync creatorId="jonathan" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🌊 Cascade</h2>
        <Cascade creatorId="jonathan" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🪐 OrbitTrail (Joy)</h2>
        <OrbitTrail creatorId="jonathan" emotion="Joy" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🌟 Nova</h2>
        <Nova creatorId="jonathan" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>💥 Fusion</h2>
        <Fusion creatorId="jonathan" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>📈 ChronoPulse</h2>
        <ChronoPulse creatorId="jonathan" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🌈 Aurora</h2>
        <Aurora creatorId="jonathan" />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🛰️ Constellation</h2>
        <ConstellationVisualizer creatorId="jonathan" />
      </section>
    </main>
  );
};

export default Dashboard;
