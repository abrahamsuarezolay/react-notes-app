import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) =>{

    return (<div className="search">
        <MdSearch className="search-icon" size="1.5em"/>
        <input type="text" placeholder="Search..." onChange={(event)=>handleSearchNote(event.target.value)}/>
        </div>)
}

export default Search;