// RemixInfluenceOverlay.jsx — Highlight creator influence across remix chains

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RemixInfluenceOverlay = ({ stories }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!stories || stories.length === 0) return;

    const creatorMap = {};
    stories.forEach((s) => {
      if (!creatorMap[s.creatorId]) {
        creatorMap[s.creatorId] = { creatorId: s.creatorId, originals: [], remixedByOthers: 0 };
      }
      if (!s.remixOf) {
        creatorMap[s.creatorId].originals.push(s._id);
      }
    });

    stories.forEach((s) => {
      if (s.remixOf) {
        const parent = stories.find(p => p._id === s.remixOf);
        if (parent && creatorMap[parent.creatorId]) {
          creatorMap[parent.creatorId].remixedByOthers += 1;
        }
      }
    });

    const nodes = stories.map((s, i) => ({
      id: s._id,
      emotion: s.emotion,
      creatorId: s.creatorId,
      remixOf: s.remixOf,
      influence: creatorMap[s.creatorId]?.remixedByOthers || 0,
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

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = nodes.length * 130;
    const height = 250;

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
      .attr('stroke', '#bbb')
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
      .attr('fill', '#bbb');

    svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 10)
      .attr('fill', '#69c0ff');

    svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text(d => `👤 ${d.creatorId} | 🔁 ${d.influence}`)
      .attr('x', d => d.x)
      .attr('y', d => d.y + 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px');
  }, [stories]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>🔍 Remix Influence Overlay</h3>
      <svg ref={svgRef} style={{ border: '1px solid #ccc' }} />
    </div>
  );
};

export default RemixInfluenceOverlay;
