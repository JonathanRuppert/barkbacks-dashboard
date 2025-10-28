import React, { useEffect, useState } from 'react';

const EmotionSummary = () => {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const fetchSummaries = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/emotion-summary');
      const data = await res.json();
      setSummaries(data.summaries || []);
    };
    fetchSummaries();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>📊 Emotion Summary</h2>
      {summaries.length === 0 ? (
        <p>No summary data available...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Pet Name</th>
              <th style={{ textAlign: 'right' }}>Total Stories</th>
              <th style={{ textAlign: 'right' }}>Avg Remix Depth</th>
              <th style={{ textAlign: 'right' }}>Emotion Spread</th>
            </tr>
          </thead>
          <tbody>
            {summaries.map((s, i) => (
              <tr key={i}>
                <td>{s.petName}</td>
                <td style={{ textAlign: 'right' }}>{s.totalStories}</td>
                <td style={{ textAlign: 'right' }}>{s.avgRemixDepth}</td>
                <td style={{ textAlign: 'right' }}>
                  {Object.entries(s.emotionSpread)
                    .map(([emotion, count]) => `${emotion} (${count})`)
                    .join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default EmotionSummary;
