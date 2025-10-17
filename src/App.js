import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StoryGallery from './components/StoryGallery';
import StoryForm from './components/StoryForm';
import PetDashboard from './components/PetDashboard';
import CreatorGallery from './components/CreatorGallery';
import EmotionRemixGraph from './components/EmotionRemixGraph';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<StoryGallery />} />
        <Route path="/submit" element={<StoryForm />} />
        <Route path="/pets" element={<PetDashboard />} />
        <Route path="/creators" element={<CreatorGallery />} />
        <Route path="/analytics" element={<EmotionRemixGraph />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
