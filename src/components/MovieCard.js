import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({ movie }) {


  return (
    <div className="movie-card">
        <div className="movie-poster">
            {movie.poster_path === null ?
                <img src={noPoster} alt="No Poster Available" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            }
           <div className='info-hover'> 
          <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Synopsis Lorem Ipsum Ipsum Lorem</p>
              <Link to="/">More Info</Link>
          </div>
          <div className="movie-info-bg">
          </div>

          </div>

        </div>


        
    </div>
  )
}

export default MovieCard