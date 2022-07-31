import { useState, useEffect } from 'react';
import Nav from './Nav';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }

    const hideNav = () => {
        setNavOpen(false);
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
            <div id="nav-container"
                onMouseDown={(e) => { e.preventDefault(); }}
                onClick={showHideNav}>
                <div className="toggle-icon">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>


            <Nav handleShowHideNav={showHideNav} handleLogoButton={hideNav} />
        </div>
    );

};

export default Header;