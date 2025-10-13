// VoicePreviewPanel.jsx — Per-pet voice preview module

import React, { useEffect, useState } from 'react';

const VoicePreviewPanel = ({ creatorId, petId }) => {
  const [stories, setStories] = useState([]);
  const [emotion, setEmotion] = useState('Joy');
  const [season, setSeason] = useState('Autumn');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/stories?creatorId=${creatorId}&petId=${petId}`);
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error('Error fetching stories:', err);
        setStories([]);
      }
    };

    fetchStories();
  }, [creatorId, petId]);

  useEffect(() => {
    const filteredStories = stories.filter(
      s => s.emotion === emotion && s.season === season
    );
    setFiltered(filteredStories);
  }, [stories, emotion, season]);

  return (
    <div style={styles.panel}>
      <h3>🔊 Voice Preview: {petId}</h3>
      <div style={styles.controls}>
        <label>
          Emotion:
          <select value={emotion} onChange={e => setEmotion(e.target.value)}>
            <option>Joy</option>
            <option>Gratitude</option>
            <option>Wonder</option>
            <option>Hope</option>
            <option>Nostalgia</option>
            <option>Love</option>
          </select>
        </label>
        <label>
          Season:
          <select value={season} onChange={e => setSeason(e.target.value)}>
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>
        </label>
      </div>
      {filtered.length === 0 ? (
        <p>No voice previews found.</p>
      ) : (
        <ul style={styles.list}>
          {filtered.map((story, i) => (
            <li key={i} style={styles.item}>
              <p>{story.storyText}</p>
              <audio controls src={`https://barkbacks-voices.s3.amazonaws.com/${story._id}.mp3`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#e6fffb',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #87e8de',
    marginTop: '2rem',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  item: {
    background: '#ffffff',
    border: '1px solid #d9d9d9',
    borderRadius: '6px',
    padding: '0.75rem',
  },
};

export default VoicePreviewPanel;
