import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import noPoster from '../images/no-movie-poster.jpg';
import { FaStar, FaRegStar, FaEye, FaRegEye } from 'react-icons/fa';
import { addItem, deleteItem } from '../features/favs/favsSlice';
import { addWatchItem, deleteWatchItem } from '../features/watch/watchSlice';


function MovieCard({ movie, onFavsPage, onWatchPage }) {

  const favouriteItems = useSelector((state) => state.favs.items);
  const watchLater = useSelector((state) => state.watch.items);
  const dispatch = useDispatch();

  function inFav(id, arr){
      return arr.some(item => item.id === id);
  }

  function inWatch(id, arr){
    return arr.some(item => item.id === id);
}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path === null ?
          <img src={noPoster} alt="No Poster Available" /> :
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} Poster`} />
        }
        <div className='info-hover'> 
          <div className="movie-info">
            <h2 className="movie-card-title">{movie.title.length > 35 ? `${movie.title.substring(0, 35)}...` : movie.title}</h2>

            <div className='moviecard-rating-section'> 


              {(onFavsPage === true || inFav(movie.id, favouriteItems) === true ) ? 
                <div className='is-favs-icon' onClick={() => dispatch(deleteItem(movie))}><FaStar color="red" title="In Your Favourites List"/></div> : 
                <div className='add-fav-icon-container' onClick={() => dispatch(addItem(movie))}><FaRegStar title="Add to Your Favourites list"/></div>
              }

              <h3>{movie.vote_average}</h3>
              {(onWatchPage === true || inWatch(movie.id, watchLater) === true ) ? 
                  <div className='is-watch-icon' onClick={() => dispatch(deleteWatchItem(movie))}><FaEye color="red" title="You have watched this"/></div> : 
                  <div className='add-watch-icon-container' onClick={() => dispatch(addWatchItem(movie))}><FaRegEye title="Add to your Trip"/></div>
              }
            </div>
            
            <p>{movie.overview}</p>

            <Link to={`/movie/${movie.id}`} className="more-info-button">More Info</Link>
          </div>
          <div className="movie-info-bg"></div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard