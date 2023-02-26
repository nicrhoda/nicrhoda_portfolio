import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Header() {
    return (
        <div className='header' id='hdr'>
            <h2 className='name'>Nicholas Rhoda</h2>
            <div className='navBarComp'><Navbar /></div>
        </div>
    ) 
};