import { NavLink } from 'react-router-dom';
import logo from '../images/filmstrip-logo-white2.png';
import ModeSwitch from './ModeSwitch';
// import { GrHomeRounded } from 'react-icons/gr';
// import { GrMoon } from 'react-icons/gr';
// import { GrActions } from 'react-icons/gr';


const Nav = ({ handleShowHideNav }) => {
    
    function closeNav(e){
        if(window.innerWidth < 850){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    function switchMode(e){
        alert("hello dark mode");
    }

    return (
        <div className="header-wrapper">
            <div className='header-wrapper-mobile'>
                <img src={logo} className="logo-mobile logo" alt='FilmsTrip Logo' />
                <nav className="main-nav-mobile">
                    <ul className='nav-menu-mobile'>
                        <li className='spacer'></li>
                        <span onClick={closeNav}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        <li><NavLink to="/account">My Trip</NavLink></li>

                        </span>
                        {/* <li className='spacer' onClick={switchMode}><ModeSwitch /></li> */}
                    </ul>
                </nav>
            </div>

            <div className='header-wrapper-desktop'>
                {/* <nav className="main-nav-desktop" onClick={closeNav}> */}
                <nav className="main-nav-desktop">
                    <ul className='nav-menu-desktop'>
                        {/* <NavLink to="/"><li className='spacer'><GrHomeRounded /></li></NavLink> */}
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <img src={logo} className="logo-desktop logo" alt="FilmsTrip Logo" />
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                        <li><NavLink to="/account">My Trip</NavLink></li>

                        {/* <li className='spacer' onClick={switchMode}><GrMoon /></li> */}
                    </ul>
                </nav>
            </div>

        </div>
    );
    
};

export default Nav;