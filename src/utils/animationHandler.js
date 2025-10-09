// animationHandler.js

export async function fetchAnimation(prompt) {
  try {
    const response = await fetch('/api/animate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // Return the animation URL if available
    return data.animation || null;
  } catch (error) {
    console.error('Animation fetch failed:', error.message);
    return null;
  }
}
