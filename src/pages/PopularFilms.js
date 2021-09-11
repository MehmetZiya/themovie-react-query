import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import SingleFilmCard from "../components/SingleFilmCard";
import PaginationButtons from "../components/PaginationButtons";
import { fetchPopularFilms } from "../functions/getItems";
import { useUrlSearchParams } from "use-url-search-params";

const PopularFilms = () => {
  const [pageParams, setPageParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
  );
  const [page, setPage] = useState(pageParams.page);
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(["popular", page], () => fetchPopularFilms(page), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setPageParams({ ...pageParams, page });
  }, [page, pageParams, setPageParams]);
 
  return (
    <div className="movieCard-box">
      <h2>Popular Movies</h2>
      {isLoading && <div>Loading data</div>}
      {isError && <div>{error.message}</div>}
      <PaginationButtons
        isPreviousData={isPreviousData}
        data={data}
        page={page}
        setPage={setPage}
      />
      {data?.results && (
        <div className="movieCard-Box">
          {data.results.map((movie) => (
            <SingleFilmCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};

export default PopularFilms;
