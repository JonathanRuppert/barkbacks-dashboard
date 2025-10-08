import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CreatorGallery = () => {
  const { id } = useParams();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch(`http://localhost:3000/creator/${id}`);
      const data = await res.json();
      setStories(data.stories || []);
    };

    fetchStories();
  }, [id]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Stories by {id}</h2>
      {stories.length === 0 ? (
        <p>No stories found for this creator.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {stories.map((story, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <h3>{story.title || 'Untitled Story'}</h3>
              <img
                src={story.image_url}
                alt={story.title}
                style={{ width: '100%', borderRadius: '4px' }}
              />
              <video
                src={story.video_url}
                controls
                style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }}
              />
              <p style={{ marginTop: '0.5rem' }}><strong>Tags:</strong> {story.tags}</p>
              <p><strong>Creator:</strong> {story.creator_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreatorGallery;
