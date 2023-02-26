import React from "react";
import  Dropdown  from 'react-bootstrap/Dropdown';
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Nav className="navDrop float-right">
    <Dropdown>
      <Dropdown.Toggle variant="dark" bg="dark" className="dropDownBtn">
      <FontAwesomeIcon icon={faBars} />        
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className="mainPageBtn"><Link to="/">Home</Link></Dropdown.Item>
        <Dropdown.Item className="aboutMeBtn"><Link to="/about">About Me</Link></Dropdown.Item>
        <Dropdown.Item className="myProjectsBtn"><Link to="/projects">My Projects</Link></Dropdown.Item>
        <Dropdown.Item className="resumeBtn">Resume</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav>
    </>
  )
}

