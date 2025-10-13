// StoryGallery.jsx — Renders full story cards with emotional styling

import React from 'react';

const StoryGallery = ({ stories }) => {
  if (!Array.isArray(stories)) {
    return <p>No stories available.</p>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>📖 BarkBacks Story Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {stories.map((story) => (
          <div
            key={story._id}
            style={{
              backgroundColor: '#f9fafb',
              borderLeft: `6px solid ${getEmotionColor(story.emotion)}`,
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              width: '300px'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{story.petName}</h3>
            <p><strong>Emotion:</strong> {story.emotion}</p>
            <p><strong>Season:</strong> {story.season}</p>
            <p><strong>Story:</strong> {story.storyText}</p>
            <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              {new Date(story.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 Emotion color mapping
const getEmotionColor = (emotion) => {
  const colors = {
    Joy: '#FBBF24',
    Love: '#F87171',
    Nostalgia: '#A78BFA',
    Hope: '#34D399',
    Gratitude: '#60A5FA',
    Sad: '#9CA3AF',
    Wonder: '#F472B6',
    Calm: '#93C5FD',
    Trust: '#4ADE80'
  };
  return colors[emotion] || '#D1D5DB'; // default gray
};

export default StoryGallery;
