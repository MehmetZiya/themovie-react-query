import SingleFilmCard from "./SingleFilmCard";
import classes from "../css/ActorDetail.module.css"
const ActorDetail = ({data}) => {
    
    return ( <div className ={ classes.moviesByActor}>
        { data.credits.cast.map((movie) => (
            <SingleFilmCard  key= {movie.id} movie = { movie }/>
        )) }
    </div> );
}
 
export default ActorDetail;