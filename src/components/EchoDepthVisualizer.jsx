import React, { useEffect, useState } from 'react';

const EchoDepthVisualizer = () => {
  const [depthStats, setDepthStats] = useState([]);

  useEffect(() => {
    const fetchDepthStats = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/emotion-depth-analyzer');
      const data = await res.json();
      setDepthStats(data.depthStats || []);
    };
    fetchDepthStats();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🧠 EchoDepth Visualizer</h2>
      {depthStats.length === 0 ? (
        <p>No depth data available...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Emotion</th>
              <th style={{ textAlign: 'right' }}>Total</th>
              <th style={{ textAlign: 'right' }}>Avg Depth</th>
              <th style={{ textAlign: 'right' }}>Max Depth</th>
            </tr>
          </thead>
          <tbody>
            {depthStats.map((e, i) => (
              <tr key={i}>
                <td>{e.emotion}</td>
                <td style={{ textAlign: 'right' }}>{e.total}</td>
                <td style={{ textAlign: 'right' }}>{e.avgDepth}</td>
                <td style={{ textAlign: 'right' }}>{e.maxDepth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default EchoDepthVisualizer;
