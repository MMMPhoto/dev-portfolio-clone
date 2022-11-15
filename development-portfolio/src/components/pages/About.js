import React from "react";
import "../../styles/About.css";
import AbsoluteWrapper from "../AbsoluteWrapper";
import Footer from "../Footer";
import maxPhoto from "../../images/max-photo.jpg";

export default function About() {
    return (
        // <AbsoluteWrapper>
            <div className="m-5 mt-0 mb-0 d-flex flex-column align-items-center align-items-lg-start">
                <h2>About Me</h2>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
                    <img className="align-self-center align-self-lg-start" id="bio-photo" src={maxPhoto} alt="pic of Max"></img>
                    <div className="mt-3 col-12 col-lg-8">
                        <p>Front End Web Developer with extensive experience in the media and visual arts, providing an intuitive understanding of how to create a seamless and polished user experience. Recently earned a certification in Full Stack Development from Georgia Tech University, specializing in Javascript ES6+, React, NodeJS, and RESTful APIs.</p>
                        <br></br>
                        <p>I approach each new project with a focus on creating a Minimum Viable Product first and then using Agile workflow to continuously improve the user experience. I am passionate about developing apps with a focus on visual media, mobile-first design, and location integration. On a recent group project developing a single-page MERN app, I took the lead in integrating the Google Maps API and set up a cloud database to store user-uploaded media files.</p>
                        <br></br>
                        <p>As a creative problem solver who has spent his entire career learning new technologies and working very quickly with teams of new people, I am energized when asked to solve a problem that I have never faced before. I am excited to contribute my skills to a team of developers building creative new ways of interacting with technology.</p>
                    </div>
                </div>
            </div>
            // <Footer />
        // </AbsoluteWrapper>
    );
};