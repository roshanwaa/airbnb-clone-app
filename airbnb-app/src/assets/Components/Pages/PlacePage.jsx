import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Extras/Loading';
import { ErrorPage } from '../Extras/ErrorPage';

export const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    axios
      .get(`/user-places/${id}`)
      .then((response) => {
        setPlace(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
    return () => {};
  }, [id]);

  if (!place) {
    return '';
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-8">
          <h1>{place.title}</h1>
        </div>
      )}
    </>
  );
};
