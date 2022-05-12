import {NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import logo from '../images/filmstrip-logo-white2.png';
import SearchBar from './Search';
// import Hamburger from './Hamburger';
import {Divide as Hamburger} from 'hamburger-react';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [isOpen, setOpen] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        // console.log(toggleMenu);
        // if(toggleMenu === true){
        if(toggleMenu === true) {
            setToggleMenu(false);
        } else {
            setToggleMenu(true);
        }

        // }
     
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
                <NavLink to="/"><img src={logo} className='logo-mobile' alt='FilmsTrip Logo' /></NavLink>          
                <nav className='header-nav'> 
                    {(toggleMenu || screenWidth > 799) && (
                        <ul className='nav-menu' onClick={toggleNav}>                             
                            <li className='spacer'></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/favourites">Favourites</NavLink></li>
                            <NavLink to="/"><img src={logo} className='logo-desktop' alt='FilmsTrip Logo' /></NavLink>
                            <li><NavLink to="/account">Account</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li className='dark-light-mode'></li>
                        </ul>
                    )}
                    <div className="hamburger-icon" onClick={toggleNav}><Hamburger /></div>  
                    {/* <input onClick={toggleNav} type="checkbox" id="hi"/>
                    <label className="menu" htmlFor="hi">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    </label> */}
                    
                    {/* <button onClick={toggleNav} className="btn">BTN</button> */}
                </nav>
            </div>
            {/* <SearchBar /> */}
        </header>





    )
}

export default Header;