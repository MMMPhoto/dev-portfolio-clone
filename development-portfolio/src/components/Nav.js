import React from "react";

export default function Nav({pages, currentPage, handlePage}) { 
    return (
        <nav class="col-6 p-3">
            <ul class="d-flex flex-row justify-content-end navbar-nav">
                {pages.map((page) => (
                <li key={page.id} class="m-2">
                    <a href={page.url} onClick={() => handlePage(page.name)}>{page.name}</a>
                </li>
                ))}
                <li></li>
            </ul>
        </nav>
    );
};