const SearchBar = ({ search, setSearch }) => {

    return <form className="search" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="searchLabel" className="searchLabel" >Search</label>
        <input type="text"
            placeholder="Search"
            id="search"
            value={search}
            className="searchInput"
            onChange={(e) => setSearch(e.target.value)}

        />
    </form>
}

export default SearchBar;