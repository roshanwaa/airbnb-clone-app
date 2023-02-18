import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './assets/CSS/App.css';
import { IndexPage } from './assets/IndexPage';
import { Layout } from './assets/Layout';
import { Login } from './assets/Login';
import { Register } from './assets/Register';
import { UserContextProvider } from './UserContextProvider';
// http://127.0.0.1:5173/login
axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = false;

function App() {
  // const routes = useRoutes([
  //   { path: '/', element: <Layout /> },
  //   { index: '', element: <IndexPage /> },
  //   { path: '/login', element: <Login /> },
  // ]);
  // return routes;

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
