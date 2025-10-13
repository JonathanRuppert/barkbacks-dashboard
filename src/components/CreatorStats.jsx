// CreatorStats.jsx — BarkBacks creator stats panel

import React, { useEffect, useState } from 'react';

const CreatorStats = ({ creatorId }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!creatorId) {
        console.warn('No creatorId provided');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`https://barkbacks-backend-1.onrender.com/api/stats/${creatorId}`);
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error('Error fetching creator stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [creatorId]);

  if (loading) return <p>Loading creator stats...</p>;
  if (!stats) return <p>No stats available.</p>;

  return (
    <div style={styles.panel}>
      <h3>🏅 Your BarkBack Stats</h3>
      <p>Total Stories: <strong>{stats.total || 0}</strong></p>
      <p>
        Emotions Used:{' '}
        {Array.isArray(stats.emotions) && stats.emotions.length > 0
          ? stats.emotions.join(', ')
          : 'None yet'}
      </p>
      <p>
        Seasons Covered:{' '}
        {Array.isArray(stats.seasons) && stats.seasons.length > 0
          ? stats.seasons.join(', ')
          : 'None yet'}
      </p>
    </div>
  );
};

const styles = {
  panel: {
    background: '#f4f4f4',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #ccc',
  },
};

export default CreatorStats;
