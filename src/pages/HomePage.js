import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import GenreInput from "../components/GenreInput";
import { useUrlSearchParams } from "use-url-search-params";
import { fetchMoviesByGenre } from "../functions/getItems";
import SingleFilmCard from "../components/SingleFilmCard";
import PaginationButtons from "../components/PaginationButtons";
import classes from '../css/HomePage.module.css';

const HomePage = () => {
  const [genreId, setGenreId] = useState(28);
  const [ genreName, setGenreName ] = useState('Action');
  const [pageParams, setPageParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
  );
  const [page, setPage] = useState(pageParams.page);
  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ["genreMovies", genreId, page],
    () => fetchMoviesByGenre(genreId, page)
  );

  useEffect(() => {
    setPageParams({ ...pageParams, page });
  }, [page, pageParams, setPageParams]);

  if (isLoading) {
    return <span>Loading Movies...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <h2>Home Page</h2>
      <PaginationButtons
        isPreviousData={isPreviousData}
        data={data}
        page={page}
        setPage={setPage}
      />
      <GenreInput setGenreId={setGenreId} setGenreName ={ setGenreName } />
      <div>
          <h3 className ={ classes.genreName}>Discover {genreName} Movies...</h3>
      </div>
      {data?.results && (
        <div className="movieCard-Box">
          {data.results.map((movie) => (
            <SingleFilmCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
