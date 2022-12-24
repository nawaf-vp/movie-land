import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies([]);
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);/* setMovies function is search movies from the api */
  };

  return (
    <div className="app">

      <h1>MovieLand</h1>
{/* movie search container */}
      <div className="search">
        <input
          value={searchTerm} /* set value as searchterm state */
          onChange={(e) => setSearchTerm(e.target.value)} /* e is a event */
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}/* when clicking the search icon .calls searchMovies and
                                                       props as search term */
        />
      </div>

{/* movies showing container */}
      {movies?.length > 0 ? (
        <div className="container">{/* loads when movies search  */} 
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">{/* show when no movies is to show  */}
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;