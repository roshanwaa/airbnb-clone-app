import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
// import { Login } from './assets/Login';

export const Layout = () => {
  return (
    <div className="p-6 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
