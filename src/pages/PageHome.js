import { useEffect, useState, useCallback } from 'react';
import Movies from '../components/Movies';
import { API_KEY, appTitle } from '../globals/globals';
import NavSort from '../components/NavSort';

function PageHome({sort}) {

  useEffect(() => {
    document.title = `${appTitle}`
    window.scrollTo(0, 0); 
  }, [])

// Movie Filter
const selectedMovieFilter = sort;
// Movie List
const [moviesData, setMovieList] = useState(false);
// Flag for if more pages can be loaded
const [canLoadMore, setCanLoadMore] = useState(true);
// Last loaded page
const [moviePage, setMoviePage] = useState(1);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};



const fetchMovies = useCallback(async (page) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovieFilter}?api_key=${API_KEY}&page=${page}`);
  const data = await res.json();
  const selectedMovies = data.results.splice(0,12);
  if (page === 1) {
    setMovieList(selectedMovies)
  } else {
    setMovieList(moviesData => [...moviesData, ...selectedMovies]);
  }
  // If the total page limit has been reached set the canLoadMore flag
  if (page >= data.total_pages) {
    setCanLoadMore(false)
  }
}, [selectedMovieFilter])

// Handle loadMore button
const handleLoadMore = () => {
  fetchMovies(moviePage + 1);
  setMoviePage(moviePage + 1);
}

// Re-fetch movies if the selectedMovieFilter changes - this will also occur on page load
useEffect(() => {
  fetchMovies(1)
  setMoviePage(1);
  setCanLoadMore(true)
}, [fetchMovies, selectedMovieFilter])


        return (
        <section className='home-page'>
          <NavSort />
          {moviesData && <Movies moviesData={moviesData} />}
        {canLoadMore && <button 
          onClick={handleLoadMore}
          className="load-more"
        >
          Load More</button>}
          <button onClick={scrollToTop}>Top</button>
         
       </section>
  )
}

export default PageHome

