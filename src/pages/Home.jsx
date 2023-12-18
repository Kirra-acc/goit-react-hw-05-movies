import { useHttp } from 'components/hooks/useHttp';
// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetchTrendingMovies().then(res => setMovies(res.results));
  // }, []);
  const [movies] = useHttp(fetchTrendingMovies);

  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
