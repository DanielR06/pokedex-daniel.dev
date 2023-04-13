import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);
  return (
    <div>
      <h1>PokedexLayout</h1>
      <button className="bg-orange-500" onClick={removeUser}>
        Log out
      </button>
      <Outlet />
    </div>
  );
};

export default PokedexLayout;
