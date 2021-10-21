import { useState, useEffect, Fragment } from "react";
import SingleFilmCard from "./SingleFilmCard";
import classes from "../css/ActorDetail.module.css";

const ActorDetail = ({ data }) => {
  const [actorMovies, setActorMovies] = useState([]);
  const [number, setNumber] = useState(8);

  const handleClick = () => {
    setNumber(number + 8);
  };

  useEffect(() => {
    // showing only 8 actors for the first render
    if (data.credits.cast) {
      const showing = data.credits.cast.slice(0, number);
      setActorMovies(showing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <Fragment>
      <div className={classes.moviesByActor}>
        {actorMovies.filter((movies) => movies.adult === false).map((movie) => (
          <SingleFilmCard key={movie.id} movie={movie} />
        ))}
      </div>
      {actorMovies && actorMovies.length < data.credits.cast.length && (
        <div className="centered">
          <button className="btn" onClick={handleClick}>
            Show More
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default ActorDetail;
