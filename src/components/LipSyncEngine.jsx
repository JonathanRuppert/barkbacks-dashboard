import React, { useState } from 'react';
import PetAvatar from './PetAvatar';

const LipSyncEngine = ({ setSyncData }) => {
  const [transcript, setTranscript] = useState('');
  const [emotion, setEmotion] = useState('happy');
  const [localSyncData, setLocalSyncData] = useState([]);

  const handleGenerate = async () => {
    const res = await fetch('https://barkbacks-api.onrender.com/api/lipsync-generator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transcript, emotion })
    });
    const data = await res.json();
    const sync = data.syncData || [];
    setLocalSyncData(sync);
    setSyncData(sync); // lift to Dashboard
  };

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🎤 LipSync Engine</h2>
      <div style={{ marginBottom: '1rem' }}>
        <textarea
          rows={4}
          style={{ width: '100%' }}
          placeholder="Enter transcript..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <select value={emotion} onChange={(e) => setEmotion(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          <option value="calm">Calm</option>
        </select>
      </div>
      <button onClick={handleGenerate}>Generate Sync</button>

      {localSyncData.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>🗣️ Sync Preview</h3>
          <ul>
            {localSyncData.map((s, i) => (
              <li key={i}>
                <strong>{s.word}</strong> → {s.phoneme} ({s.start.toFixed(2)}s–{s.end.toFixed(2)}s) [{s.emotionOverlay}]
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '2rem' }}>
            <PetAvatar syncData={localSyncData} />
          </div>
        </div>
      )}
    </section>
  );
};

export default LipSyncEngine;
