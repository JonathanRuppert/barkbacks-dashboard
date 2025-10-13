import React, { createContext, useState, useEffect } from 'react';

export const EmotionContext = createContext();

export const EmotionProvider = ({ children }) => {
  const [emotionData, setEmotionData] = useState({
    mood: 'Joy',
    storyPhase: 'Discovery'
  });

  useEffect(() => {
    const socket = new WebSocket('wss://your-backend-url');
    socket.onmessage = (event) => {
      const updatedEmotion = JSON.parse(event.data);
      setEmotionData(updatedEmotion);
    };
    return () => socket.close();
  }, []);

  return (
    <EmotionContext.Provider value={{ emotionData }}>
      {children}
    </EmotionContext.Provider>
  );
};
