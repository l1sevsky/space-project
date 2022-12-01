import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout, APODLayout } from 'components/General/Layouts';
import { MainPage, PostPage } from 'pages/APOD';
import { AsteroidsLayout } from 'components/General/Layouts/AsteroidsLayout';

const AppRouter = () => (
  <Routes>
    {/* APOD */}
    <Route path='/apod/*' element={<APODLayout />}>
      <Route index element={<MainPage />} />
      <Route path='post/:id' element={<PostPage />} />
    </Route>

    {/* ASTEROIDS */}
    <Route path='/asteroids' element={<AsteroidsLayout />} />
    <Route path='*' element={<Navigate to='/apod' replace />} />

  </Routes>
);

export default AppRouter;
