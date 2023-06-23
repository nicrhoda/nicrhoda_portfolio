import React from "react";
import profile from "./../Images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
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
      <h3 className="homePageBottomText">
        I recently finshed a full-stack coding bootcamp, and I'm working towards
        my first job in the field.
      </h3>
      <img className="profilePic" src={profile} alt="profile" />
      <div className="aboutMe">
        <h1 className="contentHeading">About Me</h1>
        <h3 className="aboutMeContent">
          I've always had an interest in computers and coding, now I'm trying to
          make it into a career. Outside of the realm of my keyboard and various
          programming languages, I really enjoy the outdoors, especially
          swimming! <FontAwesomeIcon icon={faPersonSwimming}></FontAwesomeIcon>
        </h3>
      </div>
    </div>
  );
}
