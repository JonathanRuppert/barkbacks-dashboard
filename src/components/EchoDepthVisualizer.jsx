import React, { useEffect, useState } from 'react';

const EchoDepthVisualizer = ({ creatorId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Fetching EchoDepth...');
    fetch('https://barkbacks-api.onrender.com/api/echodepth/' + creatorId)
      .then(res => res.json())
      .then(json => {
        console.log('EchoDepth data:', json);
        setData(json);
      })
      .catch(err => {
        console.error('EchoDepth fetch error:', err);
      });
  }, [creatorId]);

  return (
    <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ccc' }}>
      <h3>EchoDepth Debug</h3>
      {data ? (
        <pre style={{ fontSize: '0.8rem', overflowX: 'auto' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>Loading or no data...</p>
      )}
    </div>
  );
};

export default EchoDepthVisualizer;
