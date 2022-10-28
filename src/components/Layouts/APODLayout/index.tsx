import React from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom';

export const APODLayout = () => {
  return (
    <>
      <div>APOD layout</div>
      <nav>
        <Link to='/apod'>Главная</Link>
        <Link to='/apod/post/5'>Пост 5</Link>
        <Link to='/apod/favourites'>Понравившиеся</Link>
        <Link to='/apod/comments'>Мои комментарии</Link>
        <Link to='/auth'>Войти</Link>
        <Link to='/auth/afefhaoef'>Битая ссылка на ауф</Link>
      </nav>

      <Outlet />
    </>
  )
};