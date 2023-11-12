import React from "react";
import { Card } from "react-bootstrap";
import resume_placeholder from "./../Images/nicholas_rhoda_resume.png"
import { Button } from "react-bootstrap";
import "./../Assets/Resume_08_2023.pdf";

export default function Resume () {
    return (
        <div className="mainDisplayContainer">
            <h1 className="contentHeading">My Resume</h1>
            <Card className="resumeCard">
                <Card.Img variant="top" src={resume_placeholder} />
                <Card.Body>
                    <Card.Title className="resumeCardTitle">My Resume</Card.Title>
                    <Card.Text className="resumeCardText">
                        An overview of my resume along with this link to download a copy of it.
                    </Card.Text>
                    <a href="./Assets/Resume_08_2023.pdf" download><Button variant="outline-secondary">Download</Button></a>
                </Card.Body>
            </Card>
        </div>
    )
}