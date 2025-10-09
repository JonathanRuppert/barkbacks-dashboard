import React, { useEffect, useState } from 'react';

function CreatorGallery({ setPrompt }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://barkbacks-backend.onrender.com/api/stories')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error('Failed to fetch stories:', err));
  }, []);

  const handleRemix = (originalPrompt, originalId) => {
    const remixTwist = ` — remixed from ${originalId}`;
    setPrompt(originalPrompt + remixTwist);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <h2>✨ BarkBacks Creator Gallery</h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {stories.map((story) => (
          <div key={story.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#f9f9f9' }}>
            <img src={story.image} alt="Story preview" style={{ width: '100%', borderRadius: '6px' }} />
            <video src={story.animation} controls style={{ width: '100%', borderRadius: '6px', marginTop: '1rem' }} />
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>“{story.prompt}”</p>
            {story.remixedFrom && (
              <p style={{ fontSize: '0.8rem', color: '#555' }}>
                Remixed from <strong>{story.remixedFrom}</strong>
              </p>
            )}
            <div style={{ marginTop: '0.5rem' }}>
              {story.tags.map((tag) => (
                <span key={tag} style={{ background: '#e0e0e0', padding: '0.3rem 0.6rem', marginRight: '0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => handleRemix(story.prompt, story.id)}
              style={{ marginTop: '1rem', background: '#ddeeff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              🔄 Remix
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorGallery;
