import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then((response) => {
      setPlaces([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
    });

    return () => {};
  }, []);

  const mainPlaces = places.map((place) => (
    <div
      className="duration-300 hover:scale-105 cursor-pointer"
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
      <h2 className="text-lg font-semibold truncate">{place.title}</h2>
      <h3 className="text-sm font-semibold">Price: {place.price}$</h3>
      <h3 className="text-sm">{place.address}</h3>
    </div>
  ));

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-6">
      {places.length > 0 && mainPlaces}
    </div>
  );
};
