import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'; // ✅ Only render Dashboard for now

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* ✅ Force dashboard to render */}
      </Routes>
    </Router>
  );
};

export default App;
