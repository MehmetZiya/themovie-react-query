import { useQuery } from "react-query";
import { fetchGenres } from "../functions/getItems";
import classes from "../css/GenreInput.module.css";



const GenreInput = ({ setGenreId, setGenreName }) => {
  const { data, error, isError } = useQuery(["genre"], () => fetchGenres());
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <h3 className={classes.inputHeader}>Select a genre :</h3>
      <div className={classes.options}>
        {data && (
          <select  onChange={(e) => {
              setGenreName(e.target.selectedOptions[0].innerText);
              setGenreId(e.target.value);
          }}>
              <option></option>
            {data.genres.map((genre) => (
              <option key={genre.name} value={genre.id} name={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default GenreInput;
