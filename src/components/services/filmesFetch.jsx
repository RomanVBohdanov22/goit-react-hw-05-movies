import axios from 'axios';

const API_KEY = 'c20d992e26e4f0d24c347a36a85c7acc';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
axios.defaults.params = { api_key: API_KEY };

export const getMovieTrending = async () => {
  const response = await axios.get(`/trending/movie/week`);
  console.log(response);

  return response;
};

//https://pixabay.com/api/
/*axios.defaults.params = {
  key: API_KEY,
  image_type: `photo`,
  orientation: `horizontal`,
  per_page: PER_PAGE,
  safesearch: `true`,
};
*/
//let PER_PAGE = 12;
/*
export const getImages = async (query, currentPage) => {
  const { data } = await axios.get(`?q=${query}&page=${currentPage}`);

  return data;
};*/

/* API Key: c20d992e26e4f0d24c347a36a85c7acc */
/* https://api.themoviedb.org/3/movie/550?api_key=c20d992e26e4f0d24c347a36a85c7acc */
/* https://api.themoviedb.org/3/movie/400?api_key=c20d992e26e4f0d24c347a36a85c7acc */
/*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBkOTkyZTI2ZTRmMGQyNGMzNDdhMzZhODVjN2FjYyIsInN1YiI6IjY0NTU0NzU5NzEwODNhMDBlM2Y2ZmM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QffZw7Vr_Ul4cqQEDvXNhketX3RjlGUEi8XqjIFuOss'
  }
};
fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));*
  */
