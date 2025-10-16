import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PetDashboard.css';

const PetDashboard = () => {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('/api/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleAddPet = async (e) => {
    e.preventDefault();
    setStatus('Adding pet...');

    try {
      const response = await axios.post('/api/pets', { name: newPet });
      if (response.status === 200) {
        setStatus('✅ Pet added!');
        setNewPet('');
        fetchPets();
      } else {
        setStatus('❌ Failed to add pet.');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Error adding pet.');
    }
  };

  return (
    <div className="pet-dashboard">
      <h2>Pet Dashboard</h2>
      <form onSubmit={handleAddPet}>
        <input
          type="text"
          value={newPet}
          onChange={(e) => setNewPet(e.target.value)}
          placeholder="Enter pet name"
          required
        />
        <button type="submit">Add Pet</button>
      </form>
      <p className="status">{status}</p>
      <ul className="pet-list">
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetDashboard;
