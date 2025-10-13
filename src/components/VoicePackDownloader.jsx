// VoicePackDownloader.jsx — Download seasonal voice packs filtered by emotion and season

import React, { useEffect, useState } from 'react';

const VoicePackDownloader = ({ creatorId }) => {
  const [stories, setStories] = useState([]);
  const [season, setSeason] = useState('Autumn');
  const [emotion, setEmotion] = useState('Joy');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/stories?creatorId=${creatorId}`);
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error('Error fetching stories:', err);
        setStories([]);
      }
    };

    fetchStories();
  }, [creatorId]);

  useEffect(() => {
    const filteredStories = stories.filter(
      s => s.season === season && s.emotion === emotion
    );
    setFiltered(filteredStories);
  }, [stories, season, emotion]);

  const downloadPack = () => {
    const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${season}_${emotion}_VoicePack.json`;
    link.click();
  };

  return (
    <div style={styles.panel}>
      <h3>📦 Voice Pack Downloader</h3>
      <div style={styles.controls}>
        <label>
          Season:
          <select value={season} onChange={e => setSeason(e.target.value)}>
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>
        </label>
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
        <button onClick={downloadPack} style={styles.button}>📥 Download Pack</button>
      </div>
      <p>{filtered.length} stories match this filter.</p>
    </div>
  );
};

const styles = {
  panel: {
    background: '#fffbe6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffe58f',
    marginTop: '2rem',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    background: '#ffd666',
    border: '1px solid #faad14',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default VoicePackDownloader;
