// GalleryView.jsx — BarkBacks story gallery with voice preview, emotion filter, and seasonal filter

import React, { useEffect, useState } from 'react';

const GalleryView = () => {
  // 🧠 State for fetched stories
  const [stories, setStories] = useState([]);

  // 🎨 Emotion filter state
  const [filter, setFilter] = useState('');

  // 🍂 Seasonal filter state
  const [seasonFilter, setSeasonFilter] = useState('');

  // ⏳ Loading state
  const [loading, setLoading] = useState(true);

  // 🔊 Voice preview function
  const previewVoice = (story) => {
    const utterance = new SpeechSynthesisUtterance(
      `${story.petName} feels ${story.emotion}. ${story.storyText}`
    );
    utterance.lang = 'en-US';
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  // 🌐 Fetch stories from backend
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

      {/* 🎨 Emotion Filter */}
      <label>Filter by Emotion:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.select}>
        <option value="">All</option>
        <option value="Joy">Joy</option>
        <option value="Sadness">Sadness</option>
        <option value="Love">Love</option>
        <option value="Fear">Fear</option>
      </select>

      {/* 🍂 Seasonal Filter */}
      <label>Filter by Season:</label>
      <select value={seasonFilter} onChange={(e) => setSeasonFilter(e.target.value)} style={styles.select}>
        <option value="">All</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>

      {/* ⏳ Loading or empty state */}
      {loading ? (
        <p>Loading stories...</p>
      ) : stories.length === 0 ? (
        <p>No BarkBacks yet. Submit one above!</p>
      ) : (
        // 🧠 Filter and render stories
        stories
          .filter((story) => !filter || story.emotion === filter)
          .filter((story) => !seasonFilter || story.season === seasonFilter)
          .map((story) => (
            <div key={story._id} style={styles.card}>
              <h4>{story.petName} — <em>{story.emotion}</em></h4>
              <p>{story.storyText}</p>
              <small>{new Date(story.createdAt).toLocaleString()}</small><br />
              <small>Season: {story.season || 'Unknown'}</small><br />
              <button onClick={() => previewVoice(story)} style={styles.button}>
                🔊 Preview Voice
              </button>
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
  select: {
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem',
    display: 'block',
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
};

export default GalleryView;
