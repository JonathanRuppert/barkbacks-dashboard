import React, { useEffect, useState } from 'react';

const Aurora = () => {
  const [diversityStats, setDiversityStats] = useState([]);

  useEffect(() => {
    const fetchDiversityStats = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/emotion-diversity');
      const data = await res.json();
      setDiversityStats(data.diversityStats || []);
    };
    fetchDiversityStats();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🌈 Aurora: Emotion Diversity Heatmap</h2>
      {diversityStats.length === 0 ? (
        <p>No diversity data available...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Emotion</th>
              <th style={{ textAlign: 'right' }}>Count</th>
              <th style={{ textAlign: 'right' }}>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {diversityStats.map((e, i) => (
              <tr key={i} style={{ backgroundColor: `rgba(0, 150, 255, ${e.percentage / 100})` }}>
                <td>{e.emotion}</td>
                <td style={{ textAlign: 'right' }}>{e.count}</td>
                <td style={{ textAlign: 'right' }}>{e.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Aurora;
