import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () =>{
    return (<div className="search">
        <MdSearch className="search-icon" size="1.5em"/>
        <input type="text" placeholder="Search..."/>
        </div>)
}

export default Search;