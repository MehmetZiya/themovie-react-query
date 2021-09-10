import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleFilmCard from "../components/SingleFilmCard";
import PaginationButtons from "../components/PaginationButtons";
import { fetchTopList } from "../functions/getItems";



const TopList = () => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(["toplist", page], () => fetchTopList(page), {
    keepPreviousData: true,
  });
  
  return (
    <div>
      <h2>Top Rated Movies</h2>
      {isLoading && <div>Loading data</div>}
      {isError && <div>{error.message}</div>}

      <PaginationButtons isPreviousData={isPreviousData} data={data} page={page} setPage={setPage} />

      {data && (
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

export default TopList;
