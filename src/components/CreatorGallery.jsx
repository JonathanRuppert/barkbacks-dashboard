import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CreatorGallery.css';

const CreatorGallery = () => {
  const [creators, setCreators] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [badges, setBadges] = useState([]);
  const [status, setStatus] = useState('');

  // ✅ Replace with your actual backend URL
  const BASE_URL = 'https://barkbacks-api.onrender.com';

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/stories`);
      const stories = response.data;

      const grouped = {};
      stories.forEach((story) => {
        if (!grouped[story.creatorId]) {
          grouped[story.creatorId] = {
            creatorId: story.creatorId,
            stories: [],
          };
        }
        grouped[story.creatorId].stories.push(story);
      });

      const creatorList = Object.values(grouped);
      setCreators(creatorList);
      console.log('Fetched creators:', creatorList);
    } catch (error) {
      console.error('Error fetching creators:', error);
      setStatus('❌ Failed to load creators.');
    }
  };

  const fetchBadges = async (creatorId) => {
    setStatus('Loading badges...');
    try {
      const response = await axios.get(`${BASE_URL}/api/badges/${creatorId}`);
      setBadges(response.data.badges || []);
      setSelectedCreator(creatorId);
      setStatus('');
    } catch (error) {
      console.error('Error fetching badges:', error);
      setStatus('❌ Failed to load badges.');
    }
  };

  return (
    <div className="creator-gallery">
      <h2>Creator Gallery</h2>
      <p>Select a creator to view their emotional badge chains:</p>
      <ul className="creator-list">
        {creators.map((creator) => (
          <li key={creator.creatorId}>
            <button onClick={() => fetchBadges(creator.creatorId)}>
              {creator.creatorId}
            </button>
          </li>
        ))}
      </ul>

      {selectedCreator && (
        <div className="badge-display">
          <h3>Badges for {selectedCreator}</h3>
          {badges.length > 0 ? (
            <ul className="badge-list">
              {badges.map((badge, index) => (
                <li key={index}>{badge}</li>
              ))}
            </ul>
          ) : (
            <p>No badges found for this creator.</p>
          )}
        </div>
      )}

      <p className="status">{status}</p>
    </div>
  );
};

export default CreatorGallery;
