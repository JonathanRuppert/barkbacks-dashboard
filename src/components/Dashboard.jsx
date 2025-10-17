import React from 'react';
import EchoDepthVisualizer from './EchoDepthVisualizer';
import PulseSyncVisualizer from './PulseSyncVisualizer';

const Dashboard = () => {
  const creatorId = 'jonathan'; // You can make this dynamic later

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐾 BarkBacks Dashboard</h1>
      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Explore your emotional remix chains and storytelling rhythms.
      </p>

      <EchoDepthVisualizer creatorId={creatorId} />
      <PulseSyncVisualizer />
    </main>
  );
};

export default Dashboard;
