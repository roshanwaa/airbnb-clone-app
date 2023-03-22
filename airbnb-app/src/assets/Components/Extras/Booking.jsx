import React, { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';

export const Booking = ({ placeProps: place }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingMobileNo, setBookingMobileNo] = useState('');

  const onCheckInBookingHandler = (event) => {
    setCheckIn(event.target.value);
  };
  const onCheckOutBookingHandler = (event) => {
    setCheckOut(event.target.value);
  };
  const onNumberOfGuestBookingHandler = (event) => {
    setNumberOfGuest(event.target.value);
  };
  const onNameBookingHandler = (event) => {
    setBookingName(event.target.value);
  };
  const onEmailBookingHandler = (event) => {
    setBookingEmail(event.target.value);
  };
  const onMobileBookingHandler = (event) => {
    setBookingMobileNo(event.target.value);
  };

  let numOfNights = 0;
  if (checkIn && checkOut) {
    numOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

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
          {numOfNights > 0 && (
            <div className="p-4 border-t border-gray-400">
              <label htmlFor="checkOut">Name: </label>
              <input
                type="text"
                name="name"
                id="newName"
                onChange={onNameBookingHandler}
                value={bookingName}
                placeholder="Enter Your Name"
              />
              <label htmlFor="checkOut">Email: </label>
              <input
                type="email"
                name="email"
                id="newEmail"
                onChange={onEmailBookingHandler}
                value={bookingEmail}
                placeholder="Enter Your Email"
              />
              <label htmlFor="checkOut">Phone Number: </label>
              <input
                type="tel"
                name="tel"
                id="newTel"
                onChange={onMobileBookingHandler}
                value={bookingMobileNo}
                placeholder="Enter Your Phone Number"
              />
            </div>
          )}
        </div>

        <button className="primary">
          Book Now
          {numOfNights > 0 && <span> ${numOfNights * place.price}</span>}
        </button>
      </div>
    </>
  );
};
