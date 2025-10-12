// GalleryView.jsx — BarkBacks story gallery

import React, { useEffect, useState } from 'react';

const GalleryView = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch('https://barkbacks-backend-1.onrender.com/api/stories');
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error('Error fetching stories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <div style={styles.gallery}>
      <h3>🎬 BarkBacks Gallery</h3>
      {loading ? (
        <p>Loading stories...</p>
      ) : stories.length === 0 ? (
        <p>No BarkBacks yet. Submit one above!</p>
      ) : (
        stories.map((story) => (
          <div key={story._id} style={styles.card}>
            <h4>{story.petName} — <em>{story.emotion}</em></h4>
            <p>{story.storyText}</p>
            <small>{new Date(story.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  gallery: {
    marginTop: '2rem',
    padding: '1rem',
    borderTop: '1px solid #ccc',
  },
  card: {
    background: '#fefefe',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
};

export default GalleryView;
