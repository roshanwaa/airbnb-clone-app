import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
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
    return <Navigate to={'/login'} />;
  }

  return <div>Account {user?.name}</div>;
};
