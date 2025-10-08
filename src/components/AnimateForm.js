import React, { useState } from 'react';

const AnimateForm = ({ imageUrl, voiceScript, setVideoUrl }) => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { image_url: imageUrl, voice_script: voiceScript };
    const res = await fetch('http://localhost:3000/animate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    setResponse(data);
    setVideoUrl(data.output_video_url); // ← Add this
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Animate Story</h2>
      <form onSubmit={handleSubmit}>
        <input value={imageUrl} readOnly />
        <textarea value={voiceScript} readOnly rows={4} />
        <button type="submit">Animate</button>
      </form>
      {response && (
        <div>
          <h3>Animation Result</h3>
          <video src={response.output_video_url} controls style={{ maxWidth: '100%', marginTop: '1rem' }} />
        </div>
      )}
    </div>
  );
};

export default AnimateForm;
