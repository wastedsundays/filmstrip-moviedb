import { useNavigate } from 'react-router-dom';


const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const onSubmit = e => {
        // history.push(`?s=${searchQuery}`)
        history.push(searchQuery)
        e.preventDefault();
    };
// }

return(

// const SearchBar = () => (
    

    <form action="/" method="get" autoComplete='off' onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="r" 
        />
        <button type="submit">Search</button>
    </form>
);
}

export default SearchBar;