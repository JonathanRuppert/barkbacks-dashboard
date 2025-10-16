import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PetDashboard.css';

const PetDashboard = () => {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState('');
  const [status, setStatus] = useState('');

  // ✅ Correct backend URL
  const BASE_URL = 'https://barkbacks-api.onrender.com/api/pets';

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data;

      const petArray = Array.isArray(data) ? data : data.pets || [];
      setPets(petArray);
      console.log('Fetched pets:', petArray);
    } catch (error) {
      console.error('Error fetching pets:', error);
      setStatus('❌ Failed to fetch pets.');
    }
  };

  const handleAddPet = async (e) => {
    e.preventDefault();
    setStatus('Adding pet...');

    try {
      const response = await axios.post(BASE_URL, { name: newPet }, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setStatus('✅ Pet added!');
        setNewPet('');
        fetchPets();
      } else {
        setStatus('❌ Failed to add pet.');
      }
    } catch (error) {
      console.error('Error adding pet:', error);
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
        {Array.isArray(pets) && pets.length > 0 ? (
          pets.map((pet, index) => <li key={index}>{pet.name}</li>)
        ) : (
          <li>No pets found</li>
        )}
      </ul>
    </div>
  );
};

export default PetDashboard;
