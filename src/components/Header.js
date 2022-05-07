import {NavLink} from 'react-router-dom';
import logo from '../images/filmstrip-logo-white.png';
import SearchBar from './Search';
import Hamburger from './Hamburger';

const Header = () => {


    return(
        <header> 
            <div className='header-wrapper'>            
                <nav className='header-nav'>                    
                    <ul className='nav-menu'>                        
                        <NavLink to="/"><img src={logo} className='logo' alt='FilmsTrip Logo' /></NavLink>
                        <Hamburger />
                        <li className='spacer'></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        <li><NavLink to="/account">Account</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className='dark-light-mode'></li>
                    </ul>
                    
                </nav>
            </div>
            <SearchBar />
        </header>
    )
}

export default Header;