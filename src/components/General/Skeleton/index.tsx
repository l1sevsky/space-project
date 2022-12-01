import React from 'react';
import classNames from 'classnames';
import css from './index.module.scss';

type TProps = {
  className?: string;
};

export const Skeleton = ({ className = '' }: TProps) => {

  return (
    <div className={classNames(css.skeleton, className)}></div>
  );
};
