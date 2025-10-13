import React, { useState } from 'react';
import EmotionRemixCarousel from './EmotionRemixCarousel';
import EmotionRemixConstellationMap from './EmotionRemixConstellationMap';
import { EmotionProvider } from './EmotionContext';

const EmotionRemixDashboard = () => {
  const [view, setView] = useState('carousel');

  return (
    <EmotionProvider>
      <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>🧠 BarkBacks Emotional Dashboard</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <button
            onClick={() => setView('carousel')}
            style={{
              padding: '0.5rem 1rem',
              marginRight: '1rem',
              backgroundColor: view === 'carousel' ? '#2563EB' : '#E5E7EB',
              color: view === 'carousel' ? '#fff' : '#111827',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🎠 Carousel
          </button>
          <button
            onClick={() => setView('constellation')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: view === 'constellation' ? '#2563EB' : '#E5E7EB',
              color: view === 'constellation' ? '#fff' : '#111827',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🌠 Constellation
          </button>
        </div>

        {view === 'carousel' ? <EmotionRemixCarousel /> : <EmotionRemixConstellationMap />}
      </div>
    </EmotionProvider>
  );
};

export default EmotionRemixDashboard;
