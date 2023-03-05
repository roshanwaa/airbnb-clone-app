import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then((response) => {
      setPlaces(response.data);
    });

    return () => {};
  }, []);

  const mainPlaces = places.map((place) => (
    <div
      className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      key={place._id}>
      {place.photos?.[0] && (
        <div className="bg-gray-200 duration-300 hover:scale-105">
          <div className="">
            <img
              className="rounded-2xl"
              src={'http://localhost:4000/uploads/' + place.photos?.[0]}
              alt={place.photos?.[0]}
            />
          </div>
          <div className="">{place.title}</div>
        </div>
      )}
    </div>
  ));

  return <div>{places.length > 0 && mainPlaces}</div>;
};
