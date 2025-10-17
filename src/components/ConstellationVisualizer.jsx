import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConstellationVisualizer = ({ creatorId }) => {
  const [connections, setConnections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConstellation = async () => {
      try {
        const res = await axios.get(`http://localhost:10000/api/remix-constellation/${creatorId}`);
        setConnections(res.data.connections || []);
      } catch (err) {
        setError('Failed to load remix constellation.');
        console.error(err);
      }
    };

    fetchConstellation();
  }, [creatorId]);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛰️ Constellation: Remix Gravity</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {connections.length === 0 ? (
        <p>No remix connections found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {connections.map((conn, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <strong>{conn.target}</strong> — {conn.remixCount} remix{conn.remixCount !== 1 ? 'es' : ''}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ConstellationVisualizer;
