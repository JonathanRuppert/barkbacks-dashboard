import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/submit">Submit Story</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/creators">Creators</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/dashboard">Dashboard</Link> {/* ✅ New link added */}
    </nav>
  );
};

export default NavBar;
