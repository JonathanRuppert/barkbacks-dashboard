import React, { useEffect, useState } from 'react';

const GalleryView = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/stories')
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
        // Optional fallback
        setStories([
          { id: 1, title: 'Mock Story: Echo of Joy', emotion: 'Joy' },
          { id: 2, title: 'Mock Story: Tide of Hope', emotion: 'Hope' },
        ]);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
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
