import React, { useState } from 'react';

const ImageForm = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');

  const handleGenerate = async () => {
    try {
      const res = await fetch('https://barkbacks-backend.onrender.com/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setImage(data.imageUrl);
    } catch (err) {
      console.error('Image generation error:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter image prompt"
      />
      <button onClick={handleGenerate}>Generate Image</button>
      {image && <img src={image} alt="Generated" />}
    </div>
  );
};

export default ImageForm;
