import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import './Navbar.css';

export default function Navbar() {
    return(
        <NavDropdown className='navDropdown' eventKey={1} title='test' id='basicNavDropdown'>
            <div className='navBar col-sm-1'>
            <button className='btn' id='projectsBtn'>My Projects</button>
            <button className='btn' id='resume'>Resume</button>
            <button className='btn' id='email'>Email Me</button>
            </div>
        </NavDropdown>
    )
}