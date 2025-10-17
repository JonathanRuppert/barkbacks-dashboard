import React, { useEffect, useState } from 'react';

const StoryGallery = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/stories')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          // Normalize and filter duplicates
          const seen = new Set();
          const unique = data.filter(story => {
            const pet = story.petName?.trim().toLowerCase() || 'unknown';
            const text = story.text?.trim() || '';
            const key = `${pet}-${text}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
          setStories(unique);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const formatName = name =>
    name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : 'Unknown';

  return (
    <div className="story-gallery" style={{ padding: '2rem' }}>
      <h2>🐾 BarkBacks Story Gallery</h2>
      {stories.map(story => (
        <div
          key={story._id}
          className="story-card"
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <h3>{formatName(story.petName)}</h3>
          <p>
            <strong>{story.emotion}</strong>: {story.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StoryGallery;
