import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { format } from 'date-fns';
// import FavButton from './FavButton';
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



  const date = new Date(movie.release_date);
  // const formattedDate = format(date, "MMMM d, yyyy");
  // console.log(movie.release_date);
  const formattedYear = format(date, "yyyy");
  const titleTrunc = (movie.title).substring(0,45);


  return (
    <div className="movie-card">
        <div className="movie-poster">
            {movie.poster_path === null ?
                <img src={noPoster} alt="No Poster Available" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            }
           <div className='info-hover'> 
              <div className="movie-info">
                <h2>{titleTrunc}</h2>
                <h3>({formattedYear})</h3>

                {(onFavsPage === true || inFav(movie.id, favouriteItems) === true ) ? 
                                        <div className='is-favs-icon' onClick={() => dispatch(deleteItem(movie))}><FaStar color="red"/></div> : 
                                        <div className='add-fav-icon-container' onClick={() => dispatch(addItem(movie))}><FaRegStar /></div>
                                    }
                <p>{movie.overview}</p>
                {/* <p>{descriptionTrunc}</p> */}
                <Link to={`/movie/${movie.id}`} className="more-info-button">More Info</Link>
                {/* <FavButton /> */}
              </div>
              <div className="movie-info-bg">
              </div>

            </div>

        </div>


        
    </div>
  )
}

export default MovieCard