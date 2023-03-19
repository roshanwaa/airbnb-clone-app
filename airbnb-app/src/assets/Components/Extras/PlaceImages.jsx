import React from 'react';
import { TbGridDots } from 'react-icons/tb';

export const PlaceImages = ({ placeProps: place, allPhotos }) => {
  return (
    <>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr_1fr] rounded-2xl overflow-hidden">
          {place.photos?.[0] && (
            <div className="aspect-square object-cover">
              <img
                className="aspect-square object-cover"
                src={'http://localhost:4000/uploads/' + place.photos[0]}
                alt={place.photos[0]}
              />
            </div>
          )}
          <div className="grid">
            {place.photos?.[1] && (
              <img
                className="aspect-square object-cover"
                src={'http://localhost:4000/uploads/' + place.photos[1]}
                alt={place.photos[1]}
              />
            )}
            <div className="overflow-hidden">
              {place.photos?.[2] && (
                <img
                  className="aspect-square object-cover relative top-2"
                  src={'http://localhost:4000/uploads/' + place.photos[2]}
                  alt={place.photos[2]}
                />
              )}
            </div>
          </div>
          <div className="grid">
            {place.photos?.[3] && (
              <img
                className="aspect-square object-cover"
                src={'http://localhost:4000/uploads/' + place.photos[3]}
                alt={place.photos[3]}
              />
            )}
            <div className="overflow-hidden">
              {place.photos?.[4] && (
                <img
                  className="aspect-square object-cover relative top-2"
                  src={'http://localhost:4000/uploads/' + place.photos[4]}
                  alt={place.photos[4]}
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            allPhotos(true);
          }}
          className="absolute bottom-2 right-2 py-2 px-3 bg-zinc-300 rounded-2xl shadow-md shadow-slate-800 flex gap-1 items-center duration-300 hover:scale-105 hover:bg-rose-500 hover:text-gray-50">
          <TbGridDots />
          Show more Photos
        </button>
      </div>
    </>
  );
};
