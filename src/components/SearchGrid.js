import MovieCard from './MovieCard';

function SearchGrid({searchData}){

    return (
        <div className='movies-container'>
            {searchData.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      )
}

export default SearchGrid;