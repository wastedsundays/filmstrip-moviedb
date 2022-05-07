// import SectionTitle from '../components/SectionTitle';
// import MovieScrollerSection from '../components/MovieScrollerSection';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';
import NavSort from '../components/NavSort';
import  searchQuery  from '../components/Search';

function PageSearch() {

  const [moviesData, setmoviesData] = useState(false);
  // const { search } = window.location;
  //const query = new URLSearchParams(search).get('s');



        useEffect(() => {

          // console.log(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

        const fetchMovies = async () => {
          const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e2be774394fd67e79142c1318cddcc84&language=en-US&query=star%20wars&page=1&include_adult=false`);
          const data = await res.json();
          const first20Movies = data.results.splice(0,20);
          setmoviesData(first20Movies);
        }
        
        fetchMovies()
        }, []);


        return (
        <section className='search-results'>
          {/* <NavSort /> */}
          <p>Hello From the search page</p>
          {moviesData !== false && <Movies moviesData={moviesData} />}

       </section>
  )
}

export default PageSearch

