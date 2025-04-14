import React, { useEffect, useRef, useState } from 'react';
import Search from '../Search/Search';
import './Navbar.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse, 
    faUserTie, 
    faHandshake, 
    faAddressBook, 
    faMagnifyingGlass,
    faFistRaised
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
    faHouse,
    faUserTie,
    faHandshake,
    faAddressBook,
    faMagnifyingGlass
};

const Navbar = ({ onSelectedId }) => {
    const [navitems, setNavitems] = useState([]);

    useEffect(() => {
        const fetchNavItems = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/navitems');
                const data = await response.json();
                setNavitems(data.items);
            } catch (error) {
                console.error("Error fetching nav items:", error);
            }
        };
        fetchNavItems();
    }, []);

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const [toggleNavbar, setToggleNavbar] = useState(false);

    return (
        <div className='Navbar'>
            <div className="navbar-logo">
                <FontAwesomeIcon icon={faFistRaised}/>
            </div>
            <div className="navbar-item-container">
                <Cursor position={position} />
                <ul className={toggleNavbar ? "hidden-navs":"navs-items"}>
                    {navitems.map((item) => (
                        <Tab 
                            key={item.id} 
                            icon={iconMap[item.icon]}
                            id={item.id}
                            setToggleNavbar={setToggleNavbar}
                            setPosition={setPosition}
                            onSelectedId={onSelectedId}
                        >
                            {item.name}
                        </Tab>
                    ))}
                </ul>
                <div className={toggleNavbar ? "active-search" : "inactive-search"}>
                    <Search className="Search" setToggleNavbar={setToggleNavbar} />
                </div>
            </div>
            <div className="sign">
                <h1>VergilDsanji</h1>
            </div>
        </div>
    );
};

const Tab = ({ children, setPosition, icon, setToggleNavbar, id, onSelectedId }) => {
    const ref = useRef(null);
    
    return (
        <li 
            ref={ref}
            onMouseEnter={() => {
                onSelectedId(id);
                if (!ref.current) return;
                const data = ref.current.getBoundingClientRect();
                setPosition({
                    left: data.left,
                    width: data.width,
                    opacity: 1,
                });
            }}

            onMouseLeave={() => {
                setPosition(prev => ({
                    ...prev,
                    opacity: 0
                }));
            }}

            onClick={() => {
                if (id === 4) {
                    setToggleNavbar(prev => !prev);
                }
            }}
            className='tab'
        >
            <div className="tab-child">
                <FontAwesomeIcon icon={icon} className="tab-icon" />
                {children}
            </div>
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={position}
            className='Cursor' 
        />
    );
}

export default Navbar;
