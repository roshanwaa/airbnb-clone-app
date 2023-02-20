import React from 'react';

export const PlaceForm = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="title" className="text-2xl mt-4 font-medium">
          Title
        </label>
        <p className="text-gray-500 text-sm">
          Title for your place, Should be short and catchy as in advertisement
        </p>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title, Ex: My apartment name"
        />
        <label htmlFor="address" className="text-2xl mt-4 font-medium">
          Title
        </label>
        <p className="text-gray-500 text-sm">Address to this place</p>
        <input type="text" name="address" id="address" placeholder="Address" />
        <label htmlFor="photo" className="text-2xl mt-4 font-medium">
          Photo
        </label>
        <p className="text-gray-500 text-sm">More = Better</p>
        <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        
          <button className="border bg-transparent rounded-2xl p-8 text-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 btn rounded-full text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
