import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { APODLayout } from 'components/General/Layouts';
import { MainPage, PostPage } from 'pages/APOD';
import { CatalogPage } from 'pages/Catalog';
import { AsteroidsLayout } from 'components/General/Layouts/AsteroidsLayout';

const AppRouter = () => (
  <Routes>
    {/* ASTEROIDS */}
    <Route path='/asteroids' element={<AsteroidsLayout />} />

    {/* APOD */}
    <Route path='/' element={<APODLayout />}>
      <Route index element={<CatalogPage />} />
      <Route path='apod' element={<MainPage />} />
      <Route path='apod/:id' element={<PostPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>

  </Routes>
);

export default AppRouter;
