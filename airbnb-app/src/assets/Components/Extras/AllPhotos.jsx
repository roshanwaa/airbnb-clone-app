import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

export const AllPhotos = ({ placeProps: place, AllPhotos }) => {
  return (
    <div className="absolute inset-0 bg-black text-white opacity-85 min-h-fit p-8">
      <div className="">
        <h2 className="text-3xl ">Phots of {place.title}</h2>
        <button
          onClick={() => {
            AllPhotos(false);
          }}
          className="fixed right-8 top text-gray-50 flex rounded-full duration-300 hover:scale-110 hover:bg-rose-500 cursor-pointer">
          <TiDeleteOutline className="w-auto h-9" />
        </button>
      </div>
      <div className="grid pt-4 gap-3 justify-items-center" key={place.photo}>
        {place?.photos?.length > 0 &&
          place.photos.map((photo) => {
            return (
              <div className="w-3/6 h-fit text-center">
                <img
                  src={'http://localhost:4000/uploads/' + photo}
                  alt={photo}
                  className="rounded-2xl"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
