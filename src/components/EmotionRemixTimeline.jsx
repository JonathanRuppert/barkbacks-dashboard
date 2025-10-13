// EmotionRemixTimeline.jsx — Animated remix evolution over time

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const EmotionRemixTimeline = ({ stories }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!stories || stories.length === 0) return;

    const sorted = [...stories].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    const nodes = sorted.map((s, i) => ({
      id: s._id,
      emotion: s.emotion,
      remixOf: s.remixOf,
      date: new Date(s.createdAt),
      x: i * 120 + 50,
      y: 100,
    }));

    const links = nodes
      .filter(n => n.remixOf)
      .map(n => ({
        source: nodes.find(s => s.id === n.remixOf),
        target: n,
      }))
      .filter(l => l.source);

    const emotionColors = {
      Joy: '#ffd700',
      Gratitude: '#ff7f50',
      Wonder: '#8a2be2',
      Hope: '#00ced1',
      Nostalgia: '#ff69b4',
      Love: '#ff4500',
    };

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = nodes.length * 130;
    const height = 200;

    svg.attr('width', width).attr('height', height);

    svg.append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
      .attr('stroke', '#999')
      .attr('marker-end', 'url(#arrow)');

    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 10)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#999');

    svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 10)
      .attr('fill', d => emotionColors[d.emotion] || '#ccc');

    svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text(d => d.emotion)
      .attr('x', d => d.x)
      .attr('y', d => d.y + 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px');
  }, [stories]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>📈 Emotion Remix Timeline</h3>
      <svg ref={svgRef} style={{ border: '1px solid #ccc' }} />
    </div>
  );
};

export default EmotionRemixTimeline;
