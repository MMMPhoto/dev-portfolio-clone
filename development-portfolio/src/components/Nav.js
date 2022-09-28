import React from "react";
import "../styles/Nav.css";

export default function Nav({pages, currentPage, handlePage}) { 
    return (
        <nav className="col-6 p-3 align-self-end">
            <ul className="nav nav-pills nav-fill flex-row justify-content-end navbar-nav">
                {pages.map((page) => (
                    <li key={page.id} className="nav-item m-2">
                        <a href={page.url} onClick={() => handlePage(page.name)} className={page.name === currentPage ? "nav-link active activeBtn" : "nav-link"}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};