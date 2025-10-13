import React, { useEffect, useState } from 'react';

const BadgeDisplay = ({ creatorId }) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    if (!creatorId) return;

    fetch(`https://barkbacks-api.onrender.com/api/badges/${creatorId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.badges)) {
          setBadges(data.badges);
        } else {
          console.error('Invalid badge format:', data);
        }
      })
      .catch(err => console.error('Badge fetch error:', err));
  }, [creatorId]);

  return (
    <div className="badge-display">
      <h2>Emotion Remix Badges</h2>
      {badges.length === 0 ? (
        <p>No badges earned yet.</p>
      ) : (
        <ul>
          {badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BadgeDisplay;
