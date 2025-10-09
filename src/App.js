// src/App.js

import React, { useState } from 'react';
import PromptForm from './components/PromptForm';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');

  return (
    <div>
      <h1>BarkBacks Story Creator</h1>
      <PromptForm setImageUrl={setImageUrl} setAnimationUrl={setAnimationUrl} />
      {imageUrl && (
        <div>
          <h2>Generated Image</h2>
          <img src={imageUrl} alt="Generated story" style={{ maxWidth: '100%' }} />
        </div>
      )}
      {animationUrl && (
        <div>
          <h2>Animation Preview</h2>
          <video src={animationUrl} autoPlay loop muted style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default App;
