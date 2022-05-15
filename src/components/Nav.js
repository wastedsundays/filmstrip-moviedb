import { NavLink } from 'react-router-dom';
import logo from '../images/filmstrip-logo-white2.png';

const Nav = ({ handleShowHideNav }) => {
    
    function closeNav(e){
        if(window.innerWidth < 800){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    return (
        <div className='header-wrapper'>
            <NavLink to="/"><img src={logo} className="logo-mobile" alt='FilmsTrip Logo' /></NavLink>
            <nav className="main-nav" onClick={closeNav}>
                <ul className='nav-menu'>
                    <li className='spacer'></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <NavLink to="/"><img src={logo} className="logo-desktop" alt="FilmsTrip Logo" /></NavLink>
                    <li><NavLink to="/account">Account</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li className='dark-light-mode'></li>
                </ul>
            </nav>

        </div>
    );
    
};

export default Nav;