import React, { useEffect } from 'react';
import { PostsFeed } from 'components/APOD/PostsFeed';
import { useDispatch, useSelector } from 'react-redux';
import { ApodSlice } from 'store/slices';

export const MainPage = () => {
  const dispatch = useDispatch<any>();
  const posts = useSelector(ApodSlice.apodPosts);
  const isLoading = useSelector(ApodSlice.apodPostsIsLoading);

  const getNextPosts = () => dispatch(ApodSlice.getNextPostsAsync(12));

  useEffect(() => {
    if (!posts.length) {
      dispatch(ApodSlice.getNextPostsAsync(12));
    }
  }, []);


  return (
    <>
      <PostsFeed posts={posts} />
      { isLoading && <p style={{'color': 'steelblue', 'margin': '10px 0'}}>Loading...</p> }
      <button onClick={getNextPosts} style={{'margin': '40px 0', 'padding': 5}}>Get next posts</button>
    </>
  )
};
