import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './assets/Components/Pages/IndexPage';
import { Layout } from './assets/Components/Layout';
import { Login } from './assets/Components/Pages/Login';
import { AccountPage } from './assets/Components/Pages/AccountPage';
import { Register } from './assets/Components/Pages/Register';
import './assets/CSS/App.css';
import { UserContextProvider } from './UserContextProvider';

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
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
