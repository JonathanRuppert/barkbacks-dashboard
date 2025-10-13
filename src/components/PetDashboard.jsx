// PetDashboard.jsx — Per-pet stats, badges, and remix lineage

import React, { useEffect, useState } from 'react';
import VoicePreviewButton from './VoicePreviewButton';
import RemixLineagePanel from './RemixLineagePanel';

const PetDashboard = ({ petId }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!petId) return;

    const fetchStories = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/pet-stories/${petId}`);
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error('Error fetching pet stories:', err);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [petId]);

  return (
    <div style={styles.panel}>
      <h3>🐾 Pet Dashboard</h3>
      {loading ? (
        <p>Loading stories...</p>
      ) : stories.length === 0 ? (
        <p>No BarkBacks yet for this pet.</p>
      ) : (
        stories.map((story) => (
          <div key={story._id} style={styles.card}>
            <h4>{story.emotion} — {story.season}</h4>
            <p>{story.storyText}</p>
            <VoicePreviewButton text={story.storyText} />
            <RemixLineagePanel storyId={story._id} />
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff8dc',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #deb887',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1.5rem',
  },
};

export default PetDashboard;
