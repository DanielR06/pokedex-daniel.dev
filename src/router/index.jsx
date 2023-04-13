import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Pokedex from '../views/Pokedex';
import PokemonDetail from '../views/PokemonDetail';
import PokedexLayout from '../components/PokedexLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import { pokedexLoader } from './Loaders/pokedexLoader';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoute>
        <PokedexLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ':id',
        element: <PokemonDetail />,
      },
      {
        //index por que esta ruta no cambia la url, es la misma del Layout
        //aunque se puede con path:''
        path: '',
        element: <Pokedex />,
        loader: pokedexLoader,
      },
    ],
  },
]);
