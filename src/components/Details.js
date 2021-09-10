const Details = ({ data }) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div>
        <img src={`${baseImgURL}${data.poster_path}`} alt={data.title} />
      </div>
      <div>
        <h3>{data.title}</h3>
      </div>
      <div>
        {data.credits.cast.map((actor) => (
          <div>{actor.name}</div>
        ))}
      </div>
      <div>
        <img src={`${baseImgURL}${data.backdrop_path}`} alt={data.title} />
      </div>
    </div>
  );
};

export default Details;
