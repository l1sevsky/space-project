import React, { useState } from 'react';
import { getDateParts, getPostUrlsForType } from 'resources/helpers';
import { TApodPost } from 'store/slices/apod';
import { Skeleton } from 'components/General/Skeleton';
import css from './index.module.scss';

type TProps = {
  post: TApodPost,
  hasHoverDate?: boolean;
};

export const FeedElement = ({ post, hasHoverDate = true }: TProps) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const dateParts = getDateParts(post.date);
  const { showUrl } = getPostUrlsForType(post);

  return (
    <>
      <img src={showUrl} onLoad={() => setShowSkeleton(false)} hidden={showSkeleton} />
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
