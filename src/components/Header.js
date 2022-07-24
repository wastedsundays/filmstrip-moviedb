import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
// import { appTitle } from '../globals/globals';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 800px)');
          mediaQuery.addEventListener('change', isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeEventListener('change', isDesktop);
    }, []);

    return (
        <div className={navOpen ? 'show' : undefined}>
            {/* <h1><Link to="/">{appTitle}</Link></h1> */}
            {/**
             * HTML for the Hamburger icon modified from HTMl 
             * found at this codepen:
             * https://codepen.io/RRoberts/pen/ZBYaJr
             */}
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                {/* <span className="sr-only">Menu</span> */}
            </button>
            <Nav handleShowHideNav={showHideNav} />
        </div>
    );

};

export default Header;