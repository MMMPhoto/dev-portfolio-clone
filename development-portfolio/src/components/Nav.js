import React from "react";
import "../styles/Nav.css";

export default function Nav({pages, currentPage, handlePage}) { 
    return (
        <nav className="col-12 col-lg-6 p-3 align-self-center align-self-lg-end">
            <ul className="nav nav-pills nav-fill flex-row justify-content-end navbar-nav">
                {pages.map((page) => (
                    <li key={page.id} className="nav-item col-4 col-lg-1 ms-5 me-5 ms-lg-4 me-lg-4">
                        <a href={page.url} onClick={() => handlePage(page.name)} className={page.name === currentPage ? "nav-link active activeBtn" : "nav-link"}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};