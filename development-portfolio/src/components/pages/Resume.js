import React from "react";
import AbsoluteWrapper from "../AbsoluteWrapper";
import Footer from "../Footer";

export default function Resume() {
    return (
        <AbsoluteWrapper>
            <div className="m-5 mt-0 mb-0 d-flex flex-column align-items-center align-items-lg-start">
                <h2 className="text-center text-lg-start">Resume</h2>
                    <br></br>
                    <h5><a href="https://docs.google.com/document/d/1VRYrZn1ywYJyVezHdJHB3-S9vtUisbd1upvIRaHX4sE/export?format=pdf">Download my Resume</a></h5>
                    <br></br>
                <h4>Technical Skills</h4>
                    <ul className="col-9">
                        <li>Javascript ES6+</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>React</li>
                        <li>Node JS</li>
                        <li>Express</li>
                        <li>NoSQL and SQL</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Apollo Server</li>
                        <li>GraphQL</li>
                        <li>Git</li>
                        <li>Bootstrap</li>
                    </ul>
                <h4>Languages</h4>
                    <ul className="col-9">
                        <li>Javascript</li>
                        <li>MySQL</li>
                    </ul>
                <h4>Certifications</h4>
                    <ul className="col-9">
                        <li>Graduate: Georgia Tech University Full Stack Development Boot Camp</li>
                    </ul>
            </div>
            <Footer />
        </AbsoluteWrapper>
    );
};