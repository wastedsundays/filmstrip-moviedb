import {NavLink} from 'react-router-dom';
import logo from '../images/filmstrip-logo-white.png';

const Header = () => {


    return(
        <header> 
            {/* <div className='mobile-header-wrapper'>
                <nav className='mobile-header-nav'>    
                    <NavLink to="/"><img src={logo} className='logo' alt='FilmsTrip Logo' /></NavLink>                
                    <ul className='mobile-nav-menu'>
                        <li className='spacer'></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        
                        <li><NavLink to="/account">Account</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className='dark-light-mode'></li>
                    </ul>
                </nav>
            </div> */}
            <div className='header-wrapper'>            
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
            </div>
        </header>
    )
}

export default Header;