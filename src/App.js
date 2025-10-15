import React, { useEffect, useState } from 'react';
import { API_BASE } from './config';

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/api/stories`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch stories');
        return res.json();
      })
      .then(data => {
        console.log('✅ Stories fetched:', data);
        setStories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Error fetching stories:', err);
        setError('Could not load stories');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>BarkBacks Dashboard</h1>

      {loading && <p>Loading stories...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && stories.length === 0 && (
        <p>No stories found.</p>
      )}

      {!loading && !error && stories.length > 0 && (
        <ul>
          {stories.map((story, index) => (
            <li key={index}>
              <strong>{story.emotion}</strong>: {story.text || <em>(no text)</em>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
