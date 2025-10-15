import React, { useState } from 'react';

const AnimateForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [animation, setAnimation] = useState('');

  const handleAnimate = async () => {
    try {
      const res = await fetch('https://barkbacks-api.onrender.com/api/animate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }),
      });
      const data = await res.json();
      setAnimation(data.animationUrl);
    } catch (err) {
      console.error('Animation error:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Paste image URL"
      />
      <button onClick={handleAnimate}>Animate</button>
      {animation && <video src={animation} controls />}
    </div>
  );
};

export default AnimateForm;
