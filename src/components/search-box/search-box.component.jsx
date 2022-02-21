import React from "react";
import './search-box.styles.css';

export const SearchBox = ({placeholder,handleChange})=>(



 <div className="search">
            <input 
            type="search" 
      onChange={handleChange}
      placeholder={placeholder} 
      required/>
      </div>

     
     
    





);