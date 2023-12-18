import { useHttp } from 'components/hooks/useHttp';
// import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchTrendingMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  // const goBackRef = useRef(location.state?.from ?? '/');

  // const [movie, setMovie] = useState([null]);
  // useEffect(() => {
  //   fetchTrendingMovieById(movieId).then(res => setMovie(res));
  // }, [movieId]);
  const [movie] = useHttp(fetchTrendingMovieById, movieId);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!movie) {
    return <h1>Loading...</h1>;
  }
  const { original_title, poster_path, media_type, overview } = movie;

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div>
        <img
          src={
            poster_path
              ? `${`https://image.tmdb.org/t/p/w500` + poster_path}`
              : ''
          }
          alt={media_type}
          width="200px"
          height="300px"
        />
      </div>

      {/* {movie.poster_path === null ? (
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`}
              alt={movie.title}
            />
          ) : (
            <img
              src={`${`https://image.tmdb.org/t/p/w500` + movie.poster_path}`}
              alt={movie.title}
            />
          )} */}
      {/* <p>{movie.title}</p> */}

      <div>
        <h1 className="title">
          {original_title} ({new Date(movie.release_date).getFullYear()})
        </h1>
        <p>User Score: {movie.vote_average?.toFixed(1) * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres </h2>
        {movie.genres?.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
      <hr />

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />

      <Outlet />
    </div>
  );
};

export default MovieDetails;
