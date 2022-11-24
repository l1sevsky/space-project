import React from 'react';
import { getDateParts } from 'resources/helpers';
import { PlayIcon } from 'resources/icons';
import { TApodPost } from 'store/slices/apod';
import css from './index.module.scss';

type TProps = {
  post: TApodPost,
};

export const FeedElement = ({ post }: TProps) => {
  const dateParts = getDateParts(post.date);

  return (
    <>
      {
        post.media_type === 'image'
        ? <img src={post.url} />
        : !post.thumbnail_url.length
          ? <img src={process.env.PUBLIC_URL + '/images/nasaActivityPlug.png'} />
          : (
              <>
                <img src={post.thumbnail_url} />
                <div className={css.playIconWrap}>
                  <PlayIcon />
                </div>
              </>
            )
      }
      <div className={css.date}>
        <p className={css.day}>{ dateParts.day }</p>
        <p className={css.monthYear}>{ `${dateParts.month} ${dateParts.year}` }</p>
      </div>
    </>
  );
};
