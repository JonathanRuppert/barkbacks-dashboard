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
    <div className="story-gallery">
      {stories.map(story => (
        <div key={story._id} className="story-card">
          <h3>{story.petName}</h3>
          <p>{story.storyText}</p>
          <span>{story.emotion}</span>
        </div>
      ))}
    </div>
  );
};

export default StoryGallery;
