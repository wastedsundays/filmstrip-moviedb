import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard'; 
import NoFaves from '../components/NoFaves';
import Footer from '../components/Footer';


const PageFavourites = (onFavsPage) => {

              // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    document.title = `Favourites Page - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

    const favouriteItems = useSelector((state) => state.favs.items);

    return(
        <>
        <section className='fav-page'>
            <h1>Favourites</h1>
            <div className='movies-container'>
                {favouriteItems.length === 0 ?
                 <NoFaves/> 
                 : favouriteItems.map(movie => <MovieCard key={movie.id} movie={movie} onFavsPage={true} />)}
            </div>
        </section>
        <div className='side-fade fade-hide'></div>
        </>
    )
}

export default PageFavourites;