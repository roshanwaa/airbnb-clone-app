import axios from 'axios';
import React, { useState } from 'react';

export const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState('');

  const photoLinkChangeHandler = (event) => {
    setPhotoLink(event.target.value);
  };
  const addPhotoByLinkHandler = async (event) => {
    event.preventDefault();
    const { data: fileName } = await axios.post('/upload-by-Link', {
      link: photoLink,
    });
    onChange((preValue) => {
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
        onChange((preValue) => {
          return [...preValue, ...fileNames];
        });
      });
  };
  return (
    <>
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
          className="bg-gray-200 px-4 w-32 rounded-2xl hover:text-white hover:bg-rose-500 duration-300 hover:scale-105"
          onClick={addPhotoByLinkHandler}>
          Add Photo
        </button>
      </div>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 ">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 flex" key={link}>
              <img
                className="rounded-3xl w-full object-cover duration-300 hover:scale-105"
                src={'http://127.0.0.1:4000/uploads/' + link}
                alt=""
              />
            </div>
          ))}
        <label className="flex h-32 cursor-pointer items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-3xl hover:text-white hover:bg-rose-500 duration-300 hover:scale-105">
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
            className="w-9 h-9">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
};
