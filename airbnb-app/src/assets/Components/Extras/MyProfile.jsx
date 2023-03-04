import React from 'react';

export const MyProfile = ({ user, onLogout }) => {
  return (
    <div className="text-center max-w-lg mx-auto ">
      <h2>
        Logged in as {user.email} <br />
      </h2>
      <button
        onClick={onLogout}
        className="primary max-w-md mt-2 hover:text-white hover:bg-rose-500 duration-300 hover:scale-105">
        Logout
      </button>
    </div>
  );
};
