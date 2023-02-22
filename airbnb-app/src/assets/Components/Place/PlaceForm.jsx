import React from 'react';

export const PlaceForm = () => {
  return (
    <div>
      <form action="">
        <h2 htmlFor="title" className="text-2xl mt-4 font-medium">
          Title
        </h2>
        <p className="text-gray-500 text-sm">
          Title for your place, Should be short and catchy as in advertisement.
        </p>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title, Ex: My apartment name"
        />
        <h2 htmlFor="address" className="text-2xl mt-4 font-medium">
          Title
        </h2>
        <p className="text-gray-500 text-sm">Address to this place.</p>
        <input type="text" name="address" id="address" placeholder="Address" />
        <h2 htmlFor="photo" className="text-2xl mt-4 font-medium">
          Photo
        </h2>
        <p className="text-gray-500 text-sm">More = Better</p>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Add Using a link to your photo ...jpg"
          />
          <button className="bg-gray-200 px-4 rounded-2xl btn">
            Add &nbsp; Photo
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
          <button className="flex justify-center gap-2 border bg-transparent rounded-2xl p-8 text-3xl btn">
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
          </button>
        </div>
        <h2 htmlFor="description" className="text-2xl mt-4 font-medium">
          Description
        </h2>
        <p className="text-gray-500 text-sm">Describe your place.</p>
        <textarea className="" name="description" id="description" />
        <h2 htmlFor="description" className="text-2xl mt-4 font-medium">
          Perks
        </h2>
        <p className="text-gray-500 text-sm">
          Select all the perks of your place.
        </p>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4">
          <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>
            <span>WIFI</span>
          </label>
          <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>

            <span>Free Parking</span>
          </label>
          <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <span>TV</span>
          </label>
          <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
            <input type="checkbox" />
            <img
              src="../../../../public/Images/dog-training.svg"
              alt="pet"
              className="w-7 h-7"
            />
            <span>Pets</span>
          </label>
          <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
            <input type="checkbox" />
            <img
              src="../../../../public/Images/game.svg"
              alt="game"
              className="w-7 h-7"
            />
            <span>Games</span>
          </label>
          <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
            <input type="checkbox" />
            <img
              src="../../../../public/Images/door.svg"
              alt="door"
              className="w-7 h-7"
            />
            <span>Entrance</span>
          </label>
        </div>
        <h2 htmlFor="description" className="text-2xl mt-4 font-medium">
          Extra Info
        </h2>
        <p className="text-gray-500 text-sm">House Rules etc.</p>
        <textarea className="" name="description" id="description" />
        <h2 htmlFor="description" className="text-2xl mt-4 font-medium">
          Check in & out date, max Guests
        </h2>
        <p className="text-gray-500 text-sm">
          Add check in and out times, remember to have some time widows for
          cleanings the room between guests.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="">
            <h2 htmlFor="checkIn" className="text-xl mt-4 -mb-1 font-medium">
              Check In Time
            </h2>
            <input
              type="text"
              name="checkIn"
              id="checkIn"
              placeholder="12:00"
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
              placeholder="10:00"
            />
          </div>
          <div className="">
            <h2 htmlFor="guests" className="text-xl mt-4 -mb-1 font-medium">
              Max Number Of guests
            </h2>
            <input type="text" name="guests" id="guests" placeholder="12" />
          </div>
        </div>
        <button className="text-center primary my-4">Save</button>
      </form>
    </div>
  );
};
