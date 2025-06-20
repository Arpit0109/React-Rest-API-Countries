

function SearchBar({setquery}) {
  return (
   <div className="search-container">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input onChange={(e) => setquery(e.target.value)} type="text" placeholder="Search for contries" />
   </div>
  )
}

export default SearchBar