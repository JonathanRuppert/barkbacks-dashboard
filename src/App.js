import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StoryGallery from './components/StoryGallery';
import BadgeDisplay from './components/BadgeDisplay';

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const creatorId = 'your-creator-id'; // Replace with dynamic logic if needed

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://barkbacks-api.onrender.com/api/stories');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

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
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>🐾 BarkBacks Dashboard</h1>

        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/">Stories</Link> | <Link to="/badges">Badges</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading && <p>Loading stories...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {!loading && !error && <StoryGallery stories={stories} />}
              </>
            }
          />
          <Route path="/badges" element={<BadgeDisplay creatorId={creatorId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
