import React, { useEffect, useState } from 'react';

const OrbitTrail = () => {
  const [orbitStats, setOrbitStats] = useState([]);

  useEffect(() => {
    const fetchOrbitStats = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/orbit-trail');
      const data = await res.json();
      setOrbitStats(data.orbitStats || []);
    };
    fetchOrbitStats();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🪐 OrbitTrail: Emotional Remix Reach</h2>
      {orbitStats.length === 0 ? (
        <p>No orbit data available...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Origin Story</th>
              <th style={{ textAlign: 'right' }}>Total Remixes</th>
              <th style={{ textAlign: 'right' }}>Max Depth</th>
              <th style={{ textAlign: 'right' }}>Emotion Spread</th>
            </tr>
          </thead>
          <tbody>
            {orbitStats.map((o, i) => (
              <tr key={i}>
                <td>{o.originId}</td>
                <td style={{ textAlign: 'right' }}>{o.totalRemixes}</td>
                <td style={{ textAlign: 'right' }}>{o.maxDepth}</td>
                <td style={{ textAlign: 'right' }}>
                  {Object.entries(o.emotionSpread)
                    .map(([emotion, count]) => `${emotion} (${count})`)
                    .join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default OrbitTrail;
