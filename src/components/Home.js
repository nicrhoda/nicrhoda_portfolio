import React from "react";
import profile from "./../Images/profile.jpg"

export default function Home() {
    return(
        <div className="mainDisplayContainer">
            <img className="profilePic" src={profile} alt="profile" />
            <h1 className="homePageTopText">{"<h1>"}Hey, I'm Nic!{"</h1>"}</h1>
            <h3 className="homePageBottomText">I am almost finished with full-stack coding bootcamp, and working towards my first job in the field.</h3>
        </div>
    )
}