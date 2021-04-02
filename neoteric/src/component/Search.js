import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search(){
    return(
        <div className="search-box">
            <input type="text" placeholder="Search..."></input>
            <FaSearch className="search-btn"></FaSearch>
            
        </div>
    );
}
export default Search;