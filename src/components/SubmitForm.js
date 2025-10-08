import React, { useState } from 'react';

const SubmitForm = ({ imageUrl, videoUrl }) => {
  const [metadata, setMetadata] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      image_url: imageUrl,
      video_url: videoUrl,
      metadata
    };

    const res = await fetch('http://localhost:3000/submit-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Submit Story</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={imageUrl}
          readOnly
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          value={videoUrl}
          readOnly
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <textarea
          placeholder='Metadata (e.g. {"title":"Golden Hero","tags":"cape, flying","creator_id":"jonathan"})'
          value={metadata}
          onChange={e => setMetadata(e.target.value)}
          rows={6}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Submission Result</h3>
          <p><strong>Status:</strong> {response.status}</p>
          <p><strong>Story ID:</strong> {response.story_id}</p>
        </div>
      )}
    </div>
  );
};

export default SubmitForm;
