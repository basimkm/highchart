import React from 'react';
import { useParams } from 'react-router-dom';

const SingleView = () => {
  const { id } = useParams();
  console.log(id);
  return <div>SingleView</div>;
};

export default SingleView;
