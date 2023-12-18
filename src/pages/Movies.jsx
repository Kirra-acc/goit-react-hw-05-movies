// import { useHttp } from 'components/hooks/useHttp';
import {
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { fetchSearchedMovie } from 'services/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie') || '';
  // const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getNewMovies() {
      try {
        const moviesDataNew = await fetchSearchedMovie(movie);
        setMovies(moviesDataNew);
      } catch (error) {
        console.log(error);
      }
    }
    getNewMovies();
  }, [movie]);
  const location = useLocation();

  const savedSearch = query => {
    query !== '' ? setSearchParams({ movie: query }) : setSearchParams({});
  };

  const onSubmit = e => {
    e.preventDefault();
    savedSearch(inputValue);
  };

  // const [movies, setMovies] = useHttp(fetchSearchedMovie, inputValue);

  return (
    <div>
      <div>
        <StyledForm onSubmit={onSubmit}>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            type="text"
          ></input>
          <button type="submit">Search</button>
        </StyledForm>
      </div>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

const StyledForm = styled.form`
  margin-top: 10px;
  input {
    width: 300px;
    height: 20px;
    border: 1px solid #b5b0b0;
    border-radius: 3px;
  }
  button {
    border: 1px solid #b5b0b0;
    height: 24px;
    border-radius: 3px;
  }
`;
