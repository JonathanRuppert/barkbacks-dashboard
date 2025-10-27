import React, { useContext, useEffect, useState } from 'react';
import { WebSocketContext } from '../context/WebSocketContext';
import EchoDepth from './EchoDepthVisualizer';
import PulseSync from './PulseSyncVisualizer';
import Cascade from './CascadeVisualizer';
import OrbitTrail from './OrbitTrailVisualizer';
import Nova from './NovaVisualizer';
import Fusion from './FusionVisualizer';
import ChronoPulse from './ChronoPulseVisualizer';
import Aurora from './AuroraVisualizer';
import ConstellationVisualizer from './ConstellationVisualizer';
import RemixLineage from './RemixLineage';
import PetArc from './PetArc';
import EmotionDiversity from './EmotionDiversity';
import EmotionRemixTracker from './EmotionRemixTracker';

const Dashboard = () => {
  const socket = useContext(WebSocketContext);
  const [liveEmotions, setLiveEmotions] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'new_story') {
        setLiveEmotions(prev => [data, ...prev]);
      }
    };
  }, [socket]);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: 'red', fontSize: '2.5rem', marginBottom: '2rem' }}>
        🚨 DASHBOARD IS RENDERING 🚨
      </h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2>📡 Live Emotional Pulse</h2>
        {liveEmotions.length === 0 ? (
          <p>No emotional events yet...</p>
        ) : (
          liveEmotions.map((e, i) => (
            <div key={i} style={{ marginBottom: '0.5rem' }}>
              <strong>{e.petName}</strong> felt <em>{e.emotion}</em> at{' '}
              {new Date(e.timestamp).toLocaleTimeString()} by <code>{e.creatorId}</code>
            </div>
          ))
        )}
      </section>

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
        <h2>🧬 Remix Lineage</h2>
        <RemixLineage />
      </section>

     <section style={{ marginBottom: '3rem' }}>
       <h2>🐾 Pet Emotional Arcs</h2>
       <PetArc />
      </section>

     <section style={{ marginBottom: '3rem', borderTop: '1px solid #ccc', paddingTop: '2rem' }}>
       <h2>📊 Emotional Analytics</h2>
       <EmotionDiversity />
      </section>

     <section style={{ marginBottom: '3rem' }}>
       <h2>🔁 Emotion Remix Tracker</h2>
       <EmotionRemixTracker />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🛰️ Constellation</h2>
        <ConstellationVisualizer creatorId="jonathan" />
      </section>
    </main>
  );
};

export default Dashboard;
