import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardLinkArrow } from 'resources/icons';
import css from './index.module.scss';

type TProps = {
  imgPath: string;
  title: string;
  description: string;
  linkPath: string;
};

export const CatalogCard = ({ imgPath, title, description, linkPath }: TProps) => {
  const navigate = useNavigate();
  const goLink = () => navigate(linkPath);

  return (
    <div className={css.wrap}>
      <div style={{ backgroundImage: `url(${imgPath})` }} className={css.img} />
      <div className={css.content}>
        <h3 className={css.title}>{ title }</h3>
        <p className={css.description}>{ description }</p>
      </div>

      <button className={css.button} onClick={goLink}>
        <CardLinkArrow />
      </button>
    </div>
  );
};
