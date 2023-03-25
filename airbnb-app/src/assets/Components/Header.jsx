import React, { useContext } from 'react';
import { TbBrandAirbnb } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { UserCreateContext } from '../../UserContextProvider';
import classes from '../CSS/header.module.css';

export const Header = () => {
  const { user } = useContext(UserCreateContext);

  return (
    <div>
      <header className="flex justify-between">
        <Link
          to={'/'}
          className="flex items-center gap-2 duration-300 hover:scale-105">
          <TbBrandAirbnb
            className={`w-8 h-8 text-primary ${classes.header_logo}`}
          />
          <span className="font-bold text-xl text-primary hidden md:block">
            airbnb
          </span>
        </Link>
        <div className="flex gap-2 border border-gray-300 rounded-full py-3 px-4 shadow-md shadow-gray-400 item-center duration-300 hover:scale-105">
          <h3 className="hidden md:block">Anywhere</h3>
          <div className="border-l hidden md:block border-gray-300"></div>
          <h3 className="hidden md:block">Any Week</h3>
          <div className="border-l hidden md:block border-gray-300"></div>
          <h3 className="hidden md:block">Add Guests</h3>
          <button className="bg-primary text-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <Link
          to={user ? '/account' : 'login'}
          className="flex gap-2 border items-center border-gray-300 rounded-full py-3 px-4 hover:text-white hover:bg-rose-500 duration-300 hover:scale-105 background-color: #cd0404">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>

          {!!user ? (
            <h3 className="hidden lg:block md:block hover:text-white">
              {user.name}
            </h3>
          ) : (
            <div className="bg-gray-500 text-white rounded-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 relative top-1">
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Link>
      </header>
    </div>
  );
};
