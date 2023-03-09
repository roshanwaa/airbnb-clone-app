import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../Extras/Loading';

export const IndexPage = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('/places')
      .then((response) => {
        setPlaces([...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    return () => {};
  }, []);

  const mainPlaces = places.map((place) => (
    <Link
      to={'/place/' + place._id}
      className="duration-300 hover:scale-105"
      key={place._id}>
      <div className="bg-gray-400 rounded-2xl flex mb-2">
        {place.photos?.[0] && (
          <img
            className="rounded-2xl object-cover aspect-square"
            src={'http://localhost:4000/uploads/' + place.photos?.[0]}
            alt={place.photos?.[0]}
          />
        )}
      </div>
      <h2 className="text-lg font-bold truncate">{place.title}</h2>
      <h3 className="text-sm font-semibold my-2">
        Price Per Night: ${place.price}
      </h3>
      <h3 className="text-sm text-gray-500">{place.address}</h3>
    </Link>
  ));

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-6">
          {places.length > 0 && mainPlaces}
        </div>
      )}
    </>
  );
};
