import {NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import logo from '../images/filmstrip-logo-white.png';
import SearchBar from './Search';
// import Hamburger from './Hamburger';
import {Divide as Hamburger} from 'hamburger-react';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

    useEffect(() => {

    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

    }, [])

    return(
        <header> 
            <div className='header-wrapper'>  
                <NavLink to="/"><img src={logo} className='logo' alt='FilmsTrip Logo' /></NavLink>          
                <nav className='header-nav'> 
                    {(toggleMenu || screenWidth > 500) && (
                        <ul className='nav-menu'>                             
                            <li className='spacer'></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/favourites">Favourites</NavLink></li>
                            <li><NavLink to="/account">Account</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li className='dark-light-mode'></li>
                        </ul>
                    )}
                    <div className="hamburger-icon" onClick={toggleNav}><Hamburger /></div>  
                    {/* <button onClick={toggleNav} className="btn">BTN</button> */}
                </nav>
            </div>
            {/* <SearchBar /> */}
        </header>





    )
}

export default Header;