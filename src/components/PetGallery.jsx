// PetGallery.jsx — View BarkBacks for a specific pet

import React, { useEffect, useState } from 'react';

const PetGallery = ({ petId, petName }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!petId) return;

    const fetchPetStories = async () => {
      try {
        const res = await fetch(`https://barkbacks-api.onrender.com/api/pet-stories/${petId}`);
        const data = await res.json();
        if (!Array.isArray(data)) {
          console.warn('Unexpected pet story response:', data);
          setStories([]);
        } else {
          setStories(data);
        }
      } catch (err) {
        console.error('Error fetching pet stories:', err);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPetStories();
  }, [petId]);

  return (
    <div style={styles.panel}>
      <h3>🐾 BarkBacks for {petName}</h3>
      {loading ? (
        <p>Loading stories...</p>
      ) : stories.length === 0 ? (
        <p>No BarkBacks yet for {petName}. Start their story today!</p>
      ) : (
        stories.map((story) => (
          <div key={story._id} style={styles.card}>
            <h4><em>{story.emotion}</em></h4>
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
    background: '#f9f9ff',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #d0d0e0',
  },
  card: {
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
};

export default PetGallery;
