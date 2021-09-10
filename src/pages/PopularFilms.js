import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleFilmCard from "../components/SingleFilmCard";
import PaginationButtons from "../components/PaginationButtons";
import { fetchPopularFilms } from "../functions/getItems";

const PopularFilms = () => {
  const [page, setPage] = useState(1);
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
        hasMore ={data?.next}
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
