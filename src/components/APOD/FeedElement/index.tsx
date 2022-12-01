import React, { useEffect, useState } from 'react';
import { getDateParts } from 'resources/helpers';
import { TApodPost } from 'store/slices/apod';
import { Skeleton } from 'components/General/Skeleton';
import css from './index.module.scss';

type TProps = {
  post: TApodPost,
  hasHoverDate?: boolean;
};

export const FeedElement = ({ post, hasHoverDate = true }: TProps) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  let imageSrc: string;
  const dateParts = getDateParts(post.date);

  if (post.media_type === 'image') imageSrc = post.url;
  else if (post.thumbnail_url.length) imageSrc = post.thumbnail_url;
  else imageSrc = process.env.PUBLIC_URL + '/images/nasaActivityPlug.png';

  return (
    <>
      <img src={imageSrc} onLoad={() => setShowSkeleton(false)} hidden={showSkeleton} />
      {
        showSkeleton && <Skeleton />
      }
      {
        !showSkeleton && hasHoverDate &&
        (
          <div className={css.date}>
            <p className={css.day}>{ dateParts.day }</p>
            <p className={css.monthYear}>{ `${dateParts.month} ${dateParts.year}` }</p>
          </div>
        )
      }
    </>
  );
};
