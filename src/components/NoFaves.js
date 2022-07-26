import { useEffect, useState } from "react";
import { API_KEY } from '../globals/globals';

function NoFaves(){

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


    return (
            <div className="about-box-no-faves">

                <div className='about-details-no-faves'>
                    <article>
                        <p>You Have No Favourites</p>
                        <p>Click on the star on any movie page (or on the movie poster) to add a movie to your favourites list.</p>
                    </article>


                </div>
                <div className='about-bg-no-faves' 
                        style={{
                            backgroundImage: `url(${movieBackdrop})`
                        }}>
                </div>
            </div>


      )
}

export default NoFaves;