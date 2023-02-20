import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate, Link, useParams, redirect } from 'react-router-dom';
import { UserCreateContext } from '../../UserContextProvider';
import classes from '../CSS/Loader.module.css';
import { PlacesPage } from './PlacesPage';

export const AccountPage = () => {
  const { ready, user, setUser } = useContext(UserCreateContext);
  const [redirectHomePage, setRedirectHomePage] = useState(null);

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = 'profile';
  }
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

  const logoutHandler = async () => {
    await axios.post('/logout');
    setRedirectHomePage('/');
    setUser(null);
  };

  if (redirectHomePage) {
    return <Navigate to={redirectHomePage} />;
  }

  if (ready && !user && !redirectHomePage) {
    return <Navigate to="/login" />;
  }

  function linkClasses(type = null) {
    let classes = 'py-2 px-8';
    if (type === subpage) {
      classes += ' bg-primary text-white rounded-full';
    }
    return classes;
  }

  return (
    <div>
      <h1 className="font-bold text-4xl pt-5">Hello {user.name}</h1>
      <nav className="w-full flex justify-center mt-6 mb-8 gap-2">
        <Link to={'/account/profile'} className={linkClasses('profile')}>
          My Profile
        </Link>
        <Link to={'/account/bookings'} className={linkClasses('bookings')}>
          My Bookings
        </Link>
        <Link to={'/account/places'} className={linkClasses('places')}>
          My Accommodations
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto ">
          <h2>
            Logged in as {user.name} ({user.email}) <br />
          </h2>
          <button onClick={logoutHandler} className="primary max-w-md mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  );
};
