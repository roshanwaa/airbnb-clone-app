import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserCreateContext } from '../UserContextProvider';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectHomePage, setRedirectHomePage] = useState(false);

  const { setUser } = useContext(UserCreateContext);

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });

      setUser(data);
      alert('Login Successful');
      setRedirectHomePage(true);
    } catch (e) {
      console.log(e + ' Login Failed');
    }

    setEmail('');
    setPassword('');
  };

  const emailChangeHandler = (value) => {
    setEmail(value.target.value);
  };
  const passwordChangeHandler = (value) => {
    setPassword(value.target.value);
  };

  if (redirectHomePage) {
    return <Navigate to={'/'} />;
  }

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
