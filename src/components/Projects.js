import React from "react";
import { Card } from "react-bootstrap";
import jate from "./../Images/jate.png";
import readme_generator from "./../Images/readme_generator.png";
import Button from "react-bootstrap/Button";
import fitLyfe from "./../Images/fitLyfe.png";

export default function Projects() {
  return (
    <div className="mainDisplayContainer">
      <a
        href="https://serene-tor-70980.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white jateCard projectCards">
          <Card.Img src={jate} alt="JATE Image" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">J.A.T.E.</Card.Title>
            <Card.Text className="projectsCardText">
              J.A.T.E. {"("}short for Just Another Text Editor{")"} is, as the
              name implies, a text editor PWA that saves user input to an
              indexed db.
            </Card.Text>
            <a
              href="https://github.com/nicrhoda/text_editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary" className="projectLink">
                J.A.T.E. GitHub Repo
              </Button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
      <a
        href="https://github.com/nicrhoda/readme-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white readmeCard projectCards">
          <Card.Img src={readme_generator} alt="readme generator" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">
              README Generator
            </Card.Title>
            <Card.Text className="projectsCardText">
              README Generator is an app that I made that runs in node and is
              used to generate custom readme files.
            </Card.Text>
            <a
              href="https://github.com/nicrhoda/readme-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary" className="projectLink">
                README Generator Repo
              </Button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
      <a
        href="https://mvc-mvps-fitness-tracker.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white fitLyfeCard projectCards">
          <Card.Img src={fitLyfe} alt="FitLyfe App" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">Fit Lyfe</Card.Title>
            <Card.Text className="projectsCardText">
              Fit Lyfe is an app that I developed with a group of my cohort
              members for one of our projects. The app uses a mysql database,
              express router, and handlebars for the templating engine to help
              users log and track their diet and exercise.
            </Card.Text>
            <a
              href="https://github.com/mvc-mvps/fitnessTracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary" className="projectLink">
                Fit Lyfe Repo
              </Button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
    </div>
  );
}
