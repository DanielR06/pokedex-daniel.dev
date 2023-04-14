import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);
  return (
    <div>
      <div className="layout">
        <div className="header_pokedex">
          <div className="big circle"></div>
          <div className="small circle red"></div>
          <div className="small circle yellow"></div>
          <div className="small circle green"></div>
        </div>
        <h1 className="title_layout">Pokedex</h1>
        <button className="btn_logout" onClick={removeUser}>
          Log out
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default PokedexLayout;
