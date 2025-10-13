// GalleryFilterPanel.jsx — Filter BarkBacks by emotion, season, remix depth, and voice

import React from 'react';

const GalleryFilterPanel = ({ filters, setFilters }) => {
  const emotions = ['Joy', 'Gratitude', 'Wonder', 'Hope', 'Nostalgia', 'Love'];
  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.panel}>
      <h3>🧭 Filter BarkBacks</h3>

      <label style={styles.label}>
        Emotion:
        <select name="emotion" value={filters.emotion} onChange={handleChange} style={styles.select}>
          <option value="">All</option>
          {emotions.map((emotion) => (
            <option key={emotion} value={emotion}>{emotion}</option>
          ))}
        </select>
      </label>

      <label style={styles.label}>
        Season:
        <select name="season" value={filters.season} onChange={handleChange} style={styles.select}>
          <option value="">All</option>
          {seasons.map((season) => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
      </label>

      <label style={styles.label}>
        Remix Depth:
        <select name="remixDepth" value={filters.remixDepth} onChange={handleChange} style={styles.select}>
          <option value="">All</option>
          <option value="0">Originals only</option>
          <option value="1">Remixes only</option>
        </select>
      </label>

      <label style={styles.label}>
        Voice Preview:
        <select name="hasVoice" value={filters.hasVoice} onChange={handleChange} style={styles.select}>
          <option value="">All</option>
          <option value="true">Has voice preview</option>
          <option value="false">No voice preview</option>
        </select>
      </label>
    </div>
  );
};

const styles = {
  panel: {
    background: '#e6f7ff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    border: '1px solid #91d5ff',
  },
  label: {
    display: 'block',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  select: {
    marginLeft: '0.5rem',
    padding: '0.25rem',
    borderRadius: '4px',
  },
};

export default GalleryFilterPanel;
