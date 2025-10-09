import React, { useState } from 'react';
import { submitStory } from '../utils/storySubmitHandler';

function PromptForm({ setImageUrl, setAnimationUrl }) {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      setError('Please enter a valid prompt.');
      return;
    }

    try {
      console.log('Submitting prompt:', prompt);
      const result = await submitStory(prompt);

      if (result) {
        setImageUrl(result.imageUrl);
        setAnimationUrl(result.animationUrl);
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during submission:', err.message);
      setError('Something went wrong. Please check the console.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your magical pet prompt..."
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default PromptForm;
