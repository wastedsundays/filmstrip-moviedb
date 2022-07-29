import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { appTitle } from '../globals/globals';
import NoTrip from '../components/NoTrip';

const PageAccount = (onFavsPage) => {

  useEffect(() => {
    document.title = `My Trip - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

    const favouriteItems = useSelector((state) => state.favs.items).slice().sort((a, b) => a.original_title.localeCompare(b.original_title));

    return(
        <section className='account-page'>
            <div className='section-title'>
                <h1>My Films Trip</h1>
                <h2>Your personal watch list.</h2>
                <hr/>
                <div className='my-trip-container'>
                {favouriteItems.length === 0 ?
                 <NoTrip />
                 : favouriteItems.map(movie => 
                    <li key={movie.id}>{movie.title}</li>)}
            </div>
            </div>
        </section>
    )
}

export default PageAccount;



