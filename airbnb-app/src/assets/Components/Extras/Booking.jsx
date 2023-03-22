import React, { useState } from 'react';

export const Booking = ({ placeProps: place }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuest, setNumberOfGuest] = useState(1);

  const onCheckInBookingHandler = (event) => {
    setCheckIn(event.target.value);
  };
  const onCheckOutBookingHandler = (event) => {
    setCheckOut(event.target.value);
  };
  const onNumberOfGuestBookingHandler = (event) => {
    setNumberOfGuest(event.target.value);
  };

  return (
    <>
      <div className="p-4 border border-slate-300 shadow-md shadow-slate-400 rounded-2xl bg-slate-200">
        <div className="text-lg text-center">
          <h2 className="font-semibold">
            Price: <span className="font-normal">${place.price}/Per Night</span>
          </h2>
        </div>
        <div className="my-4 border border-gray-400 rounded-2xl">
          <div className="flex">
            <div className="p-4">
              <label htmlFor="checkIn">Check In: </label>
              <input
                type="date"
                name="checkIn"
                id="checkIn"
                value={checkIn}
                onChange={onCheckInBookingHandler}
              />
            </div>
            <div className="p-4 border-l border-gray-400">
              <label htmlFor="checkOut">Check Out: </label>
              <input
                type="date"
                name="checkOut"
                id="checkOut"
                onChange={onCheckOutBookingHandler}
                value={checkOut}
              />
            </div>
          </div>
          <div className="p-4 border-t border-gray-400">
            <label htmlFor="checkOut">Guest: </label>
            <input
              type="number"
              name="maxGuests"
              id="maxGuests"
              onChange={onNumberOfGuestBookingHandler}
              value={numberOfGuest}
            />
          </div>
        </div>

        <button className="primary">Book Now</button>
      </div>
    </>
  );
};
