import React, { useEffect, useState } from 'react';

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
              }}
            >
              <strong>{story.emotion}</strong>: {story.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StoryGallery;
