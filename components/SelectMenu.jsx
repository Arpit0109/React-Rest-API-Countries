

function SelectMenu({setquery}) {

  
  return (
    <select className="filter-by-regio" onChange={(e)=>setquery(e.target.value)}>
      <option hidden> Filter by region</option>
      <option value="Africa"> Afrika</option>
      <option value="America">America</option>
      <option value="Asia"> Asia</option>
      <option value="Europe"> Europe</option>
      <option value="Oceania"> Oceania</option>
    </select>
  )
}

export default SelectMenu