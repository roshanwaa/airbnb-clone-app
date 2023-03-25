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
import { UserPlacesPage } from './assets/Components/Pages/UserPlacesPage';
import { PlacePage } from './assets/Components/Pages/PlacePage';
import { PlaceForm } from './assets/Components/Place/PlaceForm';
import { BookingsPage } from './assets/Components/Pages/BookingsPage';
import { MyBookingPlace } from './assets/Components/Pages/MyBookingPlace';

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
          <Route path="/account/user-places" element={<UserPlacesPage />} />
          <Route path="/account/user-places/new" element={<PlaceForm />} />
          <Route path="/account/user-places/:id" element={<PlaceForm />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<MyBookingPlace />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
