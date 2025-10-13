// RemixTreeExporter.jsx — Export remix lineage as shareable tree

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import html2canvas from 'html2canvas';

const RemixTreeExporter = ({ stories }) => {
  const svgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (!stories || stories.length === 0) return;

    const nodes = stories.map((s) => ({
      id: s._id,
      emotion: s.emotion,
      remixOf: s.remixOf,
    }));

    const links = nodes
      .filter(n => n.remixOf)
      .map(n => ({
        source: n.remixOf,
        target: n.id,
      }));

    const emotionColors = {
      Joy: '#ffd700',
      Gratitude: '#ff7f50',
      Wonder: '#8a2be2',
      Hope: '#00ced1',
      Nostalgia: '#ff69b4',
      Love: '#ff4500',
    };

    const width = 1000;
    const height = 600;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', height);

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(120))
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

  const downloadTree = async () => {
    const canvas = await html2canvas(containerRef.current);
    const link = document.createElement('a');
    link.download = 'remix_tree.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div ref={containerRef} style={{ marginTop: '2rem' }}>
      <h3>🌳 Remix Tree Exporter</h3>
      <svg ref={svgRef} style={{ border: '1px solid #ccc' }} />
      <button onClick={downloadTree} style={styles.button}>📥 Download Remix Tree</button>
    </div>
  );
};

const styles = {
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    background: '#e6f7ff',
    border: '1px solid #1890ff',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default RemixTreeExporter;
