import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromptForm from './components/PromptForm';
import ImageForm from './components/ImageForm';
import AnimateForm from './components/AnimateForm';
import SubmitForm from './components/SubmitForm';
import StoryGallery from './components/StoryGallery';
import CreatorGallery from './components/CreatorGallery';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [voiceScript, setVoiceScript] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '2rem' }}>
              <h1>BarkBacks Creator Dashboard</h1>
              <PromptForm setVoiceScript={setVoiceScript} />
              <ImageForm setImageUrl={setImageUrl} />
              <AnimateForm
                imageUrl={imageUrl}
                voiceScript={voiceScript}
                setVideoUrl={setVideoUrl}
              />
              <SubmitForm
                imageUrl={imageUrl}
                videoUrl={videoUrl}
              />
              <StoryGallery />
            </div>
          }
        />
        <Route path="/creator/:id" element={<CreatorGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
