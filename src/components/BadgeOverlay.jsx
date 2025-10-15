// BadgeOverlay.jsx — Floating badge overlay for creator dashboards or remix trees

import React, { useEffect, useState } from 'react';

const BadgeOverlay = ({ creatorId, position = 'top-right' }) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await fetch(`https://barkbacks-api.onrender.com/api/badges/${creatorId}`);
        const data = await res.json();
        setBadges(data.badges || []);
      } catch (err) {
        console.error('Error fetching badges:', err);
        setBadges([]);
      }
    };

    fetchBadges();
  }, [creatorId]);

  const posStyle = {
    'top-right': { top: '1rem', right: '1rem' },
    'top-left': { top: '1rem', left: '1rem' },
    'bottom-right': { bottom: '1rem', right: '1rem' },
    'bottom-left': { bottom: '1rem', left: '1rem' },
  }[position];

  return (
    <div style={{ ...styles.overlay, ...posStyle }}>
      {badges.map((badge, i) => (
        <div key={i} style={styles.badge}>{badge}</div>
      ))}
    </div>
  );
};

const styles = {
  overlay: {
    position: 'absolute',
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  badge: {
    fontSize: '14px',
    fontWeight: 'bold',
    background: '#f0f5ff',
    border: '1px solid #adc6ff',
    borderRadius: '4px',
    padding: '0.25rem 0.5rem',
  },
};

export default BadgeOverlay;
