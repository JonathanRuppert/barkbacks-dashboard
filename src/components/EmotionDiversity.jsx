import React, { useEffect, useState } from 'react';

const EmotionDiversity = () => {
  const [diversity, setDiversity] = useState([]);

  useEffect(() => {
    const fetchDiversity = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/emotion-diversity');
      const data = await res.json();
      setDiversity(data.diversity || []);
    };
    fetchDiversity();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🌈 Emotion Diversity</h2>
      {diversity.length === 0 ? (
        <p>No emotion data yet...</p>
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
            {diversity.map((e, i) => (
              <tr key={i}>
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

export default EmotionDiversity;
