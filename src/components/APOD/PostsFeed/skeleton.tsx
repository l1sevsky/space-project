import React from 'react';
import classnames from 'classnames';
import css from './index.module.scss';

import { Title } from 'components/APOD/Title';
import { Skeleton } from 'components/General/Skeleton';


type TProps = {
  title?: string;
  onRow?: 2 | 3;
  rows?: number;
};


export const PostsFeedSkeleton = ({ title = '', onRow = 3, rows = 4 }: TProps) => {
  return (
    <>
      { !!title && <Title title={title} /> }
      <div className={classnames(css.feed, css[`onRow${onRow}`])}>
        {
          Array(onRow * rows).fill(1).map((_, i) => (
              <div key={i} className={css.postPhoto}>
                <Skeleton />
              </div>
            )
          )
        }
      </div>
    </>
  );
};
