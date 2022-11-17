import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoBackIcon, UserSettingsIcon } from 'resources/icons';
import Logo from 'resources/UI/Logo';
import { HeaderButton } from './HeaderButton';
import css from './index.module.scss';

type TProps = {};

export const Header = ({}: TProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate(); 

  const goBack = () => navigate(-1);
  const buttonPlug = <div className={css.plug} />;

  return (
    <header className={css.header}>
      <div className={css.content}>
        { 
          pathname !== '/apod' 
          ? (
            <HeaderButton action={goBack}>
              <GoBackIcon />
            </HeaderButton>
          )
          : buttonPlug  
        }
        <Link to='/apod'>
          <Logo />
        </Link>
        <HeaderButton action={() => alert('This button will show user settings in future')}>
          <UserSettingsIcon />
        </HeaderButton>
      </div>
    </header>
  );
};
