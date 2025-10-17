import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',
  Sad: '#87CEFA',
  Love: '#FFB6C1',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
  Gratitude: '#90EE90',
};

const AuroraVisualizer = () => {
  const [distribution, setDistribution] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/aurora')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.distribution)) {
          setDistribution(data.distribution);
        } else {
          console.error('Invalid Aurora data:', data);
        }
      })
      .catch(err => console.error('Aurora fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🌈 Aurora: Emotional Atmosphere</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {distribution.map((e, i) => (
          <div
            key={i}
            style={{
              backgroundColor: emotionColors[e.emotion] || '#ccc',
              padding: '1rem',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              flex: '1 1 150px',
              textAlign: 'center',
              color: '#333',
            }}
          >
            <h4>{e.emotion}</h4>
            <p>{e.count} story{e.count !== 1 ? 'ies' : ''}</p>
            <p>{e.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuroraVisualizer;
