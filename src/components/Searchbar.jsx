
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'


const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  return (
  <form onSubmit={handleSubmit} className="p-2 text-gray-400 focus-within:text-gray-600" autoComplete="off">
    <label htmlFor="search-field" className="sr-only">
      Search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FaSearch className="h-5 w-5 ml-4"/>
      <input className="flex-1 bg-transparent border-none outline-none placeholder-gray-500  text-white p-4" 
            name="search-field" 
            autoComplete="off"
            id="search-field" 
            placeholder="Search"
            type="search"
            onChange={(e)=>(setSearchTerm(e.target.value))}
            value={searchTerm}
            
            />
    </div>
  </form>
)
}
export default Searchbar;
