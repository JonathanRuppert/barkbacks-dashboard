// StoryForm.jsx — BarkBack submission form

import React, { useState } from 'react';

const StoryForm = () => {
  const [petName, setPetName] = useState('');
  const [emotion, setEmotion] = useState('');
  const [storyText, setStoryText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('https://barkbacks-backend-1.onrender.com/api/create-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ petName, emotion, storyText }),
      });

      const data = await res.json();
      setStatus(data.message || 'Story submitted!');
      setPetName('');
      setEmotion('');
      setStoryText('');
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>📖 Submit a BarkBack</h3>

      <label>Pet Name:</label>
      <input value={petName} onChange={(e) => setPetName(e.target.value)} required />

      <label>Emotion Tag:</label>
      <input value={emotion} onChange={(e) => setEmotion(e.target.value)} required />

      <label>Story Text:</label>
      <textarea value={storyText} onChange={(e) => setStoryText(e.target.value)} required />

      <button type="submit">Submit Story</button>
      <p>{status}</p>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#fefefe',
  },
};

export default StoryForm;
