// RemixBadgeAnimator.jsx — Animate earned remix badges with sparkle and motion

import React, { useEffect, useState } from 'react';
import './RemixBadgeAnimator.css'; // Animation styles

const RemixBadgeAnimator = ({ creatorId }) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/badges/${creatorId}`);
        const data = await res.json();
        setBadges(data.badges || []);
      } catch (err) {
        console.error('Error fetching badges:', err);
        setBadges([]);
      }
    };

    fetchBadges();
  }, [creatorId]);

  return (
    <div className="badge-animator">
      {badges.map((badge, i) => (
        <div key={i} className="badge sparkle pulse">{badge}</div>
      ))}
    </div>
  );
};

export default RemixBadgeAnimator;
