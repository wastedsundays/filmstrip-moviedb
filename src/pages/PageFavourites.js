import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard'; 
// import NoFavs from '../components/NoFavs';
import Footer from '../components/Footer';
import SearchBar from '../components/Search';

const PageFavourites = (onFavsPage) => {

    const favouriteItems = useSelector((state) => state.favs.items);

    return(
        <>
        <section className='fav-page'>
            <h1>Favourites</h1>
            <div className='movies-container'>
                {favouriteItems.length === 0 ?
                //  <NoFavs/> 
                 <Footer />
                 : favouriteItems.map(movie => <MovieCard key={movie.id} movie={movie} onFavsPage={true} />)}
            </div>
        </section>
        <div className='side-fade fade-hide'></div>
        </>
    )
}

export default PageFavourites;