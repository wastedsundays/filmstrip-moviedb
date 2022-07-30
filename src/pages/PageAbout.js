import moviedbLogo from '../images/moviedb-logo.svg';
import { appTitle } from '../globals/globals';
import { useEffect, useState } from "react";
import { FaTiktok, FaTwitter, FaFacebook, FaInstagram, FaYoutubeSquare, FaRegStar, FaRegEye } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import { movieArray } from '../globals/globals';


const PageAbout = (movie) => {

  useEffect(() => {
    document.title = `About - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

  const [movieBackdrop, setMovieBackdrop] = useState("");

  const backdropUrl = "https://image.tmdb.org/t/p/w1280"

  
// Use this if you want to have a random now playing backdrop.
//   useEffect(() => {

//       const fetchMovieBackdrops = async () => {
//               const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
//               const data = await res.json();
//               const randomBackdrop = data.results[Math.floor(Math.random()*data.results.length)].backdrop_path
//               setMovieBackdrop(backdropUrl+randomBackdrop);

//       }
//       fetchMovieBackdrops()

//   }, []);


// Use this for a random backdrop of my favourite movies
useEffect(() => {

    const fetchMovieBackdrops = async () => {
        const randMovie = movieArray[Math.floor(Math.random()*movieArray.length)]    
        const res = await fetch(`https://api.themoviedb.org/3/movie/${randMovie}/images?api_key=${API_KEY}`);
        const data = await res.json();
            
        const random = data.backdrops.filter(element => (element.iso_639_1 === null));
        const randomBackdrop = random[Math.floor(Math.random()*random.length)].file_path;
 
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
                        <p>FilmsTrip is the internet movie database.</p> <p>Use the search function to find your favourite flicks, or browse popular, new releases and upcoming movies on the home page.</p>
                        <p>You can view more details by selecting a movie, which will take you to the individual movie page.</p> 
                        <p>Click the 'Eye'-con <FaRegEye /> to add a movie to your personal Films Trip watched list on the 'My Trip' page.</p>
                        <p>Add a movie to your favourites list by clicking on the star. <FaRegStar /></p>
                    </article>
                    <article>
                        <h2>Be Social</h2>
                        <nav className='about-socials'>
                            <IconContext.Provider value={{size: 24 }}>
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
                        <p>FilmsTrip was created, designed, and built by <a href="https://adamh.ca" target="_blank" rel="noreferrer">Adam H.</a></p>
                        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                        <a href="https://themoviedb.org" target="_blank" rel="noreferrer"><img className='movie-db-logo' src={moviedbLogo} alt="The Movie DB" /></a>
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