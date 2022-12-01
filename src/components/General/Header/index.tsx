import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoBackIcon, AppCatalogIcon } from 'resources/icons';
import Logo from 'resources/UI/Logo';
import { HeaderButton } from './HeaderButton';
import css from './index.module.scss';

type TProps = {};

export const Header = ({}: TProps) => {
  const navigate = useNavigate(); 

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');

  return (
    <header className={css.header}>
      <div className={css.content}>
          <HeaderButton action={goBack}>
            <GoBackIcon />
          </HeaderButton> 
        <Link to='/apod'>
          <Logo />
        </Link>
        <HeaderButton action={goHome}>
          <AppCatalogIcon />
        </HeaderButton>
      </div>
    </header>
  );
};
