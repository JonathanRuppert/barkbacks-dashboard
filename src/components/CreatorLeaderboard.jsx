// CreatorLeaderboard.jsx — Rank creators by emotional range, remix influence, and seasonal reach

import React, { useEffect, useState } from 'react';

const CreatorLeaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://barkbacks-backend-1.onrender.com/api/stories');
        const allStories = await res.json();

        const creatorMap = {};

        allStories.forEach((story) => {
          const id = story.creatorId;
          if (!creatorMap[id]) {
            creatorMap[id] = {
              creatorId: id,
              emotions: new Set(),
              remixInfluence: 0,
              seasonal: new Set(),
              total: 0,
            };
          }
          creatorMap[id].emotions.add(story.emotion);
          creatorMap[id].seasonal.add(story.season);
          creatorMap[id].total += 1;

          if (!story.remixOf) {
            const remixed = allStories.filter(s => s.remixOf === story._id);
            creatorMap[id].remixInfluence += remixed.length;
          }
        });

        const leaderboard = Object.values(creatorMap).map((c) => ({
          ...c,
          score: c.emotions.size + c.remixInfluence + c.seasonal.size + c.total,
        })).sort((a, b) => b.score - a.score);

        setLeaders(leaderboard.slice(0, 10));
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        setLeaders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div style={styles.panel}>
      <h3>🏆 Creator Leaderboard</h3>
      {loading ? (
        <p>Loading leaderboard...</p>
      ) : (
        <ol>
          {leaders.map((c, i) => (
            <li key={c.creatorId} style={styles.item}>
              <strong>#{i + 1}</strong> — {c.creatorId}<br />
              🎨 {c.emotions.size} emotions | 🔁 {c.remixInfluence} remixes | 🍂 {c.seasonal.size} seasons | 📝 {c.total} BarkBacks
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#fffbe6',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #ffe58f',
  },
  item: {
    marginBottom: '1rem',
  },
};

export default CreatorLeaderboard;
