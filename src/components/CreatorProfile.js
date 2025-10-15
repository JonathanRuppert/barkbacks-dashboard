import React, { useEffect, useState } from 'react';

function CreatorProfile({ creatorId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://barkbacks-api.onrender.com/api/profile/${creatorId}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('Failed to fetch profile:', err));
  }, [creatorId]);

  const isCampaignTag = (tag) => ['Fall 2025', 'Launch Week'].includes(tag);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div style={{ marginTop: '3rem' }}>
      <h2>👤 Creator Profile: {profile.creatorId}</h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {profile.stories.map((story) => (
          <div key={story.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#f9f9f9' }}>
            <img src={story.image} alt="Story preview" style={{ width: '100%', borderRadius: '6px' }} />
            <video src={story.animation} controls style={{ width: '100%', borderRadius: '6px', marginTop: '1rem' }} />
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>“{story.prompt}”</p>
            {story.remixedFrom && (
              <p style={{ fontSize: '0.8rem', color: '#555' }}>
                Remixed from <strong>{story.remixedFrom}</strong>
              </p>
            )}
            <div style={{ marginTop: '0.5rem' }}>
              {story.tags && story.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: isCampaignTag(tag) ? '#ffd700' : '#e0e0e0',
                    padding: '0.3rem 0.6rem',
                    marginRight: '0.4rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: isCampaignTag(tag) ? 'bold' : 'normal',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorProfile;
