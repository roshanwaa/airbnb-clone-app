import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Extras/Loading';
// import { ErrorPage } from '../Extras/ErrorPage';
import { TiDeleteOutline, TiLocation, TiStarFullOutline } from 'react-icons/ti';
import { TbBellRingingFilled } from 'react-icons/tb';
import { Booking } from '../Extras/Booking';
import { PlaceImages } from '../Extras/PlaceImages';
import { AllPhotos } from '../Extras/AllPhotos';

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
    return <AllPhotos placeProps={place} AllPhotos={setShowAllPhotos} />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-8 ">
          <h1 className="text-3xl font-medium">{place.title}</h1>

          <div className="my-2 items-center gap-2 font-semibold flex">
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
          <PlaceImages placeProps={place} allPhotos={setShowAllPhotos} />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 my-8">
            <div className=" bg-gray-300 h-fit p-4 rounded-2xl duration-300 shadow-lg">
              <div className="mb-2">
                <h2 className="font-semibold text-2xl">Description</h2>
                <p className="">{place.description}</p>
              </div>
              <h2 className="font-semibold">
                Check In: <span className="font-normal">{place.checkIn}</span>
              </h2>
              <br />
              <h2 className="font-semibold">
                Check Out: <span className="font-normal">{place.checkOut}</span>
              </h2>
              <br />
              <h2 className="font-semibold">
                Max Number of Guest:{' '}
                <span className="font-normal">{place.maxGuests}</span>
              </h2>
            </div>
            <div className="">
              <Booking placeProps={place} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
