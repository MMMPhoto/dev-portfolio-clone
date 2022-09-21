import React from "react";
import Nav from "./Nav";

const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

export default function Header() {
    return (
        <header>
            <h1>Max McDonough</h1>
            <Nav pages={pages}/>
        </header>
    );
};