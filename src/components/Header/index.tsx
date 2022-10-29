import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'resources/UI/Logo';
import css from './index.module.scss';

type TProps = {};

export const Header = ({ children = null }: TProps & React.PropsWithChildren) => {
  const buttonPlug = <div className={css.plug} />;

  return (
    <header className={css.header}>
      <div className={css.content}>
        { children ? children : buttonPlug }
        <Link to='/apod'>
          <Logo />
        </Link>
        { buttonPlug }
      </div>
    </header>
  );
};
