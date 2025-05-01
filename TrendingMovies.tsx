// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Load API key from .env
// const API_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;

// interface Movie {
//   id: number;
//   title?: string;
//   name?: string;
//   poster_path: string;
//   release_date?: string;
//   first_air_date?: string;
// }

// const TrendingMovies = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(API_URL);
//         console.log("API Response:", response.data); // Debugging

//         if (response.data && response.data.results.length > 0) {
//           setMovies(() => [...response.data.results]); // Ensure re-rendering
//           console.log("Movies state updated:", response.data.results);
//         } else {
//           setError("No trending movies available");
//         }
//       } catch (err) {
//         setError("Failed to fetch movies. Please try again.");
//         console.error("API Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrendingMovies();
//   }, []); // Fetches only once when the page loads

//   if (loading) return <div className="text-center p-4">Loading trending movies...</div>;
//   if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Trending Movies & TV Shows</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {movies.map((movie) => (
//           <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
//               alt={movie.title || movie.name}
//               className="w-full h-96 object-cover"
//               loading="lazy"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2 truncate">
//                 {movie.title || movie.name}
//               </h2>
//               <p className="text-gray-600">
//                 Released: {movie.release_date || movie.first_air_date || "N/A"}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrendingMovies;
