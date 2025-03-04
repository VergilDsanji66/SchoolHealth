import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { navItems } from '../../assets/assets';

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <div className="header">
      <div className="top-list">
      <h1>StudyPluse</h1>
      <ul className="headerList">
        <li>Home</li>
        {navItems.map((item, index) => (
          <div
          key = {item.id} 
          className="grid">
            <p>{item.name}</p>
          </div>
        ))}
      </ul>
      <button>Join</button>
      </div>
      <div className="bottom-list">
        {navItems.map((item, index) => (
          <div
          key={item.id} 
          className={hoveredIndex === index ? "show" : "hide"}>
            <div className="grid">
              <div className="grid-items">
                <h2>{item.name}</h2>
              </div>
              <div className="grid-items">Additional Info</div>
              <div className="grid-items">More Details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
