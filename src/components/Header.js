import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export default function Header() {
    return (
        <header>
            <h2 className='name'><Link to="/">_nicrhoda_</Link></h2>
            <div className='navBarComp'><Navbar /></div>
        </header>
    ) 
};