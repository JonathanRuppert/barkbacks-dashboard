// RemixLineagePanel.jsx — Visualize BarkBack remix ancestry

import React, { useEffect, useState } from 'react';

const RemixLineagePanel = ({ storyId }) => {
  const [lineage, setLineage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!storyId) return;

    const fetchLineage = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/remix-lineage/${storyId}`);
        const data = await res.json();
        setLineage(data.lineage || []);
      } catch (err) {
        console.error('Error fetching remix lineage:', err);
        setLineage([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLineage();
  }, [storyId]);

  return (
    <div style={styles.panel}>
      <h3>🔁 Remix Lineage</h3>
      {loading ? (
        <p>Tracing emotional ancestry...</p>
      ) : lineage.length === 0 ? (
        <p>This BarkBack is an original creation.</p>
      ) : (
        <ol style={styles.list}>
          {lineage.map((story, i) => (
            <li key={story._id} style={styles.item}>
              <strong>{story.petName}</strong> — <em>{story.emotion}</em><br />
              <span style={styles.text}>{story.storyText}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#f9f0ff',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #d0b0ff',
  },
  list: {
    paddingLeft: '1rem',
  },
  item: {
    marginBottom: '1rem',
  },
  text: {
    display: 'block',
    marginTop: '0.25rem',
    fontStyle: 'italic',
    color: '#555',
  },
};

export default RemixLineagePanel;
