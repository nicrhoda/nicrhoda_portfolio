import React from "react";
import { Card } from "react-bootstrap";
import jate from "./../Images/jate.png";
import readme_generator from "./../Images/readme_generator.png";

export default function Projects() {
  return (
    <div className="mainDisplayContainer">
      <a
        href="https://serene-tor-70980.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white jateCard">
          <Card.Img src={jate} alt="JATE Image" />
          <Card.ImgOverlay>
            <Card.Title>J.A.T.E.</Card.Title>
            <Card.Text>
              J.A.T.E. {"("}short for Just Another Text Editor{")"} is, as the
              name implies, a text editor PWA that saves user input to an
              indexed db.
            </Card.Text>
            <a
              href="https://github.com/nicrhoda/text_editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projectLink">J.A.T.E. GitHub Repo</button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
      <a
        href="https://github.com/nicrhoda/readme-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white readmeCard">
          <Card.Img src={readme_generator} alt="readme generator" />
          <Card.ImgOverlay>
            <Card.Title>README Generator</Card.Title>
            <Card.Text>
              README Generator is an app that I made that runs in node and is
              used to generate custom readme files.
            </Card.Text>
            <a
              href="https://github.com/nicrhoda/readme-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projectLink">README Generator Repo</button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
    </div>
  );
}
