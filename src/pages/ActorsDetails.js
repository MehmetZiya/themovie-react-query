import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchMoviesByActor } from "../functions/getItems";
import ActorDetail from "../components/ActorDetail";

const ActorsDetails = () => {
  const params = useParams();
  const actorId = params.actorId;
  const { isLoading, isError, data, error } = useQuery(
    ["movies_byActor", actorId],
    () => fetchMoviesByActor(actorId)
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (<div>
      <div><h3>Actors Page</h3></div>
      <h2>{data.name}</h2>
      {data && <ActorDetail data={data}/>}
      </div>);
};

export default ActorsDetails;
