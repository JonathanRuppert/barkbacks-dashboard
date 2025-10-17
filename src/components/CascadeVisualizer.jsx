import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',
  Gratitude: '#90EE90',
  Love: '#FFB6C1',
  Sad: '#87CEFA',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
};

const CascadeVisualizer = () => {
  const [chains, setChains] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/cascade')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.chains)) {
          setChains(data.chains);
        } else {
          console.error('Invalid cascade data:', data);
        }
      })
      .catch(err => console.error('Cascade fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🌊 Cascade Remix Chains</h2>
      {chains.map((chain, index) => (
        <div
          key={index}
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            borderLeft: '4px solid #ccc',
            backgroundColor: '#fdfdfd',
          }}
        >
          {chain.texts.map((text, i) => (
            <div
              key={i}
              style={{
                marginBottom: '0.5rem',
                padding: '0.5rem',
                borderRadius: '6px',
                backgroundColor: emotionColors[chain.emotions[i]] || '#eee',
                color: '#333',
                fontWeight: 'normal',
              }}
            >
              <strong>{chain.petNames[i] || 'Unknown'}</strong> — {chain.emotions[i]}: {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CascadeVisualizer;
