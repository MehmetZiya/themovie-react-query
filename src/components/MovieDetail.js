import { useEffect, useState } from "react";
import Cast from "./Cast";
import classes from '../css/MovieDetail.module.css' ;

const Details = ({ data }) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w500";
  const [cast, setCast] = useState([]);
  const [number, setNumber] = useState(8);
  const handleClick = () => {
    setNumber(number + 8);
  };

  useEffect(() => { 
    // showing only 8 actors for the first render
    if (data.credits.cast) {
      const showing = data.credits.cast.slice(0, number);
      setCast(showing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <div>
      <div>
        <img src={`${baseImgURL}${data.poster_path}`} alt={data.title} />
      </div>
      <div>
        <h3>{data.title}</h3>
      </div>
      <div className ={classes.castWrapper}>
        {cast.map((actor) => (
          <Cast key={actor.id} actor={actor} />
        ))}
      </div>
      {cast && cast.length < data.credits.cast.length && (
          <div className = 'centered'><button className='btn' onClick={handleClick}>Show More</button></div>
        )}
      <div>
        <img src={`${baseImgURL}${data.backdrop_path}`} alt={data.title} />
      </div>
    </div>
  );
};

export default Details;
