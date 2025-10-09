// src/utils/storySubmitHandler.js

import { fetchImage } from './imageHandler';
import { fetchAnimation } from './animationHandler';

export async function submitStory(prompt) {
  try {
    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      throw new Error('Prompt is missing or invalid');
    }

    console.log('Submitting to /api/animate:', { prompt });

    const imageUrl = await fetchImage(prompt);
    if (!imageUrl) throw new Error('Image generation failed');

    const animationUrl = await fetchAnimation(prompt);
    if (!animationUrl) throw new Error('Animation generation failed');

    console.log('Submitting to /api/submit:', {
      prompt,
      image: imageUrl,
      animation: animationUrl,
    });

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        image: imageUrl,
        animation: animationUrl,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Submission failed');
    }

    console.log('Story submitted successfully:', result.message);
    return { imageUrl, animationUrl };
  } catch (error) {
    console.error('Story submission error:', error.message);
    return null;
  }
}
