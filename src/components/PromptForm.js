import React, { useState } from 'react';

const PromptForm = ({ setVoiceScript }) => {
  const [tone, setTone] = useState('');
  const [title, setTitle] = useState('');
  const [block1, setBlock1] = useState('');
  const [block2, setBlock2] = useState('');
  const [details, setDetails] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();

    const payload = { tone, title, block1, block2, details };

    const res = await fetch('http://localhost:3000/generate-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    setVoiceScript(data.voice_script);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Generate BarkBacks Prompt</h2>
      <form onSubmit={handleGenerate}>
        <input
          type="text"
          placeholder="Tone"
          value={tone}
          onChange={e => setTone(e.target.value)}
          style={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <textarea
          placeholder="Block 1"
          value={block1}
          onChange={e => setBlock1(e.target.value)}
          rows={3}
          style={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <textarea
          placeholder="Block 2"
          value={block2}
          onChange={e => setBlock2(e.target.value)}
          rows={3}
          style={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <textarea
          placeholder="Details"
          value={details}
          onChange={e => setDetails(e.target.value)}
          rows={3}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default PromptForm;
