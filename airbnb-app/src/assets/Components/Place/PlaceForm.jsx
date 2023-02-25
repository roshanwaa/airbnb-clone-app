import axios from 'axios';
import React, { useState } from 'react';
import { Perks } from '../Extras/Perks';
export const PlaceForm = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(Number);

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
  const photoLinkChangeHandler = (event) => {
    setPhotoLink(event.target.value);
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

  const addPhotoByLinkHandler = async (event) => {
    event.preventDefault();
    const { data: fileName } = await axios.post('/upload-by-Link', {
      link: photoLink,
    });
    setAddedPhotos((preValue) => {
      return [...preValue, fileName];
    });
    setPhotoLink('');
  };

  const uploadChangeHandler = (event) => {
    const files = event.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }

    data.set('photos[]', files);
    axios
      .post('/upload', data, {
        header: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        const { data: fileNames } = response;
        setAddedPhotos((preValue) => {
          return [...preValue, ...fileNames];
        });
      });
  };

  return (
    <div>
      <form action="">
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

        <div className="flex gap-2 mt-2">
          <input
            type="text"
            name="photo"
            id="photo"
            value={photoLink}
            onChange={photoLinkChangeHandler}
            placeholder="Add Using a link to your photo ...jpg"
          />
          <button
            className="bg-gray-200 px-4 w-32 rounded-2xl btn"
            onClick={addPhotoByLinkHandler}
          >
            Add Photo
          </button>
        </div>
        <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 ">
          {addedPhotos.length > 0 &&
            addedPhotos.map((link) => (
              <div className="h-32 flex">
                <img
                  className="rounded-3xl w-full object-cover"
                  src={'http://127.0.0.1:4000/uploads/' + link}
                  alt=""
                />
              </div>
            ))}
          <label className="flex h-32 cursor-pointer items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-3xl btn">
            <input
              className="hidden"
              type="file"
              name="file"
              id="file"
              multiple
              onChange={uploadChangeHandler}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload
          </label>
        </div>
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
