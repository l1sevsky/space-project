import React, { useEffect } from 'react';
import { Post, PostSkeleton } from 'components/APOD/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ApodSlice } from 'store/slices';
import css from './index.module.scss';


export const PostPage = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const { id } = useParams();
  const currentPost = useSelector(ApodSlice.apodCurrentPost);
  const isError = useSelector(ApodSlice.apodPostsIsError);

  useEffect(() => {
    if (id) dispatch(ApodSlice.getPostFromDateAsync(id));
    else navigate('/apod');
  }, [id]);

  useEffect(() => {
    if (isError) navigate('/apod');
  }, [isError]);

  return (
    <div className={css.wrap}>
      {
        !currentPost
        ? <PostSkeleton />
        : <Post post={currentPost} />
      }
    </div>
  )
};
