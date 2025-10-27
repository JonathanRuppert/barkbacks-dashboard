import React, { useEffect, useState } from 'react';

const PetArc = () => {
  const [arcs, setArcs] = useState([]);

  useEffect(() => {
    const fetchArcs = async () => {
      const res = await fetch('https://barkbacks-api.onrender.com/api/pet-arcs');
      const data = await res.json();
      setArcs(data.arcs || []);
    };
    fetchArcs();
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>🐾 Pet Emotional Arcs</h2>
      {arcs.length === 0 ? (
        <p>No emotional data yet...</p>
      ) : (
        arcs.map((pet, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <strong>{pet.petName}</strong>
            {Array.isArray(pet.emotionalTimeline) ? (
              <ul>
                {pet.emotionalTimeline.map((entry, j) => (
                  <li key={j}>
                    {entry.emotion} at {new Date(entry.timestamp).toLocaleTimeString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No emotional timeline available.</p>
            )}
          </div>
        ))
      )}
    </section>
  );
};

export default PetArc;
