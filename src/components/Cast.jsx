// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { useHttp } from '../hooks/useHttp';

const Cast = () => {
  const { movieId } = useParams();

  // const [cast, setCast] = useState([]);
  // useEffect(() => {
  //   fetchMovieCast(movieId).then(res => setCast(res.cast));
  // }, [movieId]);
  const [cast] = useHttp(fetchMovieCast, movieId);

  // const { id, profile_path, name, character } = actor;
  return (
    <div>
      <ul>
        {cast?.map(actor => (
          <div key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `${`https://image.tmdb.org/t/p/w500` + actor.profile_path}`
                  : ''
              }
              alt={actor.profile_path}
              width="150px"
              height="200px"
            />

            <li>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
