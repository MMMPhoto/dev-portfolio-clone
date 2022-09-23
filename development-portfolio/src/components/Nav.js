import React from "react";

export default function Nav({pages, currentPage, handlePage}) { 
    return (
        <nav className="col-6 p-3">
            <ul className="nav nav-pills nav-fill flex-row justify-content-end navbar-nav">
                {pages.map((page) => (
                <li key={page.id} class="nav-item m-2">
                    <a href={page.url} onClick={() => handlePage(page.name)} className={page.name === currentPage ? 'nav-link active' : "nav-link"}>{page.name}</a>
                </li>
                ))}
            </ul>
        </nav>
    );
};