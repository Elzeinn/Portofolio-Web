import React, { useState, useEffect, useRef } from 'react';
import feather from 'feather-icons';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const navRef = useRef(null);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive); 
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
        <nav className='navbar' ref={navRef}>
            <a href="#" className='navbar-logo'>Alam <span>Code</span></a>
            <div className={`navbar-nav ${isMenuActive ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="navbar-extra">
                <a href="#" id='search' dangerouslySetInnerHTML={{ __html: feather.icons.search.toSvg() }} />
                <a href="#" id='hamburger-menu' onClick={toggleMenu} dangerouslySetInnerHTML={{ __html: feather.icons.menu.toSvg() }} />
            </div>
        </nav>
        </>
    );
}

export default Header;
