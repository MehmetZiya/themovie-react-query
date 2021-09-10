import { fetchMovieDetails } from "../functions/getItems";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Details from "../components/Details";

const MovieDetails = () => {
  const params = useParams();
  const movieId = params.id;
  console.log(movieId);

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

  // We can assume by this point that `isSuccess === true`
  return <div>{data && <Details data={data}/>}</div>;
};

export default MovieDetails;
