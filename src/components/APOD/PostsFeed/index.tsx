import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import css from './index.module.scss';

import { TApodPost } from 'store/slices/apod';
import { Title } from 'components/APOD/Title';
import { PostsFeedSwitch } from 'components/APOD/PostsFeedSwitch';
import { FeedElement } from 'components/APOD/FeedElement';
import { Post, PostSkeleton } from 'components/APOD/Post';
import { PostsFeedSkeleton } from './skeleton';


type TProps = {
  posts: TApodPost[],
  title: string,
  observerAction: () => void;
  isLoading: boolean;
};


export const PostsFeed = ({ posts, title, observerAction, isLoading }: TProps) => {
  const [onFeedRow, setOnFeedRow] = useState<1 | 2 | 3>(3);

  const onViewChanged = (isLoading: boolean) =>
    (inView: boolean, entry: IntersectionObserverEntry) => {
      if (inView && entry.isIntersecting && !isLoading) observerAction();
    };

  const observerElement = (isLoading: boolean) => (
    <InView threshold={0} onChange={onViewChanged(isLoading)}>
      {({ ref }) => (
        <>
          <div ref={ref} />
          {
            onFeedRow === 1
            ? <PostSkeleton />
            : <PostsFeedSkeleton rows={1} onRow={onFeedRow} />
          }
        </>
      )}
    </InView>
  );

  return (
    <>
      <Title title={title}>
        <PostsFeedSwitch currentValue={onFeedRow} setter={setOnFeedRow} />
      </Title>
      {
        onFeedRow === 1
        ? (
          posts.map((post, i) => (
            <Post post={post} key={i} />
          )
        )
        )
        : (
          <div className={classnames(css.feed, css[`onRow${onFeedRow}`])}>
            {
              posts.map((post, i) => (
                  <Link key={i} className={css.postPhoto} to={post.date}>
                    <FeedElement post={post} />
                  </Link>
                )
              )
            }
          </div>
        )
      }
      {
        !!posts.length && observerElement(isLoading)
      }
    </>
  );
};

export { PostsFeedSkeleton } from './skeleton';
