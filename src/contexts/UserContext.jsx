import { createContext } from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage';
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser, removeUser] = useLocalStorage('user', null);
  const value = { user, setUser, removeUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
