import { NavLink } from 'react-router-dom';
import logo from '../images/filmstrip-logo-white2.png';
import MobileSearchBar from './MobileSearch';

const Nav = ({ handleShowHideNav , handleLogoButton }) => {
    
    function closeNav(e){
        if(window.innerWidth < 850){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    function homeButton(e){
        handleLogoButton();
    }

    

    return (
        <div className='header-wrapper'>
            <div className='header-wrapper-mobile'>
                <NavLink to='/'><img src={logo} onClick={homeButton} className='logo-mobile logo' alt='FilmsTrip Logo' /></NavLink>
                <nav className='main-nav-mobile'>
                    <ul className='nav-menu-mobile'>
                        <span onClick={closeNav}>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/favourites'>Favourites</NavLink></li>
                        <li><NavLink to='/account'>My Trip</NavLink></li>
                        </span>
                        <li className='mobile-searchbar'><MobileSearchBar /></li>
                        
                    </ul>
                </nav>
            </div>

            <div className='header-wrapper-desktop'>
                <nav className="main-nav-desktop">
                    <ul className='nav-menu-desktop'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <NavLink to='/'><img src={logo} className='logo-desktop logo' alt='FilmsTrip Logo' /></NavLink>
                        <li><NavLink to='/favourites'>Favourites</NavLink></li>
                        <li><NavLink to='/account'>My Trip</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );    
};

export default Nav;