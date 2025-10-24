import React, { createContext, useEffect, useRef } from 'react';

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket('wss://barkbacks-api.onrender.com');

    socketRef.current.onopen = () => {
      console.log('🟢 WebSocket connected');
    };

    socketRef.current.onclose = () => {
      console.log('🔴 WebSocket disconnected');
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socketRef.current}>
      {children}
    </WebSocketContext.Provider>
  );
};
