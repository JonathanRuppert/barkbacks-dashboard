// SeasonalShowcase.jsx — BarkBacks seasonal homepage module

import React, { useEffect, useState } from 'react';

const SeasonalShowcase = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeasonal = async () => {
      try {
        const res = await fetch('https://barkbacks-api.onrender.com/api/seasonal-stories');
        const data = await res.json();
        if (!Array.isArray(data)) {
          console.warn('Unexpected seasonal response:', data);
          setStories([]);
        } else {
          setStories(data);
        }
      } catch (err) {
        console.error('Error fetching seasonal stories:', err);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSeasonal();
  }, []);

  return (
    <div style={styles.panel}>
      <h3>🍂 Featured BarkBacks This Season</h3>
      {loading ? (
        <p>Loading seasonal stories...</p>
      ) : stories.length === 0 ? (
        <p>No seasonal BarkBacks yet. Be the first to submit one!</p>
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
  panel: {
    background: '#fff8f0',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #e0cfc0',
  },
  card: {
    background: '#fefefe',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
};

export default SeasonalShowcase;
