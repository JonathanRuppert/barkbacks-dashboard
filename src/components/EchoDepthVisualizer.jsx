import React, { useEffect, useState } from 'react';

const EchoDepthVisualizer = ({ creatorId }) => {
  const [chains, setChains] = useState([]);

  useEffect(() => {
    const fetchChains = async () => {
      try {
        const res = await fetch(`/api/echodepth/${creatorId}`);
        const data = await res.json();
        setChains(data.chains || []);
      } catch (err) {
        console.error('Failed to fetch EchoDepth chains:', err);
      }
    };
    fetchChains();
  }, [creatorId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>EchoDepth Remix Chains</h2>
      {chains.length === 0 ? (
        <p>No remix chains found for {creatorId}.</p>
      ) : (
        chains.map((chain, index) => (
          <div key={index} style={{ marginBottom: '2rem', borderLeft: '4px solid #ccc', paddingLeft: '1rem' }}>
            <h4>Chain Depth: {chain.depth}</h4>
            {chain.texts.map((text, i) => (
              <div key={i} style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#555' }}>{chain.emotions[i]}</strong>: {text}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default EchoDepthVisualizer;
