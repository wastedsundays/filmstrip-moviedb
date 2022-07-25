import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { appTitle } from '../globals/globals';
// import MovieCard from '../components/MovieCard'; 
// import NoFavs from '../components/NoFavs';
import Footer from '../components/Footer';

const PageAccount = (onFavsPage) => {

          // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    document.title = `My Trip - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

    const favouriteItems = useSelector((state) => state.favs.items);

    return(
        <section className='account-page'>
            <div className='section-title'>
                <h1>My Films Trip</h1>
                <hr/>
                <div className='my-trip-container'>
                {favouriteItems.length === 0 ?
                //  <NoFavs/> 
                 <Footer />
                 : favouriteItems.map(movie => 
                    <li key={movie.id}>{movie.title}</li>)}
            </div>
            </div>
        </section>
    )
}

export default PageAccount;



