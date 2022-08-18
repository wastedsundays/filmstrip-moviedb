import { getYear } from '../globals/globals';

const Footer = () => {


    return(
        <footer className='footer-wrapper'>
            
                <nav>
                    <ul className='footer'>
                        <li className='attribution-footer'>Powered by TMDb</li>
                        <a href="https://adamh.ca">{<li>&copy; {getYear()} Adam H.</li>}</a>
                        <li className='tagline-footer'>Have a Nice Trip.</li>
                    </ul>
                </nav>
        
        </footer>
    )
}

export default Footer;