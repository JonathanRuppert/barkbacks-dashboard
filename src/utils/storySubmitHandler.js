// src/utils/storySubmitHandler.js

export async function submitStory({ prompt, image, animation }) {
  console.log('Submitting to backend with:', { prompt, image, animation });

  try {
    const response = await fetch('https://barkbacks-backend.onrender.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, image, animation }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Story submission failed');
    }

    return result.id;
  } catch (error) {
    console.error('Story submission error:', error.message);
    return null;
  }
}
