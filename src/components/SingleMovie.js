// import placeholder from '../images/godzilla-vs-kong-demo-poster.jpg';
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({movie}) {


    // const movie = {
    //     title: 'Godzilla vs. Kong',
    //     overview: 'Lorem Ipsum',
    //     poster_path: placeholder
    // }

    

  return (
    <>  
        <div className="single-movie-container">
        <div className="single-movie-backdrop"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}></div>
            <div className='single-movie-poster'>
            {movie.poster_path === null ?
                <img src={noPoster} alt="No Poster Available" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            }
        
        </div>
        <div className="single-movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            {/* <p>{movie.release_dates.results[52].release_dates[0].certification}</p> */}<p>{`${movie.runtime} mins`}</p>
            <p>{movie.release_date}</p>
            <div className="details-genres">
                {movie.genres.map(genreList => <p key={genreList.id}>{genreList.name}</p>)}
            </div>
            <p>{`Rating: ${movie.vote_average}`}</p>
            <p>{movie.overview}</p>
            
            
            {/* <p>{movie.genres[0].name}</p> */}
            {/* {console.log(movie.credits)} */}
            
            {/* <p>{movie.credits.cast[0].name}</p> */}

            {console.log(movie.credits.cast[0].profile_path)}
        </div>
        </div>
        
        <div className="cast-info">{movie.credits.cast.slice(0, 6).map(castList => 
                <p className="cast-member" key={castList.id}>{castList.name}
                <img src={`https://image.tmdb.org/t/p/original/${castList.profile_path}`} alt={castList.name}/>
                </p>)}</div>


    
    </>
  )
}

export default SingleMovie