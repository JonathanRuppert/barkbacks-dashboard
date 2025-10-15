// BadgePanel.jsx — Display earned emotion remix badges

import React, { useEffect, useState } from 'react';

const BadgePanel = ({ creatorId }) => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!creatorId) return;

    const fetchBadges = async () => {
      try {
        const res = await fetch(`https://barkbacks-api.onrender.com/api/badges/${creatorId}`);
        const data = await res.json();
        setBadges(data.badges || []);
      } catch (err) {
        console.error('Error fetching badges:', err);
        setBadges([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, [creatorId]);

  return (
    <div style={styles.panel}>
      <h3>🏅 Remix Badges</h3>
      {loading ? (
        <p>Loading badges...</p>
      ) : badges.length === 0 ? (
        <p>No remix badges earned yet.</p>
      ) : (
        <ul style={styles.list}>
          {badges.map((badge, i) => (
            <li key={i} style={styles.badge}>{badge}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#f9f0ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #d3adf7',
    marginTop: '2rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  badge: {
    background: '#fff',
    border: '1px solid #d9d9d9',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    fontSize: '14px',
  },
};

export default BadgePanel;
