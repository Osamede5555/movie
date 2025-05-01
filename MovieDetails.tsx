import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/api";
import "./Home.css";

const MovieDetails = () => {
  const { id } = useParams();
  interface Movie {
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
  }

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovieDetails(id!).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;
