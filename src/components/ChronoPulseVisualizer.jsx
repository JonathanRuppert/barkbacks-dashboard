import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const emotionColors = {
  Joy: '#FFD700',
  Sad: '#87CEFA',
  Love: '#FFB6C1',
  Anger: '#FF6347',
  Fear: '#D3D3D3',
  Gratitude: '#90EE90',
};

const ChronoPulseVisualizer = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('https://barkbacks-api.onrender.com/api/chronopulse')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.timeline)) {
          const labels = data.timeline.map(d => d.date);
          const emotions = Object.keys(emotionColors);
          const datasets = emotions.map(emotion => ({
            label: emotion,
            data: data.timeline.map(d => d.emotionCounts[emotion] || 0),
            backgroundColor: emotionColors[emotion],
          }));
          setChartData({ labels, datasets });
        } else {
          console.error('Invalid ChronoPulse data:', data);
        }
      })
      .catch(err => console.error('ChronoPulse fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📈 ChronoPulse: Emotional Activity Over Time</h2>
      {chartData ? (
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default ChronoPulseVisualizer;
