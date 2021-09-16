import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchMoviesByActor } from "../functions/getItems";
import ActorDetail from "../components/ActorDetail";
import classes from "../css/ActorDetails.module.css";

const ActorsDetails = () => {
  const baseImgURL = "https://image.tmdb.org/t/p/w500";

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

  return (
    <div className={classes.actorDetailPage}>
      <div className={classes.actorDetail}>
        {data.profile_path ? (<div className={classes.profilImg}>
          <img src={`${baseImgURL}${data.profile_path}`} alt={data.name} />
        </div> ) : (
          <div className ={ classes.profilImg}>
          <img
            src={`https://via.placeholder.com/500x750?text=${data.name}`}
            alt={data.title}
          />
        </div>
        )}
        <div className={classes.actorInfo}>
          <div>
            <h3>{data.name}</h3>
            <p>{data.biography}</p>
            <p>
              {" "}
              <b>Place of Birth :</b> {data.place_of_birth}
            </p>
            <p>
              {" "}
              <b>Birthday :</b> {data.birthday}
            </p>
            <p>
              {" "}
              <b>Popularity :</b> {data.popularity}
            </p>
            <p></p>
          </div>
        </div>
      </div>

      <h3>{data.name}'s Movies</h3>
      {data && <ActorDetail data={data} />}
    </div>
  );
};

export default ActorsDetails;
