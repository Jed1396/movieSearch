import './App.css';
import { useEffect, useState } from 'react';
import MovieSearch from './MovieSearch'



const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  const SearchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=96995c81`)
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(() => {
    SearchMovies('')
  }, [])



  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src='/gp.svg'
          alt="search"
          onClick={() => SearchMovies(searchTerm)}
        />
      </div>


      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieSearch movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>



  );
}

export default App;


