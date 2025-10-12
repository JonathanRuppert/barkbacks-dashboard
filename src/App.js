// App.js — BarkBacks frontend root component

import React from 'react';
import DebugPanel from './components/DebugPanel';
import StoryForm from './components/StoryForm';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>BarkBacks 🐾</h1>
        <p>Emotionally intelligent pet storytelling, powered by AI.</p>
      </header>

      <main style={styles.main}>
        <DebugPanel />
        <StoryForm />
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} BarkBacks. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    color: '#333',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  main: {
    marginBottom: '2rem',
  },
  footer: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#777',
  },
};

export default App;
