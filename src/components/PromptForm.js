import React, { useState } from 'react';
import { fetchImage } from '../utils/imageHandler';
import { fetchAnimation } from '../utils/animationHandler';
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

      const imageUrl = await fetchImage(prompt);
      const animationUrl = await fetchAnimation(prompt);

      if (!imageUrl || !animationUrl) {
        setError('Image or animation generation failed.');
        return;
      }

      setImageUrl(imageUrl);
      setAnimationUrl(animationUrl);

      const result = await submitStory({
        prompt,
        image: imageUrl,
        animation: animationUrl,
      });

      if (!result) {
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
