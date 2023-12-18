import { useHttp } from 'components/hooks/useHttp';
// import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetchTrendingMovies().then(res => setMovies(res.results));
  // }, []);
  const [movies] = useHttp(fetchTrendingMovies);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const name = searchParams.get('name') || '';
  const getFilteredMovies = movies?.filter(movie =>
    movie.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div>
      <h2>Movies</h2>
      <div>
        <input
          value={name}
          onChange={e =>
            setSearchParams(e.target.value ? { name: e.target.value } : {})
          }
          placeholder="Enter movie name"
        />
        <button>Search</button>
      </div>
      <ul>
        {getFilteredMovies?.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={movie.id.toString()}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
