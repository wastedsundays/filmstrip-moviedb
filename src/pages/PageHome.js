// import SectionTitle from '../components/SectionTitle';
// import MovieScrollerSection from '../components/MovieScrollerSection';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';
import NavSort from '../components/NavSort';
import SearchBar from '../components/Search';

function PageHome({sort}) {

  const [moviesData, setmoviesData] = useState(false);

  useEffect(() => {document.title = `FilmsTrip - the Movie Database`;
},[]);



        useEffect(() => {

          // console.log(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

        const fetchMovies = async () => {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
          const data = await res.json();
          const first12Movies = data.results.splice(0,12);
          setmoviesData(first12Movies);
        }
        
        fetchMovies()
        }, [sort]);


        return (
        <section className='home-page'>
          <NavSort />

          {moviesData !== false && <Movies moviesData={moviesData} />}

       </section>
  )
}

export default PageHome

