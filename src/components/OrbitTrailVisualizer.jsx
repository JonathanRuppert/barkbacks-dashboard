import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',
  Gratitude: '#90EE90',
  Love: '#FFB6C1',
  Sad: '#87CEFA',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
};

const OrbitTrailVisualizer = ({ emotion = 'Joy' }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`https://barkbacks-api.onrender.com/api/orbittrail/${emotion}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.stories)) {
          setStories(data.stories);
        } else {
          console.error('Invalid OrbitTrail data:', data);
        }
      })
      .catch(err => console.error('OrbitTrail fetch error:', err));
  }, [emotion]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🪐 OrbitTrail: {emotion}</h2>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          border: '1px solid #ccc',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#fdfdfd',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: emotionColors[emotion] || '#eee',
            padding: '0.5rem 1rem',
            borderRadius: '50%',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          {emotion}
        </div>

        {stories.map((story, i) => {
          const angle = (i / stories.length) * 2 * Math.PI;
          const radius = 100 + story.depth * 20;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              title={`${story.petName || 'Unknown'}: ${story.text}`}
              style={{
                position: 'absolute',
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: emotionColors[story.emotion] || '#eee',
                padding: '0.25rem 0.5rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                maxWidth: '120px',
                textAlign: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              {story.petName || 'Unknown'}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitTrailVisualizer;
