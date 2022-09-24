import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <h1 className="d-flex justify-content-center">
                <a className="m-2" href="https://github.com/MMMPhoto" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                <a className="m-2" href="https://www.linkedin.com/in/maxmcdonough/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                <a className="m-2" href="https://twitter.com/maxmcdonough" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            </h1>
        </footer>
    )
};