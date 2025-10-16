import React, { useState } from 'react';
import axios from 'axios';
import './StoryForm.css';

const StoryForm = () => {
  const [emotion, setEmotion] = useState('');
  const [creatorId, setCreatorId] = useState('');
  const [petName, setPetName] = useState('');
  const [storyText, setStoryText] = useState('');
  const [remixOf, setRemixOf] = useState('');
  const [status, setStatus] = useState('');

  const BASE_URL = 'https://barkbacks-api.onrender.com/api/stories';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const payload = {
        creatorId,
        text: storyText,
        emotion,
        petName,
      };

      if (remixOf.trim() !== '') {
        payload.remixOf = remixOf;
      }

      const response = await axios.post(BASE_URL, payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setStatus('✅ Story submitted successfully!');
        setEmotion('');
        setCreatorId('');
        setPetName('');
        setStoryText('');
        setRemixOf('');
      } else {
        setStatus('❌ Submission failed. Try again.');
      }
    } catch (error) {
      console.error('Error submitting story:', error);
      setStatus('❌ Error submitting story.');
    }
  };

  return (
    <div className="story-form-container">
      <h2>Submit Your Emotional Story</h2>
      <form onSubmit={handleSubmit}>
        <label>Emotion Tag:</label>
        <select value={emotion} onChange={(e) => setEmotion(e.target.value)} required>
          <option value="">Select Emotion</option>
          <option value="Joy">Joy</option>
          <option value="Gratitude">Gratitude</option>
          <option value="Nostalgia">Nostalgia</option>
          <option value="Sadness">Sadness</option>
          <option value="Excitement">Excitement</option>
        </select>

        <label>Creator ID:</label>
        <input
          type="text"
          value={creatorId}
          onChange={(e) => setCreatorId(e.target.value)}
          placeholder="e.g., jonathan"
          required
        />

        <label>Pet Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          placeholder="e.g., Toby"
        />

        <label>Story:</label>
        <textarea
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          placeholder="Write your story here..."
          rows="5"
          required
        />

        <label>Remix Of (optional):</label>
        <input
          type="text"
          value={remixOf}
          onChange={(e) => setRemixOf(e.target.value)}
          placeholder="Paste original story ID if remixing"
        />

        <button type="submit">Submit Story</button>
      </form>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default StoryForm;
