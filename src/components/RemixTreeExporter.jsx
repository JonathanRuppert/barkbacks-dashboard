// RemixTreeExporter.jsx — Downloadable remix lineage tree for creators

import React from 'react';

const RemixTreeExporter = ({ stories = [] }) => {
  const buildTree = () => {
    const map = {};
    const roots = [];

    stories.forEach(s => {
      map[s._id] = { ...s, children: [] };
    });

    stories.forEach(s => {
      if (s.remixOf && map[s.remixOf]) {
        map[s.remixOf].children.push(map[s._id]);
      } else {
        roots.push(map[s._id]);
      }
    });

    return roots;
  };

  const downloadTree = () => {
    const tree = buildTree();
    const blob = new Blob([JSON.stringify(tree, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'remix_lineage_tree.json';
    link.click();
  };

  return (
    <div style={styles.panel}>
      <h3>🌳 Remix Tree Exporter</h3>
      <p>Download your full remix lineage as a JSON tree.</p>
      <button onClick={downloadTree} style={styles.button}>📥 Export Remix Tree</button>
    </div>
  );
};

const styles = {
  panel: {
    background: '#fffbe6',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ffe58f',
    marginTop: '2rem',
  },
  button: {
    padding: '0.5rem 1rem',
    background: '#ffd666',
    border: '1px solid #faad14',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default RemixTreeExporter;
