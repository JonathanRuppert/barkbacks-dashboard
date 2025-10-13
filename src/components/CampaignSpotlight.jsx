// CampaignSpotlight.jsx — Seasonal BarkBacks homepage spotlight

import React, { useEffect, useState } from 'react';

const CampaignSpotlight = () => {
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await fetch('https://barkbacks-backend-1.onrender.com/api/campaigns/current');
        const data = await res.json();
        setCampaign(data);
      } catch (err) {
        console.error('Error fetching campaign:', err);
        setCampaign(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, []);

  if (loading) return <p>Loading campaign spotlight...</p>;
  if (!campaign) return <p>No campaign spotlight available.</p>;

  return (
    <div style={styles.panel}>
      <h3>📣 {campaign.title}</h3>
      <p><strong>{campaign.callToAction}</strong></p>
      {campaign.featured.length === 0 ? (
        <p>No featured BarkBacks yet. Be the first to share!</p>
      ) : (
        campaign.featured.map((story) => (
          <div key={story._id} style={styles.card}>
            <h4>{story.petName} — <em>{story.emotion}</em></h4>
            <p>{story.storyText}</p>
            <small>{new Date(story.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  panel: {
    background: '#f0fff4',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '2rem',
    border: '1px solid #b0e0c0',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
};

export default CampaignSpotlight;
