import React, { useEffect } from 'react';
import { PostsFeed } from 'components/APOD/PostsFeed';
import { useDispatch, useSelector } from 'react-redux';
import { ApodSlice } from 'store/slices';
import { Post, PostSkeleton } from 'components/APOD/Post';
import { Title } from 'components/APOD/Title';
import Loader from 'components/General/Loader/Loader';

export const MainPage = () => {
  const dispatch = useDispatch<any>();
  const posts = useSelector(ApodSlice.apodPosts);
  const isLoading = useSelector(ApodSlice.apodPostsIsLoading);

  const getNextPosts = () => dispatch(ApodSlice.getNextPostsAsync(18));

  useEffect(() => {
    if (!posts.length) {
      dispatch(ApodSlice.getNextPostsAsync(19));
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
          {/* <PostSkeleton /> */}
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
