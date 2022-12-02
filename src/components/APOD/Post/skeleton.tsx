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
        <h3 className={css.postTitle}>
          <Skeleton />
        </h3>
        <p className={css.postDescription}>
          <Skeleton />
        </p>
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