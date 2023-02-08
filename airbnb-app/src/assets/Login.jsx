import React from 'react';

export const Login = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-3xl text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your Password" />
          <button className="primary">Login</button>
        </form>
      </div>
    </div>
  );
};
