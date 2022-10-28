import React from 'react';
import { useParams } from 'react-router-dom';

export const PostPage = () => {
  const { id } = useParams();
  return (
    <p>Post {id} page APOD</p>
  )
};
