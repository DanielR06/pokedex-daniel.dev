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
      setNameError(
        'Only letters and spaces, must begin with a capital letter and at least 3 letters. ',
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
    <div className="home">
      <div className="pokedex">
        <div className="header_pokedex">
          <div className="big circle"></div>
          <div className="small circle red"></div>
          <div className="small circle yellow"></div>
          <div className="small circle green"></div>
        </div>
        <div className="border_screen">
          <div className="screen_pokedex">
            <div className="pokemon">
              <img
                src="https://i.pinimg.com/736x/21/01/ac/2101acea630b54ea2f3199c890d8ba77.jpg"
                alt="pikachu"
              />
            </div>
            <h1>!Hello Trainer</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form_user">
          <input
            type="text"
            onChange={handleChange}
            value={nameValue}
            className="input_text"
            placeholder="Type your name"
          />
          <button type="submit" className="btn_start">
            Start
          </button>
        </form>
        {nameError && <p>{nameError}</p>}
        {user && <Navigate to="/pokedex" replace />}
      </div>
    </div>
  );
};

export default Home;
