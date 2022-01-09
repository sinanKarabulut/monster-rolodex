import React from "react";

export const SearchBox=({ placeholder,handleChange }) =>(
    <input className="search" type='search' placeholder={placeholder}
    //  onChange={e=> console.log(e.target.value)} 
    onChange={handleChange}
    
     />
)