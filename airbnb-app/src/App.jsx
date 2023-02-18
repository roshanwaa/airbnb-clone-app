import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './assets/CSS/App.css';
import { IndexPage } from './assets/Components/IndexPage';
import { Layout } from './assets/Components/Layout';
import { Login } from './assets/Components/Login';
import { Register } from './assets/Components/Register';
import { UserContextProvider } from './UserContextProvider';
import { AccountPage } from './assets/Components/AccountPage';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

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
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
