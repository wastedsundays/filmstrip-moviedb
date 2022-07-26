// import placeholder from '../images/godzilla-vs-kong-demo-poster.jpg';
import noPoster from '../images/no-movie-poster.jpg';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../features/favs/favsSlice';


function SingleMovie({movie, onFavsPage}) {

    const favouriteItems = useSelector((state) => state.favs.items);
    const dispatch = useDispatch();

    function inFav(id, arr){
        return arr.some(item => item.id === id);
    }

    //turn API runtime into mins and seconds
    let runTime = (movie.runtime);
    let hours = Math.floor(runTime /60);
    let minutes = runTime % 60;

    let date = "";
    // error handling for release dates
    if (movie.release_date === undefined || movie.release_date === ""){
        date = 1920-4-20;
    } else {
        date = new Date(movie.release_date);
    }

    const formattedDate = format(date, "MMMM do, yyyy");


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
                    <h1>{movie.title}</h1>
                    <p>{movie.tagline}</p>
                    <div className="single-movie-info-details">
                        <p>{`${hours}h ${minutes}min`}</p>
                        <p>{formattedDate}</p>
                    </div>

                    <div className="details-genres">
                        <ul className='genres-list'>
                            {movie.genres.map(genreList => <li key={genreList.id}>{genreList.name}</li>)}
                        </ul>
                    </div>
                    <div className='single-movie-rating-section'>
                        <p>{`Rating: ${movie.vote_average}`}</p>
                        {/* <p>{`Rating: ${formattedRating}`}</p> */}
                        {(onFavsPage === true || inFav(movie.id, favouriteItems) === true ) ? 
                            <div className='is-favs-icon' onClick={() => dispatch(deleteItem(movie))}><FaStar color="red"/></div> : 
                            <div className='add-fav-icon-container' onClick={() => dispatch(addItem(movie))}><FaRegStar /></div>
                        }
                    </div>
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>

                </div>
            </div>
        </div>


        <h2>Cast</h2>
        <div className="cast-card">{movie.credits.cast.slice(0, 6).map(castList => 
                <div className='cast-poster' key={castList.id}>
                    <div className='cast-info'>

                    <p className='cast-name'>{castList.name}</p>
                     <p className='cast-character'>{castList.character}</p>
                     <div >
                            <p className='cast-more-info-button'><a target="_blank" rel="noreferrer" href={`https://www.themoviedb.org/person/${castList.id}`}>More Info</a></p>
                        </div> 
                     <div className="cast-info-bg">
                        </div>
                     </div>
                    {castList.profile_path === null ? 
                    <img src={noPoster} alt="No Poster Available" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${castList.profile_path}`} alt={castList.name}/>}
                </div>

                )}

                {/* <div className="screenshot">{movie.images.backdrops.slice(0,6).map(backdropList => 
                <div className='movie-screen' key={backdropList.id}>
                    <img src={`https://image.tmdb.org/t/p/original${backdropList.file_path}`} alt='movie screenshot'/>
                </div>
            

                )}
                </div> */}

        </div>


    
    </>
  )
}

export default SingleMovie