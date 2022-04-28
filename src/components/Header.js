import {NavLink} from 'react-router-dom';
import logo from '../images/filmstrip-logo-white.png';

const Header = () => {


    return(
        <header className='header-wrapper'>            
                <nav className='header-nav'>                    
                    <ul className='nav-menu'>
                        <li className='spacer'></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        <NavLink to="/"><img src={logo} className='logo' alt='FilmsTrip Logo' /></NavLink>
                        <li><NavLink to="/account">Account</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className='dark-light-mode'></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;