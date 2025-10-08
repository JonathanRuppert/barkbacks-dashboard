import React, { useEffect, useState } from 'react';

const StoryGallery = () => {
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
      {stories.map((story, index) => (
        <div key={index}>
          <h3>{story.prompt}</h3>
          <img src={story.imageUrl} alt="Story" />
          {story.animationUrl && <video src={story.animationUrl} controls />}
          <p>By: {story.creatorName}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryGallery;
