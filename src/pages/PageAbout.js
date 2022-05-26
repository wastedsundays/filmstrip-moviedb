import moviedbLogo from '../images/moviedb-logo.svg';
import { getYear } from '../globals/globals';
import { FaTiktok, FaTwitter, FaFacebook, FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


const PageAbout = () => {
    return(
        <section className='about-page'>
            <div className="about-box">
                <h1>Have A Nice Trip</h1>
                <article>
                    <p>Let's take a trip through the films, shall we?</p> 
                    <p>FilmsTrip is the internet movie database.</p> <p>On the main page, you can choose to view the top movies for each category: Popular movies, New Releases, Upcoming releases and Top Rated.</p>
                    <p>You can view more details by selecting a movie, which will take you to the individual movie page.</p> 
                    <p>Add a movie to your favourites list by clicking on it's star when browsing through the database. 
                    </p>
                </article>
                <div className='about-socials'>
                    <IconContext.Provider value={{size: 35 }}>
                    <a href='https://www.facebook.com'><FaFacebook className='fa-icon'/></a>
                    <a href='https://www.twitter.com'><FaTwitter className='fa-icon'/></a>
                    <a href='https://www.tiktok.com'><FaTiktok className='fa-icon'/></a>
                    <a href='https://www.instagram.com'><FaInstagram className='fa-icon'/></a>
                    <a href='https://www.youtube.com'><FaYoutubeSquare  className='fa-icon'/></a>
                    </IconContext.Provider>
                </div>
                <h2>Credits</h2>

                    <article>
                        <p>FilmsTrip was created, designed, and coded by Adam H.</p>
                        <p>&copy; {getYear()} <a href="https://www.adamh.ca">Adam H.</a></p>
                    </article>
                    <article>
                        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                        <img src={moviedbLogo} alt="The Movie DB" />
                    </article>

            </div>
        </section>
    )
}

export default PageAbout;