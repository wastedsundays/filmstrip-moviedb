import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../scss/styles.scss';

import Header from '../components/Header';
import Headernew from '../components/Headernew';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome.js';
import PageSingleMovie from '../pages/PageSingleMovie.js';
import PageSearch from  '../pages/PageSearch.js';
import PageAbout from '../pages/PageAbout.js';
import PageAccount from '../pages/PageAccount.js';
import PageFavourites from '../pages/PageFavourites.js';
// import Page404 from '../pages/Page404.js';

function App() {

    return (
      <BrowserRouter>
        <div>
        <Headernew />
        <Routes>
          <Route path='/' element={<PageHome sort="popular"/>} />

          {/* These routes are for home page sorting */}
          <Route path="/sort/popular" element={<PageHome sort="popular"/>} />
          <Route path="/sort/top-rated" element={<PageHome sort="top_rated"/>} />
          <Route path="/sort/now-playing" element={<PageHome sort="now_playing"/>} />
          <Route path="/sort/upcoming" element={<PageHome sort="upcoming"/>} />

          {/* This is the link to a single movie page */}
          <Route path="/movie/:id" element={<PageSingleMovie />} />

          {/* Links to the other pages */}
          <Route path="/search-results/" element={<PageSearch />} />
          <Route path='/favourites' element={<PageFavourites />} />
          <Route path='/account' element={<PageAccount />} />
          <Route path='/about' element={<PageAbout />} />
          {/* <Route path='/single' element={<PageSingleMovie />} /> */}
          {/* <Route path='*' element={<Page404 />} />  */}
        </Routes> 
        <Footer /> 
        </div>
      </BrowserRouter>
    );
    
  }
  
  export default App;