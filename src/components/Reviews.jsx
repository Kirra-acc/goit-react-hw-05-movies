// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { useHttp } from './hooks/useHttp';

export const Reviews = () => {
  const { movieId } = useParams();

  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   fetchMovieReviews(movieId).then(res => setReviews(res));
  // }, [movieId]);
  const [reviews] = useHttp(fetchMovieReviews, movieId);

  if (reviews?.length > 0) {
    return (
      <div>
        <ul>
          {reviews?.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <p>We don't have reviews for this movie.</p>;
  }
};

export default Reviews;
