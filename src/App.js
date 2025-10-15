import React, { useEffect, useState } from 'react';

const API_BASE = 'https://barkbacks-api.onrender.com';

function App() {
  const [stories, setStories] = useState([]);
  const [testMessage, setTestMessage] = useState('');

  useEffect(() => {
    // ✅ CORS test (optional)
    fetch(`${API_BASE}/api/test`)
      .then(res => res.json())
      .then(data => {
        console.log('✅ CORS test success:', data);
        setTestMessage(data.message);
      })
      .catch(err => {
        console.error('❌ CORS test failed:', err);
        setTestMessage('CORS test failed');
      });

    // 🔁 Fetch stories
    fetch(`${API_BASE}/api/stories`)
      .then(res => res.json())
      .then(data => {
        console.log('✅ Stories fetched:', data);
        setStories(data);
      })
      .catch(err => {
        console.error('❌ Error fetching stories:', err);
      });
  }, []);

  return (
    <div>
      <h1>BarkBacks Dashboard</h1>
      <p>{testMessage}</p>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <strong>{story.emotion}</strong>: {story.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
