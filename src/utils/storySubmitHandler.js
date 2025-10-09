// storySubmitHandler.js

import { fetchImage } from './imageHandler';       // Your existing image fetch logic
import { fetchAnimation } from './animationHandler'; // Already wired up

export async function submitStory(prompt) {
  try {
    if (!prompt || typeof prompt !== 'string') {
      throw new Error('Invalid prompt');
    }

    // Step 1: Fetch image
    const imageUrl = await fetchImage(prompt);
    if (!imageUrl) throw new Error('Image generation failed');

    // Step 2: Fetch animation
    const animationUrl = await fetchAnimation(prompt);
    if (!animationUrl) throw new Error('Animation generation failed');

    // Step 3: Submit full story payload
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
