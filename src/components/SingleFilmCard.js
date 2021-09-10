import classes from '../css/SingleFilmCard.module.css';

const SingleFilmCard = ({movie}) => {
    const baseImgURL = 'https://image.tmdb.org/t/p/w200' ;
    return ( 
        <div className={classes.card} >
            <figure className={classes.image}>
                <img src={`${baseImgURL}${movie.poster_path}`} alt={ movie.title} />
            </figure>
            <div className={classes.movieInfo}>
                <h4>{ movie.title}</h4>
                <p><b>Popularity:</b> { movie.popularity}</p>
                <p><b>Average Rate:</b> { movie.vote_average}</p>
            </div>
        </div>
     );
}
 
export default SingleFilmCard;