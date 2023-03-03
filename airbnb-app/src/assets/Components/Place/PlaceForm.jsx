import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AccountNavigation } from '../Extras/AccountNavigation';
import { Perks } from './Perks';

import { PhotosUploader } from './PhotosUploader';

export const PlaceForm = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(Number);
  const [redirectToPlaceList, setRedirectToPlaceList] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/' + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
    });

    return () => {};
  }, [id]);

  const inputHeader = (headerText) => {
    return (
      <h2 htmlFor="title" className="text-2xl mt-4 font-medium">
        {headerText}
      </h2>
    );
  };
  const inputDescription = (descriptionText) => {
    return <p className="text-gray-500 text-sm">{descriptionText}</p>;
  };
  const preInput = (header, descriptionText) => {
    return (
      <div>
        {inputHeader(header)}
        {inputDescription(descriptionText)}
      </div>
    );
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const extraInfoCHangeHandler = (event) => {
    setExtraInfo(event.target.value);
  };

  const checkInChangeHandler = (event) => {
    setCheckIn(event.target.value);
  };
  const checkOutChangeHandler = (event) => {
    setCheckOut(event.target.value);
  };
  const guestChangeHandler = (event) => {
    setMaxGuests(event.target.value);
  };
  // if (!!loading) {
  //   return <Loading />;
  // }
  const submitAddNewPlaceHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    };

    if (id) {
      // Update
      await axios
        .put('/places', { id, ...placeData })
        .then((response) => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
      setRedirectToPlaceList(true);
    } else {
      // New Place
      await axios
        .post('/places', placeData)
        .then((response) => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });

      setRedirectToPlaceList(true);
    }
  };

  if (redirectToPlaceList) {
    return <Navigate to={'/account/places'} />;
  }

  return (
    <div>
      <AccountNavigation />
      <form action=" " onSubmit={submitAddNewPlaceHandler}>
        {preInput(
          'Title',
          'Title for your place, Should be short and catchy for advertisement.'
        )}

        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          placeholder="Title, Ex: My apartment name"
        />

        {preInput('Address', 'Address to this place.')}

        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={addressChangeHandler}
          placeholder="Address"
        />
        {preInput('Photo', 'More = Better')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput('Description', 'Describe your place.')}

        <textarea
          className=""
          name="description"
          id="description"
          value={description}
          onChange={descriptionChangeHandler}
        />

        {preInput('Perks', 'Select all the perks of your place.')}

        <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        {preInput('Extra Info', 'House Rules etc.')}
        <textarea
          className=""
          name="extraInfo"
          id="extraInfo"
          value={extraInfo}
          onChange={extraInfoCHangeHandler}
        />

        {preInput(
          'Check in & out date, max Guests',
          'Add check in and out times, remember to have some time widows for cleanings the room between guests.'
        )}

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="">
            <h2 htmlFor="checkIn" className="text-xl mt-4 -mb-1 font-medium">
              Check In Time
            </h2>
            <input
              type="text"
              name="checkIn"
              id="checkIn"
              value={checkIn}
              onChange={checkInChangeHandler}
              placeholder="e.g. 12:00"
            />
          </div>
          <div className="">
            <h2 htmlFor="checkOut" className="text-xl mt-4 -mb-1 font-medium">
              Check Out Time
            </h2>
            <input
              type="text"
              name="checkOut"
              id="checkOut"
              value={checkOut}
              onChange={checkOutChangeHandler}
              placeholder="e.g. 10:00"
            />
          </div>
          <div className="">
            <h2 htmlFor="guests" className="text-xl mt-4 -mb-1 font-medium">
              Max Number Of guests
            </h2>
            <input
              type="number"
              name="guests"
              id="guests"
              value={maxGuests}
              onChange={guestChangeHandler}
            />
          </div>
        </div>
        <button className="text-center primary my-4 btn">Save</button>
      </form>
    </div>
  );
};

// 'Cascadia Code', Consolas, 'Courier New', monospace
