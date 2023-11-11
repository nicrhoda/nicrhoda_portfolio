import React from "react";
import { Card } from "react-bootstrap";
import jate from "./../Images/jate.png";
import readme_generator from "./../Images/readme_generator.png";
import Button from "react-bootstrap/Button";
import fitLyfe from "./../Images/fitLyfe.png";
import paper_hands from "./../Images/paper_hands.png";
import techBlog from "./../Images/techBlog.png";
import noteTaker from "./../Images/noteTaker.png";
import teeTime from "./../Images/tee_time_sc.png";
import geckoMonitor from "./../Images/gecko_monitor_img.png"

export default function Projects() {
  return (
    <div className="mainDisplayContainer">
      <a
        href="https://gecko-monitor.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white teeTimeCard projectCards">
          <Card.Img src={geckoMonitor} alt="Gecko Monitor Homepage" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">Gecko Monitor</Card.Title>
            <Card.Text className="projectsCardText">
              Gecko Monitor is an app I created using AWS Amplify, React, Python, and DynamoDB to easily 
              monitor the conditions of my pet gecko's enclosure while I'm away from home. 
              More information about how the project came together can be found in the pages 
              About tab.
            </Card.Text>
            <a 
              href="https://github.com/d3v-d3mons/tee_time"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Button variant="outline-secondary" className="projectLink">
                  Gecko Monitor UI repo
                </Button>
              </a>
          </Card.ImgOverlay>
        </Card>
      </a>
      <a
        href="https://t33-time.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white teeTimeCard projectCards">
          <Card.Img src={teeTime} alt="Tee Time Homepage" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">Tee Time</Card.Title>
            <Card.Text className="projectsCardText">
              Tee Time is an app that I created for an in class project that
              utilizes the MERN stack. Using Apollo provider and Apollo server
              it makes requests to a Mongo Database to save and modify user
              data.
            </Card.Text>
            <a 
              href="https://github.com/d3v-d3mons/tee_time"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Button variant="outline-secondary" className="projectLink">
                  Tee Time Repo
                </Button>
              </a>
          </Card.ImgOverlay>
        </Card>
      </a>
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
      <a
        href="https://paper-hands.github.io/paper-hands/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white fitLyfeCard projectCards">
          <Card.Img src={paper_hands} alt="Paper-Hands App" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">Paper Hands</Card.Title>
            <Card.Text className="projectsCardText">
              Paper hands was the first group project that I was a part of. Our
              application is a stock market and cryptocurrency tracking app.
              Using a basic html and css front end and basic javascript backend
              it utilizes api's to fetch and display data and allows the user to
              save stocks or cryptocurrencies.
            </Card.Text>
            <a
              href="https://github.com/Paper-Hands/paper-hands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary" className="projectLink">
                Paper Hands Repo
              </Button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
      <a
        href="https://desolate-mountain-41073.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white fitLyfeCard projectCards">
          <Card.Img src={techBlog} alt="techBlog App" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">Tech Blog</Card.Title>
            <Card.Text className="projectsCardText">
              Tech Blog is a blog post site where a user can create a profile
              and create posts that will display on the homepage when they are
              logged in. The app utilizes handlebars for a templating engine and
              uses express middleware for routing and javascript backend.
            </Card.Text>
            <a
              href="https://github.com/nicrhoda/Blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary" className="projectLink">
                Tech Blog Repo
              </Button>
            </a>
          </Card.ImgOverlay>
        </Card>
      </a>
      <a
        href="https://stormy-ravine-82915.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="bg-dark text-white fitLyfeCard projectCards">
          <Card.Img src={noteTaker} alt="NoteTaker App" />
          <Card.ImgOverlay>
            <Card.Title className="projectsCardTitle">Note Taker</Card.Title>
            <Card.Text className="projectsCardText">
              Note Taker is a basic app that allows the user to add notes to a
              list with a title and description. It utilizes an express
              middleware and javascript backend to capture user input and
              storing them in json format so that data persists on the page.
            </Card.Text>
            <a
              href="https://github.com/nicrhoda/note-taker"
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
