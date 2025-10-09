import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import CreatorGallery from './components/CreatorGallery';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>BarkBacks Story Creator</h1>
      <PromptForm setImageUrl={setImageUrl} setAnimationUrl={setAnimationUrl} />

      {imageUrl && (
        <div>
          <h2>Generated Image</h2>
          <img src={imageUrl} alt="Generated story" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      )}

      {animationUrl && (
        <div>
          <h2>Animation Preview</h2>
          <video src={animationUrl} autoPlay loop muted controls style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      )}

      <hr style={{ margin: '3rem 0' }} />
      <CreatorGallery />
    </div>
  );
}

export default App;
