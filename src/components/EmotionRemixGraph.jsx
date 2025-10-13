// EmotionRemixGraph.jsx — Visualize emotional remix chains

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const EmotionRemixGraph = ({ stories }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!stories || stories.length === 0) return;

    const nodes = stories.map((s) => ({
      id: s._id,
      emotion: s.emotion,
    }));

    const links = stories
      .filter((s) => s.remixOf)
      .map((s) => ({
        source: s.remixOf,
        target: s._id,
      }));

    const emotionColors = {
      Joy: '#ffd700',
      Gratitude: '#ff7f50',
      Wonder: '#8a2be2',
      Hope: '#00ced1',
      Nostalgia: '#ff69b4',
      Love: '#ff4500',
    };

    const width = 800;
    const height = 600;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .attr('stroke', '#aaa')
      .selectAll('line')
      .data(links)
      .enter().append('line');

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 10)
      .attr('fill', d => emotionColors[d.emotion] || '#ccc')
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .text(d => d.emotion)
      .attr('font-size', '12px')
      .attr('dx', 12)
      .attr('dy', 4);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      label
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    });
  }, [stories]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>🧠 Emotion Remix Graph</h3>
      <svg ref={svgRef} width={800} height={600} style={{ border: '1px solid #ccc' }} />
    </div>
  );
};

export default EmotionRemixGraph;
