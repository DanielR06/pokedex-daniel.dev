import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) return <>{children}</>;
  else return <Navigate to="/" />;
};

export default ProtectedRoute;
