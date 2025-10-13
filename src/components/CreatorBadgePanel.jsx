// CreatorBadgePanel.jsx — Display earned BarkBacks badges

import React, { useEffect, useState } from 'react';

const CreatorBadgePanel = ({ creatorId }) => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!creatorId) return;

    const fetchBadges = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/badges/${creatorId}`);
        const data = await res.json();
        if (!Array.isArray(data.badges)) {
          console.warn('Unexpected badge response:', data);
          setBadges([]);
        } else {
          setBadges(data.badges);
        }
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
      <h3>🏅 Your BarkBacks Badges</h3>
      {loading ? (
        <p>Loading badges...</p>
      ) : badges.length === 0 ? (
        <p>No badges earned yet. Keep creating!</p>
      ) : (
        <ul style={styles.list}>
          {badges.map((badge, i) => (
            <li key={i} style={styles.badge}>
              {badge}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff0f5',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #e0b0c0',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  badge: {
    background: '#ffe4e1',
    border: '1px solid #d88',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
};

export default CreatorBadgePanel;
