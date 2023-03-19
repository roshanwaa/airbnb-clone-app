import React from 'react';

export const Booking = ({ placeProps: place }) => {
  return (
    <>
      <div className="bg-gray-300 rounded-2xl p-4 shadow-lg duration-300">
        <div className="text-lg text-center">
          <h2 className="font-semibold">
            Price: <span className="font-normal">${place.price}/Per Night</span>
          </h2>
        </div>
        <div className="my-4 border border-slate-300 shadow-md duration-300 shadow-slate-400 rounded-2xl bg-slate-100">
          <div className="flex">
            <div className="p-4">
              <label htmlFor="checkIn">Check In: </label>
              <input type="date" name="checkIn" id="checkIn" />
            </div>
            <div className="p-4 border-l">
              <label htmlFor="checkOut">Check Out: </label>
              <input type="date" name="checkOut" id="checkOut" />
            </div>
          </div>
          <div className="p-4 border-t">
            <label htmlFor="checkOut">Guest: </label>
            <input type="number" value={1} name="maxGuests" id="maxGuests" />
          </div>
        </div>

        <button className="primary">Book Now</button>
      </div>
    </>
  );
};
