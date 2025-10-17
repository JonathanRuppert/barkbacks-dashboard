import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',
  Gratitude: '#90EE90',
  Love: '#FFB6C1',
  Sad: '#87CEFA',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
};

const FusionVisualizer = () => {
  const [fusions, setFusions] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/fusion')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.fusions)) {
          setFusions(data.fusions);
        } else {
          console.error('Invalid Fusion data:', data);
        }
      })
      .catch(err => console.error('Fusion fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💥 Fusion: Multi-Emotion Stories</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {fusions.map((fusion, i) => (
          <div
            key={i}
            style={{
              background: `linear-gradient(135deg, ${
                fusion.emotion.map(e => emotionColors[e] || '#ccc').join(', ')
              })`,
              padding: '1rem',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              flex: '1 1 200px',
              maxWidth: '250px',
              color: '#333',
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem' }}>{fusion.petName || 'Unknown'}</h4>
            <p style={{ fontSize: '0.9rem' }}>{fusion.text}</p>
            <p style={{ fontSize: '0.8rem', color: '#555' }}>
              Emotions: {fusion.emotion.join(', ')}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#999' }}>Depth: {fusion.depth}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FusionVisualizer;
