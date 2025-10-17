import React, { useEffect, useState } from 'react';

const emotionColors = {
  Joy: '#FFD700',        // Gold
  Gratitude: '#90EE90',  // Light green
  Love: '#FFB6C1',       // Light pink
  Sad: '#87CEFA',        // Light blue
  Anger: '#FF6347',      // Tomato
  Fear: '#D3D3D3',       // Light gray
};

const StoryGallery = () => {
  const [groupedStories, setGroupedStories] = useState({});

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/stories')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const seen = new Set();
          const grouped = {};

          data.forEach(story => {
            const pet = story.petName?.trim().toLowerCase() || 'unknown';
            const text = story.text?.trim() || '';
            const key = `${pet}-${text}`;
            if (seen.has(key)) return;
            seen.add(key);

            const displayName = pet.charAt(0).toUpperCase() + pet.slice(1);
            if (!grouped[displayName]) grouped[displayName] = [];
            grouped[displayName].push({
              emotion: story.emotion,
              text: story.text,
            });
          });

          setGroupedStories(grouped);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="story-gallery" style={{ padding: '2rem' }}>
      <h2>🐾 BarkBacks Story Gallery</h2>
      {Object.entries(groupedStories).map(([petName, stories]) => (
        <div key={petName} style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{petName}</h3>
          {stories.map((story, i) => (
            <div
              key={i}
              style={{
                marginBottom: '0.75rem',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                backgroundColor: '#fff',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor: emotionColors[story.emotion] || '#eee',
                  color: '#333',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
              >
                {story.emotion}
              </span>
              <p>{story.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StoryGallery;
