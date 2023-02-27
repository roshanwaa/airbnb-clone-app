import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlaceForm } from './Place/PlaceForm';

export const PlacesPage = () => {
  const { action } = useParams();

  return (
    <div>
      {action != 'new' && (
        <div className="text-center">
          <Link
            to={'/account/places/new'}
            className="inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add New Place
          </Link>
          <h2 className="text-lg py-4">List of all added place</h2>
        </div>
      )}
      {action === 'new' && <PlaceForm />}
    </div>
  );
};
