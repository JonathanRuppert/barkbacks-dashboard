// VoicePackPanel.jsx — Voice preview and download bundle per pet

import React, { useEffect, useState } from 'react';

const VoicePackPanel = ({ petId }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voiceMap, setVoiceMap] = useState({});

  useEffect(() => {
    if (!petId) return;

    const fetchStories = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/pet-stories/${petId}`);
        const data = await res.json();
        const voiceReady = data.filter(s => s.storyText.length <= 200);
        setStories(voiceReady);
      } catch (err) {
        console.error('Error fetching voice pack:', err);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [petId]);

  const fetchVoice = async (storyId, text) => {
    try {
      const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/speak?text=${encodeURIComponent(text)}`);
      const data = await res.json();
      setVoiceMap((prev) => ({ ...prev, [storyId]: data.audioUrl }));
    } catch (err) {
      console.error('Error fetching voice preview:', err);
    }
  };

  return (
    <div style={styles.panel}>
      <h3>🔊 Voice Pack</h3>
      {loading ? (
        <p>Loading voice-ready BarkBacks...</p>
      ) : stories.length === 0 ? (
        <p>No voice-ready BarkBacks for this pet.</p>
      ) : (
        stories.map((story) => (
          <div key={story._id} style={styles.card}>
            <p><strong>{story.emotion}</strong> — {story.storyText}</p>
            <button onClick={() => fetchVoice(story._id, story.storyText)} style={styles.button}>
              {voiceMap[story._id] ? '🔁 Replay Voice' : '▶️ Preview Voice'}
            </button>
            {voiceMap[story._id] && (
              <audio controls src={voiceMap[story._id]} style={{ marginTop: '0.5rem', width: '100%' }} />
            )}
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0f5ff',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #adc6ff',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
  button: {
    background: '#e6f7ff',
    border: '1px solid #1890ff',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default VoicePackPanel;
