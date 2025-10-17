import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',
  Gratitude: '#90EE90',
  Love: '#FFB6C1',
  Sad: '#87CEFA',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
};

const NovaVisualizer = () => {
  const [novas, setNovas] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/nova')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.novas)) {
          setNovas(data.novas);
        } else {
          console.error('Invalid Nova data:', data);
        }
      })
      .catch(err => console.error('Nova fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🌟 Nova: Breakout Stories</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {novas.map((nova, i) => (
          <div
            key={i}
            style={{
              backgroundColor: emotionColors[nova.emotion] || '#eee',
              padding: '1rem',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              flex: '1 1 200px',
              maxWidth: '250px',
              textAlign: 'center',
              transform: `scale(${1 + nova.remixCount * 0.05})`,
              transition: 'transform 0.3s ease',
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem' }}>{nova.petName}</h4>
            <p style={{ fontSize: '0.9rem', color: '#333' }}>{nova.text}</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              <strong>{nova.remixCount}</strong> remix{nova.remixCount !== 1 ? 'es' : ''}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#999' }}>{nova.emotion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovaVisualizer;
