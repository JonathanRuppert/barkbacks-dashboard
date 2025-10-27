import React, { useEffect, useState } from 'react';

const EmotionRemixTracker = () => {
  const [remixStats, setRemixStats] = useState([]);

  useEffect(() => {
    const fetchRemixStats = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/emotion-remix-tracker');
      const data = await res.json();
      setRemixStats(data.remixStats || []);
    };
    fetchRemixStats();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🔁 Emotion Remix Tracker</h2>
      {remixStats.length === 0 ? (
        <p>No remix data yet...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Emotion</th>
              <th style={{ textAlign: 'right' }}>Remix Count</th>
              <th style={{ textAlign: 'right' }}>Remix %</th>
            </tr>
          </thead>
          <tbody>
            {remixStats.map((e, i) => (
              <tr key={i}>
                <td>{e.emotion}</td>
                <td style={{ textAlign: 'right' }}>{e.remixCount}</td>
                <td style={{ textAlign: 'right' }}>{e.remixPercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default EmotionRemixTracker;
