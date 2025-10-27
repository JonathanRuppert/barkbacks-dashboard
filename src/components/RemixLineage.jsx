import React, { useEffect, useState } from 'react';

const RemixLineage = () => {
  const [lineage, setLineage] = useState([]);

  useEffect(() => {
    const fetchLineage = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/remix-attribution');
      const data = await res.json();
      setLineage(data.attribution || []);
    };
    fetchLineage();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🧬 Remix Lineage</h2>
      {lineage.length === 0 ? (
        <p>No remix data yet...</p>
      ) : (
        lineage.map((entry, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>Original Story:</strong> <code>{entry.originalId}</code><br />
            <strong>Remix Count:</strong> {entry.remixCount}<br />
            <strong>Remixed By:</strong> {entry.remixedBy.join(', ')}
          </div>
        ))
      )}
    </section>
  );
};

export default RemixLineage;
