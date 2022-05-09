import axios from 'axios';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const KEY = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';
export async function fetchEvents() {
  const response = await axios.get(`events?size=20&apikey=${KEY}`);
  // console.log(response.data);
  return response.data._embedded.events;
}
export async function fetchEventsByID(id) {
  const responseByID = await axios.get(`events/${id}?apikey=${KEY}`);
  // console.log(responseByID.data);
  return responseByID.data;
}

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '07e84016aeec599a5623106dff9619bb';

// async function fetchMoviesBySearch(query) {
//   const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
//   return await axios.get(`${url}`).then(response => response.data);
// }

// async function fetchTrendingMovies() {
//   const trendingURL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${1}`;
//   return await axios.get(`${trendingURL}`).then(response => response.data);
// }

// async function fetchMovieDetails(movieId) {
//   const detailsURL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
//   return await axios.get(`${detailsURL}`).then(response => response.data);
// }

// async function fetchMovieCast(movieId) {
//   const castURL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
//   return await axios.get(`${castURL}`).then(response => response.data);
// }

// async function fetchMoviesReviews(movieId) {
//   const reviewsURL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
//   return await axios.get(`${reviewsURL}`).then(response => response.data);
// }

// export {
//   fetchMoviesBySearch,
//   fetchTrendingMovies,
//   fetchMovieDetails,
//   fetchMovieCast,
//   fetchMoviesReviews,
// };

// // export const fetchAPI = async (search, page) => {
// //   const URL = 'https://pixabay.com/api/';
// //   const options = {
// //     params: {
// //       key: '25212904-bc289a80479625a5a070d2ccf',
// //       q: search,
// //       image_type: 'photo',
// //       orientation: 'horizontal',
// //       safesearch: true,
// //       page: page,
// //       per_page: 12,
// //     },
// //   };

// //   const response = await axios.get(URL, options);
// //   const mappedImages = response.data.hits.map(
// //     ({ id, largeImageURL, webformatURL }) => ({
// //       id,
// //       largeImageURL,
// //       webformatURL,
// //     })
// //   );

// //   if (response.data.total === 0) {
// //     return Promise.reject(new Error('Something get wrong!'));
// //   }
// //   return mappedImages;
// // };
