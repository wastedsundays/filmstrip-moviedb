import {useNavigate} from 'react-router-dom';
import {useState} from 'react';


const MobileSearchBar = (movie) => {

    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    const searchItems = (searchValue) => {
        let uriEncodedSearchValue = encodeURIComponent(searchValue);
        setSearchInput(uriEncodedSearchValue);
    }

    function submitSearch(e){
        e.preventDefault();
    
        if(searchInput === ''){
            return;
        }
        e.target.elements.search.value = '';
        navigate(`/search?q=${searchInput}`, { replace: true })
    }


    return(
        <div className='mobile-search-wrapper'>
            <form action="#" onSubmit={submitSearch}>
                <input className='mobile-search-bar' type="text" placeholder="Search for a movie ..." id="mobile-search" name="search" onChange={(e) => searchItems(e.target.value)} />
            </form>
        </div>
    )
}

export default MobileSearchBar;