// DebugPanel.jsx — BarkBacks frontend heartbeat monitor

import React, { useEffect, useState } from 'react';

const DebugPanel = () => {
  const [status, setStatus] = useState('Checking...');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('https://barkbacks-backend-1.onrender.com/api/test-db');
        const data = await res.json(); // ✅ Parses JSON response
        setStatus(data.message);       // "Connected to MongoDB"
      } catch (err) {
        setStatus('Fetch error: ' + err.message);
      }

      const now = new Date().toLocaleString();
      setTimestamp(now);
    };

    fetchStatus();
  }, []);

  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>🧪 BarkBacks Debug Panel</h3>
      <p><strong>Backend Status:</strong> {status}</p>
      <p><strong>Checked:</strong> {timestamp}</p>
    </div>
  );
};

const styles = {
  panel: {
    background: '#f9f9f9',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    fontFamily: 'sans-serif',
    maxWidth: '400px',
    margin: '2rem auto'
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.2rem'
  }
};

export default DebugPanel;
