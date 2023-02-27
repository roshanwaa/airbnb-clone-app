import React from 'react';

export const MyProfile = ({ user, onLogout }) => {
  return (
    <div className="text-center max-w-lg mx-auto ">
      <h2>
        Logged in as {user.name} ({user.email}) <br />
      </h2>
      <button onClick={onLogout} className="primary max-w-md mt-2 btn">
        Logout
      </button>
    </div>
  );
};
