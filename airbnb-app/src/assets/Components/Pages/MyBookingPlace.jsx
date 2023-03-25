import React from 'react';
import { useParams } from 'react-router-dom';

export const MyBookingPlace = () => {
  const { id } = useParams();
  
  return <div>MyBookingPlace: {id}</div>;
};
