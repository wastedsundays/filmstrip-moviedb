import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { appTitle } from '../globals/globals';
import NoTrip from '../components/NoTrip';

const PageAccount = (onWatchPage) => {

  useEffect(() => {
    document.title = `My Trip - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

    const watchItems = useSelector((state) => state.watch.items).slice().sort((a, b) => a.original_title.localeCompare(b.original_title));

    return(
        <section className='account-page'>
            <div className='section-title'>
                <h1>My Films Trip</h1>
                <h2>Personal watch list</h2>
                <hr/>
                <div className='my-trip-container'>
                {watchItems.length === 0 ?
                 <NoTrip />
                 : watchItems.map(movie => 
                    <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>)}
            </div>
            </div>
        </section>
    )
}

export default PageAccount;



