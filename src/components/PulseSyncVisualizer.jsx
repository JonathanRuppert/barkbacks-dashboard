import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',
  Gratitude: '#90EE90',
  Love: '#FFB6C1',
  Sad: '#87CEFA',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
};

const PulseSyncVisualizer = () => {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/stories')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const sorted = data
            .filter(s => s.emotion)
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          setPulses(sorted);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔴 PulseSync Emotional Rhythm</h2>
      <div
        style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          padding: '1rem 0',
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
        }}
      >
        {pulses.map((pulse, index) => (
          <div
            key={index}
            title={`${pulse.petName || 'Unknown'}: ${pulse.emotion}`}
            style={{
              width: '12px',
              height: '40px',
              backgroundColor: emotionColors[pulse.emotion] || '#eee',
              borderRadius: '4px',
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: `${index * 0.1}s`,
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scaleY(1); opacity: 0.6; }
            50% { transform: scaleY(1.5); opacity: 1; }
            100% { transform: scaleY(1); opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
};

export default PulseSyncVisualizer;
