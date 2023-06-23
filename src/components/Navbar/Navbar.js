import React, { useState, useEffect } from "react";
import  Dropdown  from 'react-bootstrap/Dropdown';
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <>
    <Nav className="navDrop">
    <Dropdown autoClose={false} defaultShow={true}>
      <Dropdown.Toggle variant="dark" bg="dark" className="dropDownBtn">
      <FontAwesomeIcon icon={faBars} />        
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown">
        <Dropdown.Item href="/" className={activeItem === "/" ? "activeTab" : "dropdownSelect"}>Home</Dropdown.Item>
        <Dropdown.Item href="/projects" className={activeItem === "/projects" ? "activeTab" : "dropdownSelect"}>My Projects</Dropdown.Item>
        <Dropdown.Item href="/resume" className={activeItem === "/resume" ? "activeTab" : "dropdownSelect"}>Resume</Dropdown.Item>
        <Dropdown.Item href="/contact" className={activeItem === "/contact" ? "activeTab" : "dropdownSelect"}>Contact Me</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav>
    </>
  )
}

