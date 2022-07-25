import moviedbLogo from '../images/moviedb-logo.svg';
import { appTitle } from '../globals/globals';
import { useEffect, useState } from "react";
import { FaTiktok, FaTwitter, FaFacebook, FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import { API_KEY } from '../globals/globals';


const PageAbout = (movie) => {

      // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    document.title = `About - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

  const [movieBackdrop, setMovieBackdrop] = useState("");

  const backdropUrl = "https://image.tmdb.org/t/p/w1280"

  useEffect(() => {

      const fetchMovieBackdrops = async () => {
              const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
              const data = await res.json();
              const randomBackdrop = data.results[Math.floor(Math.random()*data.results.length)].backdrop_path
              setMovieBackdrop(backdropUrl+randomBackdrop);

      }
      fetchMovieBackdrops()

  }, []);




    return(
        <>
        <section className='about-page'>
            <h1>Have A Nice Trip</h1>
            <div className="about-box">

                <div className='about-details'>
                    <article>
                        <p>Let's take a trip through the films.</p> 
                        <p>FilmsTrip is the internet movie database.</p> <p>On the main page, you can choose to view the top movies for each category: Popular movies, New Releases, Upcoming releases and Top Rated.</p>
                        <p>You can view more details by selecting a movie, which will take you to the individual movie page.</p> 
                        <p>Create a list of all the movies you've seen on the 'My Trip' page.</p>
                        <p>Add a movie to your favourites list by clicking on it's star when browsing through the database. 
                        </p>
                    </article>
                    <article>
                        <h2>Be Social</h2>
                        <nav className='about-socials'>
                            <IconContext.Provider value={{size: 35 }}>
                            <NavLink to="#"><FaFacebook className='fa-icon'/></NavLink>
                            <NavLink to="#"><FaTwitter className='fa-icon'/></NavLink>
                            <NavLink to="#"><FaTiktok className='fa-icon'/></NavLink>
                            <NavLink to="#"><FaInstagram className='fa-icon'/></NavLink>
                            <NavLink to="#"><FaYoutubeSquare  className='fa-icon'/></NavLink>
                            </IconContext.Provider>
                        </nav>
                    </article>
                    <article>
                        <h2>Credits</h2>
                        <p>FilmsTrip was created, designed, and built by Adam H.</p>
                        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                        <img className='movie-db-logo' src={moviedbLogo} alt="The Movie DB" />
                    </article>
                </div>
                <div className='about-bg' 
                        style={{
                            backgroundImage: `url(${movieBackdrop})`
                        }}>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default PageAbout;