// App.js — BarkBacks frontend entry

import React, { useEffect, useState } from 'react';
import StoryGallery from './components/StoryGallery';

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://barkbacks-backend-1.onrender.com/api/stories');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Defensive check to ensure data is an array
        if (Array.isArray(data)) {
          setStories(data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching stories:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🐾 BarkBacks Dashboard</h1>

      {loading && <p>Loading stories...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && <StoryGallery stories={stories} />}
    </div>
  );
}

export default App;
