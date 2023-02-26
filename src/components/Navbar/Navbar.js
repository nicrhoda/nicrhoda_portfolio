import React from "react";
import  Dropdown  from 'react-bootstrap/Dropdown';
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <>
    <Nav className="float-right">
    <Dropdown>
      <Dropdown.Toggle variant="dark" bg="dark" className="dropDownBtn">
      <FontAwesomeIcon icon={faBars} />        
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className="mainPageBtn">Home</Dropdown.Item>
        <Dropdown.Item className="aboutMeBtn">About Me</Dropdown.Item>
        <Dropdown.Item className="myProjectsBtn">My Projects</Dropdown.Item>
        <Dropdown.Item className="resumeBtn">Resume</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav>
    </>
  )
}

