import React from "react";
import "../../styles/About.css";
import maxPhoto from "../../images/Atlanta-Wedding-Photographer-LeahAndMark-0187.jpg";

export default function About() {
    return (
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

                        {/* After graduating with a BA in Film and Video Production from Georgia State University in 2004, I spent over 16 years working as a freelancer in the Movie and TV industry in Atlanta. I worked in a variety of differnet crew postions on many differnet types of productions.
                       
                    <p>For the last 8 years I have worked primarily as a Camera Operator on non-scripted television shows. During that time I added work as a Stills Photographer, focusing on long exposure landscape photography. In 2017, I obtained my FAA remote pilot's license and began work in Drone Photography and Videography.</p>
                        <br></br>
                    <p>Following a long work hiatus at the start of the covid-19 pandemic, I craved a career change. Deciding to focus in Web Development, I completed self-guided, online courses in HTML and CSS. After deciding I needed a more structured learning environment, I enrolled in Georgia Tech's part time Full Stack Development Bootcamp in the spring of 2022, where I will receive my certifcation in mid-October.</p> */}
                </div>
            </div>
        </div>   
    )
};