import {BrowserRouter, Routes, Route} from 'react-router-dom';

import '../scss/styles.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import PageAbout from '../pages/PageAbout.js';
// import PageAccount from '../pages/PageAccount.js';
// import PageFavourites from '../pages/PageFavourites.js';
// import PageHome from '../pages/PageHome.js';
// import PageSingle from '../pages/PageSingle.js';
// import Page404 from '../pages/Page404.js';

function App() {

    return (
      <BrowserRouter>
        <div>
        <Header />
        {/* <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/favourites' element={<PageFavourites />} />
          <Route path='/account' element={<PageAccount />} />
          <Route path='/about' element={<PageAbout />} />
          <Route path='/single' element={<PageSingle />} />
          <Route path='*' element={<Page404 />} />
        </Routes> */}
        <Footer /> 
        </div>
      </BrowserRouter>
    );
    
  }
  
  export default App;