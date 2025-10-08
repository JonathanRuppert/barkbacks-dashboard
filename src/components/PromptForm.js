import React, { useState } from 'react';

function PromptForm() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');
  const [creatorName, setCreatorName] = useState('Jonathan');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit prompt
      const promptRes = await fetch('https://barkbacks-backend.onrender.com/api/prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const promptData = await promptRes.json();
      setResponse(promptData.result);

      // Fetch image
      const imageRes = await fetch('https://barkbacks-backend.onrender.com/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const imageData = await imageRes.json();
      setImageUrl(imageData.imageUrl);

      // Fetch animation
      const animateRes = await fetch('https://barkbacks-backend.onrender.com/api/animate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: imageData.imageUrl }),
      });

      const animateData = await animateRes.json();
      setAnimationUrl(animateData.animationUrl);

      // Submit full story
      await fetch('https://barkbacks-backend.onrender.com/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          imageUrl: imageData.imageUrl,
          animationUrl: animateData.animationUrl,
          creatorName,
        }),
      });
    } catch (err) {
      console.error('Error submitting prompt:', err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your magical pet story prompt..."
        />
        <button type="submit">Submit</button>
      </form>

      {response && <p>{response}</p>}
      {imageUrl && <img src={imageUrl} alt="Generated visual" style={{ maxWidth: '100%' }} />}
      {animationUrl && (
        <video controls style={{ maxWidth: '100%' }}>
          <source src={animationUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default PromptForm;
