import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
      <div>Auth layout</div>
      <nav>
        <Link to='/auth'>Авторизация</Link>
        <Link to='/register'>Регистрация</Link>
        <Link to='/apod' >APOD</Link>
      </nav>
      <Outlet />
    </>
  )
}