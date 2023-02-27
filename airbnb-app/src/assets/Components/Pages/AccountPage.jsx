import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { UserCreateContext } from '../../../UserContextProvider';
import { AccountNavigation } from '../Extras/AccountNavigation';
import { Loading } from '../Extras/Loading';
import { MyProfile } from '../Extras/MyProfile';
import { PlacesPage } from './PlacesPage';

export const AccountPage = () => {
  const { ready, user, setUser } = useContext(UserCreateContext);
  const [redirectHomePage, setRedirectHomePage] = useState(null);

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = 'profile';
  }
  if (!ready) {
    return <Loading />;
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
    let classes = 'inline-flex gap-2 py-2 px-8';
    if (type === subpage) {
      classes += ' bg-primary text-white rounded-full btn active-btn';
    } else {
      classes += ' bg-gray-300 text-black rounded-full ';
    }
    return classes;
  }

  return (
    <div>
      <h1 className="font-bold text-4xl pt-5">Hello {user.name}</h1>
      <AccountNavigation linkToClass={linkClasses} />
      {subpage === 'profile' && (
        <MyProfile onLogout={logoutHandler} user={user} />
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  );
};
