import React, { useEffect, useState } from 'react';
import './CreatorGallery.css';

function CreatorGallery() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-backend.onrender.com/api/stories')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error('Failed to fetch stories:', err));
  }, []);

  return (
    <div className="gallery-container">
      <h2>✨ BarkBacks Creator Gallery</h2>
      <div className="gallery-grid">
        {stories.map((story) => (
          <div key={story.id} className="gallery-card">
            <img src={story.image} alt="Story preview" className="gallery-image" />
            <video src={story.animation} controls className="gallery-video" />
            <p className="gallery-prompt">“{story.prompt}”</p>
            <div className="gallery-tags">
              {story.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <button className="like-button">❤️ Like</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorGallery;
