import React from "react";

export default function Resume() {
    return (
        <div className="m-5 mt-0 mb-0 d-flex flex-column align-items-center align-items-lg-start">
             <h2 className="text-center text-lg-start">Resume</h2>
                <br></br>
                <h5><a href="https://drive.google.com/uc?export=download&id=10eN_6-1cOHhLafMNmpsXhN0OWkmkPEFk">Download my Resume</a></h5>
                <br></br>
             <h4>Proficiencies</h4>
                <ul className="col-9">
                    <li>Full Stack Web and App Development</li>
                    <li>React JS</li>
                    <li>NoSQL and SQL Databases</li>
                    <li>GraphQL and RESFUL API Routing</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MVC software architecture</li>
                    <li>OOP Programming</li>
                    <li>Basic Javascript, CSS, and HTML</li>
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
    )
};