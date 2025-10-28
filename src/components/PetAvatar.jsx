import React from 'react';

const PetAvatar = ({ syncData }) => {
  if (!syncData || syncData.length === 0) return null;

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🐾 Pet Avatar</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {syncData.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: s.emotionOverlay === 'happy'
                ? '#ffe066'
                : s.emotionOverlay === 'sad'
                ? '#a0c4ff'
                : s.emotionOverlay === 'excited'
                ? '#ffadad'
                : '#d3f8e2',
              minWidth: '120px'
            }}
          >
            <strong>{s.word}</strong>
            <p style={{ margin: '0.5rem 0' }}>{s.phoneme}</p>
            <small>{s.start.toFixed(2)}s – {s.end.toFixed(2)}s</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetAvatar;
