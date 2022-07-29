import { NavLink } from 'react-router-dom';
import logo from '../images/filmstrip-logo-white2.png';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

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


    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    const searchItems = (searchValue) => {
        let uriEncodedSearchValue = encodeURIComponent(searchValue);
        setSearchInput(uriEncodedSearchValue);
    }

    function submitSearch(e){
        e.preventDefault();
        handleLogoButton();
        if(searchInput === ''){
            return;
        }
        e.target.elements.search.value = '';
        navigate(`/search?q=${searchInput}`, { replace: true })
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
                        <li className='mobile-searchbar'>
                            <div className='mobile-search-wrapper'>
                                <form action="#" autoComplete='off' onSubmit={submitSearch}>
                                    <input className='mobile-search-bar' type="text" placeholder="SEARCH" id="mobile-search" name="search" onChange={(e) => searchItems(e.target.value)} />
                                </form>
                            </div>
                        </li>    
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