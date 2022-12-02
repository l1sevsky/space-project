import React, { useState } from 'react';
import { getDateParts } from 'resources/helpers';
import { AuthorIcon, CalendarIcon } from 'resources/icons';
import { TApodPost } from 'store/slices/apod';
import { FeedElement } from 'components/APOD/FeedElement';
import css from './index.module.scss';
import { useBreakPoint } from 'resources/hooks/useBreakPoint';

type TProps = {
  post: TApodPost;
};

export const Post = ({ post }: TProps) => {
  const [showAllDescription, setShowAllDescription] = useState(false);
  const oneColumnVersion = useBreakPoint(800); 

  const dateParts = getDateParts(post.date);

  const showMore = () => setShowAllDescription(true);
  

  return (
    <div className={css.wrap}>
      <div className={css.postActionsBlock}>
        <button className={css.imageAction}>
          <FeedElement post={post} hasHoverDate={false} />
        </button>
      </div>

      <div className={css.postInfo}>
        <h3 className={css.postTitle}>
          { post.title }
        </h3>
        <p className={css.postDescription}>
          {
            !oneColumnVersion || showAllDescription || post.explanation.length < 70
            ? post.explanation
            : (
              <>
                { post.explanation.slice(0, 70).concat('...  ') }
                <button className={css.btnShowMore} onClick={showMore}>Show more</button>
              </>
            )
          }
        </p>
        <div className={css.postMeta}>
          <div className={css.metaWrap}>
            <CalendarIcon />
            <span>{ `${dateParts.day} ${dateParts.month} ${dateParts.year}` }</span>
          </div>
          {
            !!post.copyright &&
            (
              <div className={css.metaWrap}>
                <AuthorIcon />
                <span>{ post.copyright }</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};


export { PostSkeleton } from './skeleton';
