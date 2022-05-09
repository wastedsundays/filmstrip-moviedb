import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { format } from 'date-fns';
// import FavButton from './FavButton';




function MovieCard({ movie }) {



  const date = new Date(movie.release_date);
  // const formattedDate = format(date, "MMMM d, yyyy");
  console.log(movie.release_date);
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