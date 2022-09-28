import React from "react";
import "../styles/Header.css";
import mmmLogo from "../images/mmm-web-logo.svg";

export default function Header({pageList, currentPage, handlePage}) {

    return (
        <header className="d-flex flex-column align-items-center col-12 col-lg-5 p-3 text-center">
            <h1 id="title">MAX MCDONOUGH</h1>
            <h4 id="subtitle">SOFTWARE DEVELOPMENT</h4>            
            <div id="logoContainer" className="text-center">
                <img id="logoImg" src={mmmLogo} alt="mmm site logo" />
            </div>
        </header>
    );
};