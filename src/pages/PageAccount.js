import { useSelector } from 'react-redux';
// import MovieCard from '../components/MovieCard'; 
// import NoFavs from '../components/NoFavs';
import Footer from '../components/Footer';

const PageAccount = (onFavsPage) => {

    const favouriteItems = useSelector((state) => state.favs.items);

    return(
        <section className='account-page'>
            <div className='section-title'>
                <h1>My Films Trip</h1>
                <hr/>
                <div className='movies-container'>
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



