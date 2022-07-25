import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globals";
import { useState } from "react";
import { useEffect } from "react";
import { API_KEY } from '../globals/globals';
import SingleMovie from '../components/SingleMovie';

function PageSingleMovie() {
    const [movieData, setMovieData] = useState(false);
    
// this ID comes from the AppRouter.
    const { id } = useParams()

              // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

     useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${API_KEY}&append_to_response=credits,release_dates,images,videos`);  
            const data = await res.json();
            setMovieData(data);
        } 
          
          fetchMovie()
    }, [id])

    useEffect(() => {document.title = `FilmsTrip - the Movie Database`;
  },[]);

  return (

    <section className="single-movie-page">
        {movieData !== false && <SingleMovie movie={movieData}/>}
    </section>

  )
}

export default PageSingleMovie