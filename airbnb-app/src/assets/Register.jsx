import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Login } from './Login';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUserForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });

      alert('Registration successfully Complete. Now you can login');
    } catch (e) {
      console.log(e + ' Registration Failed');
    }
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  const nameChangeHandler = (setValue) => {
    setName(setValue.target.value);
  };
  const emailChangeHandler = (setValue) => {
    setEmail(setValue.target.value);
  };
  const passwordChangeHandler = (setValue) => {
    setPassword(setValue.target.value);
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-3xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUserForm}>
          {/* Imp to className to "peer" in input section */}
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={nameChangeHandler}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={emailChangeHandler}
          />
          {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p> */}
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already Registered?
            <Link to={'/login'} className="underline text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
