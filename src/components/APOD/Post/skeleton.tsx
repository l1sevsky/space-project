import React from 'react';
import classNames from 'classnames';
import css from './index.module.scss';

import { Skeleton } from 'components/General/Skeleton';


export const PostSkeleton = () => {
  return (
    <div className={classNames(css.wrap, css.skeleton)}>
      <div className={css.postActionsBlock}>
        <button className={css.imageAction}>
          <Skeleton />
        </button>
      </div>

      <div className={css.postInfo}>
        <Skeleton className={css.postTitle} />
        <Skeleton className={css.postDescription} />
        <div className={css.postMeta}>
          <div className={css.metaWrap}>
            <Skeleton />
          </div>
          <div className={css.metaWrap}>
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}