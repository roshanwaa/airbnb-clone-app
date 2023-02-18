import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// import { data } from 'autoprefixer';

export const UserCreateContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserCreateContext.Provider value={{ user, setUser }}>
      {children}
    </UserCreateContext.Provider>
  );
};
