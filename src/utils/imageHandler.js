// src/utils/imageHandler.js


export async function fetchImage(prompt) {
  console.log('Sending POST to backend with prompt:', prompt);

  try {
    const response = await fetch('https://barkbacks-api.onrender.com/api/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const result = await response.json();

    if (!response.ok || !result.image) {
      throw new Error(result.error || 'Image generation failed');
    }

    return result.image;
  } catch (error) {
    console.error('Image fetch error:', error.message);
    return null;
  }
}
