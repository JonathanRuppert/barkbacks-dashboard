// src/utils/animationHandler.js

export async function fetchAnimation(prompt) {
  console.log('Sending POST to backend with prompt:', prompt);

  try {
    const response = await fetch('https://barkbacks-backend.onrender.com/api/animate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const result = await response.json();

    if (!response.ok || !result.animation) {
      throw new Error(result.error || 'Animation generation failed');
    }

    return result.animation;
  } catch (error) {
    console.error('Animation fetch error:', error.message);
    return null;
  }
}
