// CreatorSpotlight.jsx — Weekly featured creator module

import React, { useEffect, useState } from 'react';

const CreatorSpotlight = () => {
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotlight = async () => {
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
              stories: [],
            };
          }
          creatorMap[id].emotions.add(story.emotion);
          creatorMap[id].seasonal.add(story.season);
          if (!story.remixOf) {
            const remixed = allStories.filter(s => s.remixOf === story._id);
            creatorMap[id].remixInfluence += remixed.length;
          }
          creatorMap[id].stories.push(story);
        });

        const sorted = Object.values(creatorMap).sort((a, b) => {
          const scoreA = a.emotions.size + a.remixInfluence + a.seasonal.size;
          const scoreB = b.emotions.size + b.remixInfluence + b.seasonal.size;
          return scoreB - scoreA;
        });

        setCreator(sorted[0]);
      } catch (err) {
        console.error('Error fetching spotlight:', err);
        setCreator(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotlight();
  }, []);

  if (loading) return <p>Loading Creator Spotlight...</p>;
  if (!creator) return <p>No spotlight available this week.</p>;

  return (
    <div style={styles.panel}>
      <h3>🌟 Creator Spotlight</h3>
      <p><strong>Creator ID:</strong> {creator.creatorId}</p>
      <p><strong>Emotional Range:</strong> {creator.emotions.size} emotions</p>
      <p><strong>Remix Influence:</strong> {creator.remixInfluence} remixes</p>
      <p><strong>Seasonal Reach:</strong> {creator.seasonal.size} seasons</p>

      <h4>✨ Featured BarkBack</h4>
      <div style={styles.card}>
        <p><em>{creator.stories[0].emotion} — {creator.stories[0].season}</em></p>
        <p>{creator.stories[0].storyText}</p>
      </div>
    </div>
  );
};

const styles = {
  panel: {
    background: '#fff0f6',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #ffadd2',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginTop: '1rem',
  },
};

export default CreatorSpotlight;
