import React, { useEffect, useState } from 'react';

function StoryGallery() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch('https://barkbacks-backend.onrender.com/api/stories');
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error('Error fetching stories:', err);
      }
    };

    fetchStories();
  }, []);

  return (
    <div>
      <h2>Story Gallery</h2>
      {stories.length === 0 ? (
        <p>No stories yet. Submit one to get started!</p>
      ) : (
        stories.map((story, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h3>{story.prompt}</h3>
            <p><strong>By:</strong> {story.creatorName}</p>
            <img src={story.imageUrl} alt="Story visual" style={{ maxWidth: '100%' }} />
            <video controls style={{ maxWidth: '100%' }}>
              <source src={story.animationUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      )}
    </div>
  );
}

export default StoryGallery;
