import { fetchMovieDetails } from "../functions/getItems";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import MovieDetail from "../components/MovieDetail";

const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;
  

  const { isLoading, isError, data, error } = useQuery(
    ["movie_details", movieId],
    () => fetchMovieDetails(movieId)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <div>{data && <MovieDetail data={data}/>}</div>;
};

export default MovieDetails;
