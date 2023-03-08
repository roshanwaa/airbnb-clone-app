import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { UserCreateContext } from '../../../UserContextProvider';
import { AccountNavigation } from '../Extras/AccountNavigation';
import { Loading } from '../Extras/Loading';
import { MyProfile } from '../Extras/MyProfile';

export const ProfilePage = () => {
  const { ready, user, setUser } = useContext(UserCreateContext);
  const [redirectHomePage, setRedirectHomePage] = useState(null);

  // let { subpage } = useParams();

  // if (subpage === undefined) {
  //   subpage = 'profile';
  // }
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

  return (
    <div>
      <AccountNavigation />
      <h1 className="font-bold text-4xl p-5 text-center hover:text-primary">
        Hello {user.name}
      </h1>
      <MyProfile onLogout={logoutHandler} user={user} />
    </div>
  );
};
