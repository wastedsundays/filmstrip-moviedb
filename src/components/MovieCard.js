import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../features/favs/favsSlice';


function MovieCard({ movie, onFavsPage }) {

  const favouriteItems = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();

  function inFav(id, arr){
      return arr.some(item => item.id === id);
  }


  // const date = new Date(movie.release_date);
  // const formattedDate = format(date, "MMMM d, yyyy");
  // console.log(movie.release_date);
  // const formattedYear = format(date, "yyyy");



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
              <h3>{movie.vote_average}</h3>
{/* use this for when we add the watch history / films trip feature */}
              {/* {(onFavsPage === true || inFav(movie.id, favouriteItems) === true ) ? 
                <div className='is-favs-icon' onClick={() => dispatch(deleteItem(movie))}><FaStar color="red"/></div> : 
                <div className='add-fav-icon-container' onClick={() => dispatch(addItem(movie))}><FaRegStar /></div>
              } */}

              {(onFavsPage === true || inFav(movie.id, favouriteItems) === true ) ? 
                <div className='is-favs-icon' onClick={() => dispatch(deleteItem(movie))}><FaStar color="red" title="In Your Favourites List"/></div> : 
                <div className='add-fav-icon-container' onClick={() => dispatch(addItem(movie))}><FaRegStar title="Add to Your Favourites list"/></div>
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