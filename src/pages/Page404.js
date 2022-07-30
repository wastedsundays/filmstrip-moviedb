import { useEffect, useState } from "react";
import { appTitle } from '../globals/globals';
import { API_KEY } from '../globals/globals';

function Page404() {

        // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    document.title = `404 - ${appTitle}`;
    window.scrollTo(0, 0);
  }, [])

  const [movieBackdrop, setMovieBackdrop] = useState("");

  const backdropUrl = "https://image.tmdb.org/t/p/w1280"

  useEffect(() => {

      const fetchMovieBackdrops = async () => {
              const res = await fetch(`https://api.themoviedb.org/3/movie/9340/images?api_key=${API_KEY}`);
              const data = await res.json();
              // const randomBackdrop = data.results[Math.floor(Math.random()*data.results.length)].backdrop_path
              // const randomBackdrop = data.backdrops[Math.floor(Math.random()*data.backdrops.length)].file_path;
              const random = data.backdrops.filter(element => (element.iso_639_1 === null));
              const randomBackdrop = random[Math.floor(Math.random()*random.length)].file_path;
 
  
              setMovieBackdrop(backdropUrl+randomBackdrop);


      }
      fetchMovieBackdrops()

  }, []);
  return (
    <>
    <section className='about-page'>
        <div className="about-box">

            <div className='about-details'>
                <article>
                    <p>These aren't the pages you're looking for....</p> 
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

export default Page404