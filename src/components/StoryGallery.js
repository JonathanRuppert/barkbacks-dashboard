import React, { useEffect, useState } from 'react';

const StoryGallery = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/stories')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          setStories(data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="story-gallery" style={{ padding: '2rem' }}>
      <h2>🐾 BarkBacks Story Gallery</h2>
      {stories.map(story => (
        <div key={story._id} className="story-card" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>{story.petName}</h3>
          <p><strong>{story.emotion}</strong>: {story.text}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryGallery;
