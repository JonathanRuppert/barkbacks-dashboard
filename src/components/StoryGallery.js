import React, { useEffect, useState } from 'react';

const StoryGallery = () => {
  const [stories, setStories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [creatorFilter, setCreatorFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [seasonalStories, setSeasonalStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch('http://localhost:3000/render-gallery');
      const data = await res.json();
      const allStories = data.stories || [];

      setStories(allStories);
      setFiltered(allStories);
      setSeasonalStories(getSeasonalSubset(allStories));
    };

    fetchStories();
  }, []);

  useEffect(() => {
    let result = stories;

    if (creatorFilter) {
      result = result.filter(story =>
        story.creator_id.toLowerCase().includes(creatorFilter.toLowerCase())
      );
    }

    if (tagFilter) {
      result = result.filter(story =>
        story.tags.toLowerCase().includes(tagFilter.toLowerCase())
      );
    }

    setFiltered(result);
  }, [creatorFilter, tagFilter, stories]);

  const getSeasonalSubset = (stories) => {
    const month = new Date().getMonth(); // 0 = Jan, 9 = Oct
    let keywords = [];

    if (month === 9) keywords = ['halloween', 'spooky', 'costume', 'pumpkin'];
    else if (month === 10 || month === 11) keywords = ['fall', 'thanksgiving', 'leaves'];
    else if (month === 0 || month === 1) keywords = ['winter', 'snow', 'cozy', 'husky'];
    else if (month === 2 || month === 3) keywords = ['spring', 'flowers', 'renewal'];
    else if (month === 4 || month === 5) keywords = ['summer', 'beach', 'sun', 'adventure'];

    return stories.filter(story =>
      keywords.some(keyword =>
        story.tags.toLowerCase().includes(keyword)
      )
    );
  };

  const uniqueCreators = [...new Set(stories.map(s => s.creator_id))];
  const uniqueTags = [...new Set(stories.flatMap(s => s.tags.split(',').map(t => t.trim())))];

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>🎯 Featured Season</h2>
      {seasonalStories.length === 0 ? (
        <p>No seasonal stories yet. Try tagging with “Halloween”, “Winter”, etc.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {seasonalStories.map((story, index) => (
            <div key={index} style={{ border: '2px solid orange', padding: '1rem', borderRadius: '8px', backgroundColor: '#fffbe6' }}>
              <h3>{story.title || 'Untitled Story'}</h3>
              <img
                src={story.image_url}
                alt={story.title}
                style={{ width: '100%', borderRadius: '4px' }}
              />
              <video
                src={story.video_url}
                controls
                style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }}
              />
              <p style={{ marginTop: '0.5rem' }}><strong>Tags:</strong> {story.tags}</p>
              <p><strong>Creator:</strong> {story.creator_id}</p>
            </div>
          ))}
        </div>
      )}

      <h2>Story Gallery</h2>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <select value={creatorFilter} onChange={e => setCreatorFilter(e.target.value)}>
          <option value="">All Creators</option>
          {uniqueCreators.map((creator, i) => (
            <option key={i} value={creator}>{creator}</option>
          ))}
        </select>

        <select value={tagFilter} onChange={e => setTagFilter(e.target.value)}>
          <option value="">All Tags</option>
          {uniqueTags.map((tag, i) => (
            <option key={i} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p>No stories match your filters.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {filtered.map((story, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <h3>{story.title || 'Untitled Story'}</h3>
              <img
                src={story.image_url}
                alt={story.title}
                style={{ width: '100%', borderRadius: '4px' }}
              />
              <video
                src={story.video_url}
                controls
                style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }}
              />
              <p style={{ marginTop: '0.5rem' }}><strong>Tags:</strong> {story.tags}</p>
              <p><strong>Creator:</strong> {story.creator_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoryGallery;
