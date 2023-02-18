import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { UserCreateContext } from '../../UserContextProvider';
import classes from '../CSS/Loader.module.css';

export const AccountPage = () => {
  const { ready, user } = useContext(UserCreateContext);

  if (!ready) {
    return (
      <div className={classes.loader}>
        <div className={`${classes['lds-ellipsis']}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (ready && !user) {
    p - 2;
  }

  return (
    <div>
      <h1 className="font-bold text-4xl pt-5">Hello {user.name}</h1>
      <nav className="w-full flex justify-center mt-6 gap-2">
        <Link
          to={'/account'}
          className="py-2 px-8 bg-primary text-white rounded-full"
        >
          My Profile
        </Link>
        <Link to={'/account/bookings'} className="py-2 px-8">
          My Bookings
        </Link>
        <Link to={'/account/places'} className="py-2 px-8">
          My Accommodations
        </Link>
      </nav>
    </div>
  );
};
