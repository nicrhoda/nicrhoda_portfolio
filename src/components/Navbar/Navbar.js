import React, { useState, useEffect } from "react";
import  Dropdown  from 'react-bootstrap/Dropdown';
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <>
    <Nav className="navDrop">
    <Dropdown autoClose={false}>
      <Dropdown.Toggle variant="dark" bg="dark" className="dropDownBtn">
      <FontAwesomeIcon icon={faBars} />        
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown">
        <Dropdown.Item className={activeItem === "/" ? "activeTab" : ""}><Link to="/">Home</Link></Dropdown.Item>
        <Dropdown.Item className={activeItem === "/projects" ? "activeTab" : ""}><Link to="/projects">My Projects</Link></Dropdown.Item>
        <Dropdown.Item className={activeItem === "/resume" ? "activeTab" : ""}><Link to="/resume">Resume</Link></Dropdown.Item>
        <Dropdown.Item className={activeItem === "/contact" ? "activeTab" : ""}><Link to="/contact">Contact Me</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav>
    </>
  )
}

