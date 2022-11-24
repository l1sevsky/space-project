import React from 'react';
import { AuthorIcon, CalendarIcon, CommentsIcon, DislikeIcon, LikeIcon, ShareIcon } from 'resources/icons';
import { TApodPost } from 'store/slices/apod';
import { FeedElement } from '../FeedElement';
import css from './index.module.scss';

type TProps = {
  post: TApodPost;
};

export const Post = ({ post }: TProps) => {

  return (
    <div className={css.wrap}>
      <div className={css.postActionsBlock}>
        <button className={css.imageAction}>
          <FeedElement post={post} hasHoverDate={false} />
        </button>
        <div className={css.postActions}>
          <button>
            <ShareIcon />
          </button>
          <button>
            <LikeIcon />
          </button>
          <button>
            <DislikeIcon />
          </button>
          <button>
            <CommentsIcon />
          </button>
        </div>
      </div>

      <div className={css.postInfo}>
        <h3 className={css.postTitle}>{ post.title }</h3>
        <p className={css.postDescription}>{ post.explanation }</p>
        <div className={css.postMeta}>
          <div className={css.metaWrap}>
            <CalendarIcon />
            <span>{ post.date }</span>
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
