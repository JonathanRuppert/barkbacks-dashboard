import React, { useState } from 'react';
import axios from 'axios';
import './StoryForm.css';

const StoryForm = () => {
  const [emotion, setEmotion] = useState('');
  const [petName, setPetName] = useState('');
  const [storyText, setStoryText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post('/api/stories', {
        emotion,
        petName,
        storyText,
      });

      if (response.status === 200) {
        setStatus('✅ Story submitted successfully!');
        setEmotion('');
        setPetName('');
        setStoryText('');
      } else {
        setStatus('❌ Submission failed. Try again.');
      }
    } catch (error) {
      console.error(error);
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

        <label>Pet Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          placeholder="e.g., Luna"
          required
        />

        <label>Story:</label>
        <textarea
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          placeholder="Write your story here..."
          rows="5"
          required
        />

        <button type="submit">Submit Story</button>
      </form>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default StoryForm;
