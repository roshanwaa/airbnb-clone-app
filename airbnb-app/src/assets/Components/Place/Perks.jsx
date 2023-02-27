import React from 'react';

export const Perks = ({ selected, onChange }) => {
  const checkBoxHandler = (event) => {
    const { checked, name } = event.target;
    // console.log(checked, name);

    if (checked) {
      //   console.log({ ...selected });
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };

  return (
    <>
      <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
        <input type="checkbox" name="wifi" onChange={checkBoxHandler} />
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
        <input type="checkbox" name="parking" onChange={checkBoxHandler} />
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
        <input type="checkbox" name="tv" onChange={checkBoxHandler} />
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
        <input type="checkbox" name="pets" onChange={checkBoxHandler} />
        <img
          src="../../../../public/Images/dog-training.svg"
          alt="pet"
          className="w-7 h-7"
        />
        <span>Pets</span>
      </label>
      <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
        <input type="checkbox" name="games" onChange={checkBoxHandler} />
        <img
          src="../../../../public/Images/game.svg"
          alt="game"
          className="w-7 h-7"
        />
        <span>Games</span>
      </label>
      <label className="border border-slate-600 p-4 flex rounded-2xl gap-3 items-center cursor-pointer">
        <input type="checkbox" name="entrance" onChange={checkBoxHandler} />
        <img
          src="../../../../public/Images/door.svg"
          alt="door"
          className="w-7 h-7"
        />
        <span>Entrance</span>
      </label>
    </>
  );
};
