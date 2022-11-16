import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout, APODLayout } from 'components/Layouts';
import { SignInPage, SignUpPage, MainPage as MainPageAuth } from 'pages/Auth';
import { FavouritesPage, MainPage, MyCommentsPage, PostPage } from 'pages/APOD';
import { AsteroidsLayout } from 'components/Layouts/AsteroidsLayout';

const AppRouter = () => (
  <Routes>
    {/* APOD */}
    <Route path='/apod/*' element={<APODLayout />}>
      <Route index element={<MainPage />} />
      <Route path='favourites' element={<FavouritesPage />} />
      <Route path='comments' element={<MyCommentsPage />} />
      <Route path='post/:id' element={<PostPage />} />
    </Route>

    {/* ASTEROIDS */}
    <Route path='/asteroids' element={<AsteroidsLayout />} />

    {/* AUTH  */}
    <Route path='/*' element={<AuthLayout />}>
      <Route index element={<MainPageAuth />} />
      <Route path='auth' element={<SignInPage />}/>
      <Route path='register' element={<SignUpPage />}/>
    
      {/* DEFAULT */}
      <Route path='*' element={<Navigate to='/apod' replace />} />
    </Route>

  </Routes>
);

export default AppRouter;
