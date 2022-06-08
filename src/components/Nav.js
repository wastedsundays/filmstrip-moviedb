import { NavLink } from 'react-router-dom';
import logo from '../images/filmstrip-logo-white2.png';
import ModeSwitch from './ModeSwitch';


const Nav = ({ handleShowHideNav }) => {
    
    function closeNav(e){
        if(window.innerWidth < 850){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    function switchMode(e){
        console.log("hello");
    }

    return (
        <div className="header-wrapper">
            <div className='header-wrapper-mobile'>
                <NavLink to="/"><img src={logo} onClick={closeNav} className="logo-mobile logo" alt='FilmsTrip Logo' /></NavLink>
                <nav className="main-nav-mobile">
                    <ul className='nav-menu-mobile'>
                        <li className='spacer'></li>
                        <span onClick={closeNav}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        <li><NavLink to="/account">Account</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        </span>
                        <li className='spacer' onClick={switchMode}><ModeSwitch /></li>
                    </ul>
                </nav>
            </div>

            <div className='header-wrapper-desktop'>
                {/* <nav className="main-nav-desktop" onClick={closeNav}> */}
                <nav className="main-nav-desktop">
                    <ul className='nav-menu-desktop'>
                        <li className='spacer'></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        <NavLink to="/"><img src={logo} className="logo-desktop logo" alt="FilmsTrip Logo" /></NavLink>
                        <li><NavLink to="/account">Account</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className='spacer' onClick={switchMode}><ModeSwitch /></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
    
};

export default Nav;