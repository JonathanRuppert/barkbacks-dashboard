// CreatorLeaderboard.jsx — Rank creators by remix impact, emotion spread, and badge count

import React, { useEffect, useState } from 'react';

const CreatorLeaderboard = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://barkbacks-backend-1.onrender.com/api/leaderboard');
        const data = await res.json();
        setCreators(data.creators || []);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        setCreators([]);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div style={styles.panel}>
      <h3>🏆 Creator Leaderboard</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Creator</th>
            <th>Remix Impact</th>
            <th>Emotion Spread</th>
            <th>Badges</th>
          </tr>
        </thead>
        <tbody>
          {creators.map((c, i) => (
            <tr key={c.creatorId}>
              <td>{i + 1}</td>
              <td>{c.name}</td>
              <td>{c.remixImpact}</td>
              <td>{c.emotionSpread.join(', ')}</td>
              <td>{c.badges.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  panel: {
    background: '#e6f7ff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #91d5ff',
    marginTop: '2rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    background: '#bae7ff',
    padding: '0.5rem',
    textAlign: 'left',
    borderBottom: '1px solid #91d5ff',
  },
  td: {
    padding: '0.5rem',
    borderBottom: '1px solid #d9d9d9',
  },
};

export default CreatorLeaderboard;
