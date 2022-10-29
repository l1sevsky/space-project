import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';
import css from './index.module.scss';

export const APODLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
};