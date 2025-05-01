import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [allMovies, setAllMovies] = useState<any[]>([]);
  
  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=db83b12bc505515fadbfb71e737900e2&language=en-US"
      );
      
      const data = await response.json();
      setMovies(data.results);
      setAllMovies(data.results);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  useEffect(() => {
    // Initial fetch when component mounts
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    if (search || releaseDate) {
      console.log("Fetching with:", search, releaseDate);
      fetchMovies(search, releaseDate).then((filteredMovies) => {
        console.log("Received movies:", filteredMovies);
        setMovies(filteredMovies);
      });
    } else {
      // When inputs are empty, show trending movies
      fetchTrendingMovies();
    }
  }, [search, releaseDate]);

  return (
    <div className="container">
      <h1 className="heading">Movie Search</h1>
      <div className="input-div">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year (e.g., 2023)"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className=""
        />
      </div>

      <div className="movie-display">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-img"
              />
            </div>
            <h2 className="p-3 text-lg font-semibold truncate">
              {movie.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;