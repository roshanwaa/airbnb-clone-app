import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Extras/Loading';
// import { ErrorPage } from '../Extras/ErrorPage';
import { TiDeleteOutline, TiLocation, TiStarFullOutline } from 'react-icons/ti';
import { TbBellRingingFilled, TbGridDots } from 'react-icons/tb';

export const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }

    axios
      .get(`/user-places/${id}`)
      .then((response) => {
        setLoading(false);
        setPlace(response.data);
      })
      .catch((error) => {
        // setError(error);
        setLoading(false);
      });

    return () => {
      setLoading(false);
    };
  }, [id]);

  if (!place) return '';

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white opacity-85 min-h-fit p-8">
        <div className="">
          <h2 className="text-3xl ">Phots of {place.title}</h2>
          <button
            onClick={() => {
              setShowAllPhotos(false);
            }}
            className="fixed right-8 top-8 text-black flex items-center gap-1 px-2 bg-gray-300 rounded-2xl duration-300 hover:scale-110 hover:bg-rose-500 shadow-md shadow-black-400 cursor-pointer">
            <TiDeleteOutline className="w-auto h-10" />
            Close
          </button>
        </div>
        <div className="grid pt-4 gap-3 justify-items-center">
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
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-8 ">
          <h1 className="text-3xl font-medium">{place.title}</h1>

          <div className="my-2 items-center gap-2 font-semibold md:flex">
            <TiStarFullOutline />
            <h3>4.3</h3>
            <span>.</span>
            <TbBellRingingFilled />
            <h3 className="">24/7 Anytime</h3>
            <span>.</span>
            <TiLocation />
            <a
              href={'http://maps.google.com/?q=' + place.address}
              target="_blank"
              className="underline  duration-300 hover:text-primary">
              {place.address}
            </a>
          </div>
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
                setShowAllPhotos(true);
              }}
              className="absolute bottom-2 right-2 py-2 px-3 bg-zinc-300 rounded-2xl shadow-md shadow-slate-800 flex gap-1 items-center duration-300 hover:scale-110 hover:bg-rose-500">
              <TbGridDots />
              Show more Photos
            </button>
          </div>
        </div>
      )}
    </>
  );
};
