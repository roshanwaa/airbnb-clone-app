import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserCreateContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get('/profile');
    }
  }, []);

  return (
    <UserCreateContext.Provider value={{ user, setUser }}>
      {children}
    </UserCreateContext.Provider>
  );
};
