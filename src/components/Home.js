import React from "react";
import profile from "./../Images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSwimming  } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return(
        <div className="mainDisplayContainer">
            <h1 className="homePageTopText">{"<h1>"}Hey, I'm Nic!{"</h1>"}</h1>
            <h3 className="homePageBottomText">I am almost finished with full-stack coding bootcamp, and working towards my first job in the field.</h3>
            <img className="profilePic" src={profile} alt="profile" />
            <div className='aboutMe'>
            <h1 className='contentHeading'>About Me</h1>
            <h3 className='aboutMeContent'>I've always had an interest in computers and coding, now I'm trying to make
            it into a career.  Outside of the realm of my keyboard and various programming languages, I really enjoy 
            the outdoors, especially swimming! <FontAwesomeIcon icon={faPersonSwimming}></FontAwesomeIcon>
            </h3>
        </div>
        </div>
    )
}