import React, { useState } from 'react';

const ImageForm = ({ setImageUrl }) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setImageUrl(data.image_url);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Generate Image</h2>
      <form onSubmit={handleGenerate}>
        <input
          type="text"
          placeholder="Image Prompt"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default ImageForm;
