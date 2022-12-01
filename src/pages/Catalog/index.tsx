import { Title } from 'components/APOD/Title';
import { CatalogCard } from 'components/General/CatalogCard';
import React from 'react';
import css from './index.module.scss';

type TProps = {};

export const CatalogPage = ({}: TProps) => {

  return (
    <div className={css.wrap}>
      <Title title='Activities' />
      <div className={css.catalog}>
        <CatalogCard 
          title='Astronomy Picture of the Day'
          description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.'
          imgPath={process.env.PUBLIC_URL + '/images/card-img-apod.jpg'}
          linkPath='/apod'
        />
        <CatalogCard 
          title='Near - Earth asteroids'
          description='NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth.'
          imgPath={process.env.PUBLIC_URL + '/images/card-img-asteroids.jpg'}
          linkPath='/asteroids'
        />
      </div>
    </div>
  );
};
