import React, { useState } from 'react';

const SubmitForm = () => {
  const [storyData, setStoryData] = useState({
    prompt: '',
    imageUrl: '',
    animationUrl: '',
    creatorName: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://barkbacks-api.onrender.com/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(storyData),
      });
      const data = await res.json();
      alert('Submission successful!');
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Prompt"
        value={storyData.prompt}
        onChange={(e) => setStoryData({ ...storyData, prompt: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={storyData.imageUrl}
        onChange={(e) => setStoryData({ ...storyData, imageUrl: e.target.value })}
      />
      <input
        type="text"
        placeholder="Animation URL"
        value={storyData.animationUrl}
        onChange={(e) => setStoryData({ ...storyData, animationUrl: e.target.value })}
      />
      <input
        type="text"
        placeholder="Creator Name"
        value={storyData.creatorName}
        onChange={(e) => setStoryData({ ...storyData, creatorName: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit Story</button>
    </div>
  );
};

export default SubmitForm;
