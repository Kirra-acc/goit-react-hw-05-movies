import axios from 'axios';

const API_KEY = 'ef2a4e32ebd524f1e2095ff29b5d3d5e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const fetchMovies = async endpoint => {
//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     query: '',
//   });
//   const response = await axios.get(`${endpoint}?${params}`);
//   return response.data;
// };

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(data);
  return data.results;
};

export const fetchTrendingMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(data);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  console.log(data);
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return data.results;
};

export const fetchSearchedMovie = async inputValue => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: inputValue,
    },
  });
  return data.results;
};
