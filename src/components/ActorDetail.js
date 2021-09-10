import SingleFilmCard from "./SingleFilmCard";
import classes from "../css/ActorDetail.module.css"
const ActorDetail = ({data}) => {
    
    return ( <div className ={ classes.moviesByActor}>
        { data.credits.cast.map((movie) => (
            <SingleFilmCard  movie = { movie }/>
        )) }
    </div> );
}
 
export default ActorDetail;