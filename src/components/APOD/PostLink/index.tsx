import React from 'react';
import { ShareIcon } from 'resources/icons';
import css from './index.module.scss';

type TProps = {
  text: string;
  url: string;
};

export const PostLink = ({ text, url }: TProps) => {

  return (
    <a className={css.wrap} href={url}>
      <ShareIcon />
      <span className={css.text}>
        { text }
      </span>
    </a>
  );
};
