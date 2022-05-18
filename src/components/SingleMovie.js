// import placeholder from '../images/godzilla-vs-kong-demo-poster.jpg';
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({movie}) {

   

  return (
    <>  

        <div className="single-movie-container">
            <div className="single-movie-backdrop"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                }}>
            </div>

            <div className="single-movie-shader">
            </div>
           
            <div className='single-movie-details'>
                <div className='single-movie-poster'>
                    {movie.poster_path === null ?
                        <img src={noPoster} alt="No Poster Available" /> :
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    }
                
                </div>

                <div className="single-movie-info">
                    <h2>{movie.title}</h2>
                    <p>{movie.tagline}</p>
                    {/* <p>{movie.release_dates.results[52].release_dates[0].certification}</p> */}
                    <p>{`${movie.runtime} mins`}</p>
                    <p>{movie.release_date}</p>
                    <div className="details-genres">
                        {movie.genres.map(genreList => <p key={genreList.id}>{genreList.name}</p>)}
                    </div>
                    <p>{`Rating: ${movie.vote_average}`}</p>
                    <p>{movie.overview}</p>


                    {/* {console.log(movie.credits.cast[0].profile_path)} */}
                </div>
            </div>
        </div>

        
        <div className="cast-card">{movie.credits.cast.slice(0, 6).map(castList => 
                <div className='cast-poster' key={castList.id}>
                    <div className='cast-info'>
                     <p >{castList.name}</p><p>{castList.character}</p>
                     </div>
                    {castList.profile_path === null ? 
                    <img src={noPoster} alt="No Poster Available" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${castList.profile_path}`} alt={castList.name}/>}
                </div>

                )}

                <div className='cast-hover'> 
                    {/* <div className="cast-info"> */}
                        {/* <p >{castList.name}</p><p>{castList.character}</p> */}
                        {/* <h2>{titleTrunc}</h2>
                        <h3>({formattedYear})</h3>
                        <p>{movie.overview}</p> */}
                        {/* <p>{descriptionTrunc}</p> */}
                        {/* <Link to={`/movie/${movie.id}`} className="more-info-button">More Info</Link> */}
                        {/* <FavButton /> */}
                        <div className="cast-info-bg">
                        </div>
                    {/* </div> */}
                  

                </div>
        </div>


    
    </>
  )
}

export default SingleMovie