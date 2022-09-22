import React from "react";
import Nav from "./Nav";

export default function Header(pages, currentPage, setCurrentPage) {
    return (
        <header>
            <h1>Max McDonough</h1>
            <Nav pages={pages.pages} currentPage={currentPage}/>
            <button onClick={() => setCurrentPage('Contact')}>Press me</button>
        </header>
    );
};