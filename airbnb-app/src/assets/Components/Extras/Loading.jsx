import React from 'react';
import classes from '../../CSS/Loader.module.css';

export const Loading = () => {
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
};
