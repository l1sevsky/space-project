import React, { useEffect } from 'react';
import { PostsFeed } from 'components/APOD/PostsFeed';
import { useDispatch, useSelector } from 'react-redux';
import { ApodSlice } from 'store/slices';
import { Post } from 'components/APOD/Post';
import { Title } from 'components/APOD/Title';

export const MainPage = () => {
  const dispatch = useDispatch<any>();
  const posts = useSelector(ApodSlice.apodPosts);
  const isLoading = useSelector(ApodSlice.apodPostsIsLoading);

  const getNextPosts = () => dispatch(ApodSlice.getNextPostsAsync(12));

  useEffect(() => {
    if (!posts.length) {
      dispatch(ApodSlice.getNextPostsAsync(13));
    }
  }, []);


  return (
    <>
      <Title title="Daily photo" />
      {!!posts.length && <Post post={posts[0]}/>}
      <PostsFeed posts={posts.slice(1)} />
      { isLoading && <p style={{'color': 'steelblue', 'margin': '10px 0'}}>Loading...</p> }
      <button onClick={getNextPosts} style={{'margin': '40px 0', 'padding': 5}}>Get next posts</button>
    </>
  )
};
