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

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      goit-react-hw-05-movies
    </div>
  );
};
