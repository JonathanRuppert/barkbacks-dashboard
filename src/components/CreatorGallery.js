import React, { useEffect, useState } from 'react';

const CreatorGallery = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const res = await fetch('https://barkbacks-backend.onrender.com/api/creators');
        const data = await res.json();
        setCreators(data);
      } catch (err) {
        console.error('Error fetching creators:', err);
      }
    };

    fetchCreators();
  }, []);

  return (
    <div>
      <h2>Creator Gallery</h2>
      <ul>
        {creators.map((creator, index) => (
          <li key={index}>
            <strong>{creator.name}</strong> — {creator.storyTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatorGallery;
