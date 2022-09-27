import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="d-flex justify-content-center">
            <a className="m-2 footer-icon" href="https://github.com/MMMPhoto" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a className="m-2 footer-icon" href="https://www.linkedin.com/in/maxmcdonough/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a className="m-2 footer-icon" href="https://twitter.com/maxmcdonough" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
        </footer>
    )
};