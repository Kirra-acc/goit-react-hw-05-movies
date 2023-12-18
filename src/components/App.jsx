import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          
          <Route path="/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};