import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './assets/Components/Pages/IndexPage';
import { Layout } from './assets/Components/Layout';
import { Login } from './assets/Components/Pages/Login';
import { ProfilePage } from './assets/Components/Pages/ProfilePage';
import { Register } from './assets/Components/Pages/Register';
import './assets/CSS/App.css';
import { UserContextProvider } from './UserContextProvider';
import { PlacesPage } from './assets/Components/Pages/PlacesPage';
import { PlaceForm } from './assets/Components/Place/PlaceForm';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/profile" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlaceForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
