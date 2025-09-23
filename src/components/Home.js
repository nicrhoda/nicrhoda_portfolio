import React from "react";
import profile from "./../Images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSwimming, faDumbbell, faHeadset, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="mainDisplayContainer">
      <h1 className="homePageTopText">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter

              .typeString("Hey, I'm Nic!")
              .pauseFor(1300)
              .deleteAll()
              .typeString("Welcome to my portfolio.")
              .pauseFor(1100)
              .deleteAll()
              .typeString("Feel free to have a look around!")
              .pauseFor(2000)

              .start();
          }}
        />
      </h1>
      <img className="profilePic" src={profile} alt="profile" />
      <div className="aboutMe">
        <h1 className="contentHeading">About Me</h1>
        <h3 className="aboutMeContent">
          Welcome to my portfolio! I'm a passionate web developer with a strong interest in building sleek, responsive websites 
          and user-friendly interfaces. When I'm not coding, you'll find me weightlifting at the gym <FontAwesomeIcon icon={faDumbbell}/>
          , swimming laps <FontAwesomeIcon icon={faPersonSwimming} />, flying FPV drones <FontAwesomeIcon icon={faVrCardboard} />
          , or diving into a good gaming session <FontAwesomeIcon icon={faHeadset} />. I love blending creativity with technical skills—whether it's crafting a personal
           project or optimizing a client’s web presence.

          Feel free to check out my web development projects
          , view my resume
          , or get in touch
          through the contact form below. I'm always open to new opportunities, collaborations, or just talking shop about tech and hobbies.
        </h3>
      </div>
    </div>
  );
}
