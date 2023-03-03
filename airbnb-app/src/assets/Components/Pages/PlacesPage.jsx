import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AccountNavigation } from '../Extras/AccountNavigation';
import { Loading } from '../Extras/Loading';

export const PlacesPage = () => {
  const { subpage } = useParams();
  const { id } = useParams();
  const [addedPlaces, setAddedPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('/places')
      .then(({ data }) => {
        setAddedPlaces(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        setLoading(false);
      });

    return () => {};
  }, []);

  const showAddedPlaces = addedPlaces.map((place) => {
    return (
      <Link
        to={`/account/places/${place._id}`}
        className="flex cursor-pointer gap-4 bg-gray-100 rounded-2xl p-4"
        key={place._id}>
        <div className="w-32 h-32 bg-gray-300 grow-0 shrink-0 rounded-2xl">
          {place.photos.length > 0 && (
            <img src={place.photos[0]} alt={place.title} />
          )}
        </div>
        <div className="grow-0 shrink mt-2">
          <h2 className="text-xl font-semibold ">{place.title}</h2>
          <p className="text-sm mt-2">{place.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <AccountNavigation />
      <div className="text-center">
        <Link
          to={'/account/places/new'}
          className="inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add New Place
        </Link>

        {loading ? (
          <Loading />
        ) : (
          <div className="gap-6">
            {addedPlaces.length > 0 && (
              <div className="mt-4 ">{showAddedPlaces}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
