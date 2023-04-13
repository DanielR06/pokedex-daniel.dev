import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const newNameValue = e.target.value;

    setNameValue(newNameValue);
    if (newNameValue === '') setNameError('Name is required');
    else if (!/^[A-Z][a-z ]{3,}$/.test(newNameValue))
      //TODO Mejorar mensaje de error
      setNameError(
        'Only letters and blanks are allowed and least should be three length',
      );
    else setNameError(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError) {
      setUser(nameValue);
    }
  };
  return (
    <div>
      <div>
        <img src="/pokedex_image.svg" alt="Pokedex" />
      </div>
      <div>
        <h1>!Hello Trainer</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={nameValue}
          className="border-neutral-900"
        />
        <button type="submit">Start</button>
      </form>
      {nameError && <p>{nameError}</p>}
      {user && <Navigate to="/pokedex" replace />}
    </div>
  );
};

export default Home;
