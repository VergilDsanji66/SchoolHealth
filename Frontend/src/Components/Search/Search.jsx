import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

const Search = ({ setToggleNavbar }) => {
  return (
    <div className='search-container'>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder='Search....' />
        <FontAwesomeIcon 
            icon={faXmark} 
            onClick={() => setToggleNavbar(prev => !prev)} 
            className="search-close-icon"
        />
    </div>
  );
}

export default Search;
