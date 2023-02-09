import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-3xl text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          {/* Imp to className to "peer" in input section */}
          <input type="email" placeholder="Enter your email" />
          {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p> */}
          <input type="password" placeholder="Enter your Password" />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have a account yet?{' '}
            <Link to={'/register'} className="underline text-black">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
