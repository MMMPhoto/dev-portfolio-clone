import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";

import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="d-flex justify-content-center">
            <a className="m-2 footer-icon" href="https://github.com/MMMPhoto" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a className="m-2 footer-icon" href="https://www.linkedin.com/in/maxmcdonough/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a className="m-2 footer-icon" href="https://stackoverflow.com/users/18729114/waxmell" target="_blank" rel="noreferrer"><ImStackoverflow /></a>
        </footer>
    )
};