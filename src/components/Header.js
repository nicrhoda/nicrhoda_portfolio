import React from 'react';

export default function Header() {
    return (
        <div className='header' id='hdr'>
            <h2 className='name'>Nicholas Rhoda</h2>
            <nav className='navBar'>
            <button className='btn' id='projectsBtn'>My Projects</button>
            <button className='btn' id='resume'>Resume</button>
            <button className='btn' id='email'>Email Me</button>
            </nav>
        </div>
    ) 
};