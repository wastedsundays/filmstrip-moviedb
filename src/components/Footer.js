// import {NavLink} from 'react-router-dom';
import { getYear } from '../globals/globals';

const Footer = () => {


    return(
        <footer className='footer-wrapper'>
            
                <nav>
                    <ul className='footer'>
                        <li>Link</li>
                        {<li>&copy; {getYear()} Adam H.</li>}
                        <li>Link</li>
                    </ul>
                </nav>
        
        </footer>
    )
}

export default Footer;