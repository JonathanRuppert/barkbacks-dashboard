// VoicePreviewButton.jsx — Play BarkBack voice preview

import React, { useState } from 'react';

const VoicePreviewButton = ({ text }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchVoice = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/speak?text=${encodeURIComponent(text)}`);
      const data = await res.json();
      if (data.audioUrl) {
        setAudioUrl(data.audioUrl);
      } else {
        console.warn('No audio URL returned:', data);
      }
    } catch (err) {
      console.error('Error fetching voice preview:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <button onClick={fetchVoice} disabled={loading} style={styles.button}>
        {loading ? 'Loading voice...' : '🔊 Hear BarkBack'}
      </button>
      {audioUrl && (
        <audio controls src={audioUrl} style={{ marginTop: '0.5rem', width: '100%' }} />
      )}
    </div>
  );
};

const styles = {
  button: {
    background: '#e0f7fa',
    border: '1px solid #00acc1',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default VoicePreviewButton;
