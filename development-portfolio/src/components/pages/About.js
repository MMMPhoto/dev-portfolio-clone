import React from "react";
import "../../styles/About.css";
import maxPhoto from "../../images/Atlanta-Wedding-Photographer-LeahAndMark-0187.jpg";

export default function About() {
    return (
        <div className="ps-5">
            <h2>About Me</h2>
                <div className="d-flex flex-row justify-content-between">
                    <img className="align-self-start" id="bio-photo" src={maxPhoto} alt="pic of Max"></img>
                    <div className="col-8">
                        <p>After graduating with a BA in Film and Video Production from Georgia State University in 2004, I spent over 16 years working as a freelancer in the Movie and TV industry in Atlanta. I worked in a variety of differnet crew postions on many differnet types of productions.</p> 
                            <br></br>
                        <p>For the last 8 years I have worked primarily as a Camera Operator on non-scripted television shows. During that time I added work as a Stills Photographer, focusing on long exposure landscape photography. In 2017, I obtained my FAA remote pilot's license and began work in Drone Photography and Videography.</p>
                            <br></br>
                        <p>Following a long work hiatus at the start of the covid-19 pandemic, I craved a career change. Deciding to focus in Web Development, I completed self-guided, online courses in HTML and CSS. After deciding I needed a more structured learning environment, I enrolled in Georgia Tech's part time Full Stack Development Bootcamp in the spring of 2022, where I will receive my certifcation in mid-October.</p>
                    </div>
                </div>
        </div>   
    )
};