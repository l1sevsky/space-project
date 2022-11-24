import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import css from './index.module.scss';

import { TApodPost } from 'store/slices/apod';
import { Title } from 'components/APOD/Title';
import { PostsFeedSwitch } from 'components/APOD/PostsFeedSwitch';
import { FeedElement } from './FeedElement';


type TProps = {
  posts: TApodPost[],
};


export const PostsFeed = ({ posts }: TProps) => {
  const [onFeedRow, setOnFeedRow] = useState<1 | 2 | 3>(3);

  return (
    <>
      <Title title='Early photos'>
        <PostsFeedSwitch currentValue={onFeedRow} setter={setOnFeedRow} />
      </Title>
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
    </>
  );
};
