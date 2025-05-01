import axios from "axios";

const API_KEY = "db83b12bc505515fadbfb71e737900e2";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = "", releaseDate = "") => {
  let url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  
  if (releaseDate) {
    url += `&primary_release_year=${releaseDate}`;
  }
  console.log(`Fetching movies with URL: ${url}`);

  const response = await axios.get(url);
  console.log(response.data);
  return response.data.results;
};

export const fetchMovieDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};
