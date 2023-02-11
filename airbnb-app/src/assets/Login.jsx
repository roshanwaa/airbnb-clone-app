import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/login', {
        email,
        password,
      });
      console.log('Login Successful');
    } catch (e) {
      console.log(e + ' Login Failed');
    }

    // setEmail('');
    // setPassword('');
  };

  const emailChangeHandler = (value) => {
    setEmail(value.target.value);
  };
  const passwordChangeHandler = (value) => {
    setPassword(value.target.value);
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-3xl text-center mb-4">Login</h1>
        <form
          action=""
          className="max-w-md mx-auto"
          onSubmit={loginSubmitHandler}
        >
          {/* Imp to className to "peer" in input section */}
          <input
            type="email"
            placeholder="Enter your email"
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
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have a account yet?
            <Link to={'/register'} className="underline text-black">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
