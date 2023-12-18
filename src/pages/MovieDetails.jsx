import { useHttp } from 'components/hooks/useHttp';
import { Suspense, useRef } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

// import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchTrendingMovieById } from 'services/api';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  // const goBackRef = useRef(location.state?.from ?? '/');

  // const [movie, setMovie] = useState([null]);
  // useEffect(() => {
  //   fetchTrendingMovieById(movieId).then(res => setMovie(res));
  // }, [movieId]);
  const [movie] = useHttp(fetchTrendingMovieById, movieId);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/movies');

  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

  if (!movie) {
    return <h1>Loading...</h1>;
  }
  const { original_title, poster_path, media_type, overview } = movie;

  return (
    <>
      <div>
        <StyledBtn onClick={handleGoBack}>
          <FaLongArrowAltLeft />
          Go back
        </StyledBtn>
      </div>
      <StyledMovie>
        <div>
          <img
            src={
              poster_path
                ? `${`https://image.tmdb.org/t/p/w500` + poster_path}`
                : ''
            }
            alt={media_type}
            width="300px"
            height="450px"
          />
        </div>
        <div>
          <h1 className="title">
            {original_title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <p>User Score: {movie.vote_average?.toFixed(1) * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <StyledGenresTitle>Genres </StyledGenresTitle>
          <StyledGenres>
            {movie.genres?.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </StyledGenres>
        </div>
      </StyledMovie>

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

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

const StyledMovie = styled.div`
  display: flex;
  /* align-items: center; */
  background-color: white;
  gap: 20px;
`;
const StyledGenresTitle = styled.h2`
  margin: 21px auto;
`;
const StyledGenres = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledBtn = styled.button`
  display: flex;
  gap: 3px;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
