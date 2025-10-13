import React, { useEffect, useState } from 'react';
import EmotionRemixAurora from './components/modules/emotion/EmotionRemixAurora';

const GalleryView = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://barkbacks-backend-1.onrender.com/api/stories')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setStories(data);
      })
      .catch(err => {
        console.error('Error fetching stories:', err);
        setError('Failed to load stories. Showing mock data.');
        setStories([
          { id: 1, title: 'Mock Story: Echo of Joy', emotion: 'Joy' },
          { id: 2, title: 'Mock Story: Tide of Hope', emotion: 'Hope' },
        ]);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🌟 BarkBacks Dashboard</h1>

      {/* EmotionRemixAurora Module */}
      <div style={{ marginBottom: '3rem' }}>
        <EmotionRemixAurora />
      </div>

      {/* Story Gallery */}
      <h2 style={{ textAlign: 'center' }}>📚 BarkBacks Story Gallery</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {stories.map(story => (
          <div
            key={story.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{story.title}</h3>
            <p><strong>Emotion:</strong> {story.emotion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
