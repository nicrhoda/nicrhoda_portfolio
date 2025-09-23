import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import background from './../Images/portfolio_background.jpg'
import background2 from './../Images/portfolio_background2.jpg'


export default function Header() {

    // Toggles background in use when button is pressed
    const toggleBackground = () => {
        console.log("toggling")
        const newImage =
            document.body.style.backgroundImage === background
            ? background2
            : background;
    };


    const [theme, setTheme] = useState(() => {
    // Get initial theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
    // Apply theme to body
    document.body.className = theme;
    document.body.style.transition = 'background-image 0.5s';

    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

    return (
        <header>
            <h2 className='name'><Link to="/">_nicrhoda_</Link></h2>
            <Button className='darkMode' size='sm' variant={theme === 'light' ? 'outline-dark' : 'outline-light'} onClick={() => {toggleTheme(); toggleBackground();}}>{theme ==='light' ? 'Light Mode' : 'Dark Mode'}</Button>
            <div className='navBarComp'><Navbar /></div>
        </header>
    ) 
}