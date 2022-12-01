import React, { useEffect } from 'react';
import { PostsFeed } from 'components/APOD/PostsFeed';
import { useDispatch, useSelector } from 'react-redux';
import { ApodSlice } from 'store/slices';
import { Post } from 'components/APOD/Post';
import { Title } from 'components/APOD/Title';
import Loader from 'components/General/Loader/Loader';

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
    {
      !!posts.length
      ? (
        <>
          <Title title="Daily photo" />
          <Post post={posts[0]}/>
          <PostsFeed 
            posts={posts.slice(1)} 
            title='Early photos' 
            observerAction={getNextPosts} 
            isLoading={isLoading} 
          />
        </>
      )
      : (
        <Loader />
      )
    }
    </>
  );
};
