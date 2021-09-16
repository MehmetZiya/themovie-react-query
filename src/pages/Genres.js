import { Fragment} from "react";
import { useQuery } from "react-query";
import { fetchGenres } from "../functions/getItems";

import classes from "../css/Genres.module.css";
import { useHistory } from "react-router-dom";

const Genres = () => {
 
  const { data, error, isError } = useQuery(["genre"], () => fetchGenres());
  const history = useHistory();
  
 

  const handleClick = (e) => {
      const genreId = e.target.id ;
      const genreName = e.target.innerText ;
      history.push(`/genres/${genreId}/${genreName}`)
  };


  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Fragment>
      <h3 className={classes.genresHeader}>Select a genre :</h3>
      <div className={classes.genres}>
        {data &&
          data.genres.map((genre) => (
            <div key={genre.id}  id ={genre.id} onClick={handleClick} className={classes.genre}>
              {genre.name}
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Genres;
